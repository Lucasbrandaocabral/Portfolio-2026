import { useState, useCallback } from 'react'
import './Calculator.css'

const BUTTONS = [
  { label: 'C',   type: 'action',    action: 'clear' },
  { label: '+/-', type: 'action',    action: 'negate' },
  { label: '%',   type: 'action',    action: 'percent' },
  { label: '÷',   type: 'operator',  value: '/' },
  { label: '7',   type: 'digit',     value: '7' },
  { label: '8',   type: 'digit',     value: '8' },
  { label: '9',   type: 'digit',     value: '9' },
  { label: '×',   type: 'operator',  value: '*' },
  { label: '4',   type: 'digit',     value: '4' },
  { label: '5',   type: 'digit',     value: '5' },
  { label: '6',   type: 'digit',     value: '6' },
  { label: '−',   type: 'operator',  value: '-' },
  { label: '1',   type: 'digit',     value: '1' },
  { label: '2',   type: 'digit',     value: '2' },
  { label: '3',   type: 'digit',     value: '3' },
  { label: '+',   type: 'operator',  value: '+' },
  { label: '0',   type: 'digit',     value: '0',  wide: true },
  { label: ',',   type: 'digit',     value: '.' },
  { label: '=',   type: 'equals' },
]

const INITIAL = { display: '0', prev: null, operator: null, fresh: true }

function calculate(a, op, b) {
  const n1 = parseFloat(a)
  const n2 = parseFloat(b)
  switch (op) {
    case '+': return n1 + n2
    case '-': return n1 - n2
    case '*': return n1 * n2
    case '/': return n2 === 0 ? 'Erro' : n1 / n2
    default:  return n2
  }
}

function fmt(value) {
  if (value === 'Erro') return 'Erro'
  const num = parseFloat(value)
  if (isNaN(num)) return '0'
  const str = num.toPrecision(10).replace(/\.?0+$/, '')
  return str.length > 10 ? num.toExponential(4) : str
}

export default function Calculator() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState(INITIAL)
  const [history, setHistory] = useState([])
  const [pressed, setPressed] = useState(null)

  const flash = (key) => {
    setPressed(key)
    setTimeout(() => setPressed(null), 120)
  }

  const dispatch = useCallback((btn) => {
    flash(btn.label)

    setState((s) => {
      if (btn.type === 'digit') {
        const val = btn.value
        if (val === '.' && s.display.includes('.')) return s
        if (s.fresh) return { ...s, display: val === '.' ? '0.' : val, fresh: false }
        const next = s.display === '0' && val !== '.' ? val : s.display + val
        return { ...s, display: next.slice(0, 12) }
      }

      if (btn.type === 'operator') {
        if (s.operator && !s.fresh) {
          const result = fmt(calculate(s.prev, s.operator, s.display))
          return { display: result, prev: result, operator: btn.value, fresh: true }
        }
        return { ...s, prev: s.display, operator: btn.value, fresh: true }
      }

      if (btn.type === 'equals') {
        if (!s.operator) return s
        const result = fmt(calculate(s.prev, s.operator, s.display))
        setHistory((h) => [
          { expr: `${s.prev} ${s.operator} ${s.display}`, result },
          ...h.slice(0, 4),
        ])
        return { display: result, prev: null, operator: null, fresh: true }
      }

      if (btn.action === 'clear') return INITIAL
      if (btn.action === 'negate') return { ...s, display: fmt(parseFloat(s.display) * -1) }
      if (btn.action === 'percent') return { ...s, display: fmt(parseFloat(s.display) / 100) }

      return s
    })
  }, [])

  const expression = state.operator
    ? `${state.prev} ${state.operator}`
    : history[0]
      ? `${history[0].expr} =`
      : ''

  return (
    <>
      {open && <div className="calc-overlay" onClick={() => setOpen(false)} />}

      <div className={`calc-widget${open ? ' calc-widget--open' : ''}`}>

        {/* Panel */}
        <div className="calc-panel" role="dialog" aria-label="Calculadora">
          <div className="calc-panel__header">
            <div className="calc-panel__header-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="10" y2="10" />
                <line x1="14" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="10" y2="14" />
                <line x1="14" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="10" y2="18" />
                <line x1="14" y1="18" x2="16" y2="18" />
              </svg>
            </div>
            <span>Calculadora</span>
            <button className="calc-panel__close" onClick={() => setOpen(false)} aria-label="Fechar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="calc-display">
            <p className="calc-display__expr">{expression || '\u00A0'}</p>
            <p className="calc-display__value">{state.display}</p>
          </div>

          {history.length > 0 && (
            <div className="calc-history">
              {history.map((item, i) => (
                <div key={i} className="calc-history__item">
                  <span className="calc-history__expr">{item.expr} =</span>
                  <span className="calc-history__result">{item.result}</span>
                </div>
              ))}
            </div>
          )}

          <div className="calc-grid">
            {BUTTONS.map((btn) => (
              <button
                key={btn.label}
                className={[
                  'calc-btn',
                  `calc-btn--${btn.type}`,
                  btn.wide ? 'calc-btn--wide' : '',
                  pressed === btn.label ? 'calc-btn--pressed' : '',
                ].filter(Boolean).join(' ')}
                onClick={() => dispatch(btn)}
                aria-label={btn.label}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trigger button */}
        <button
          className="calc-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar calculadora' : 'Abrir calculadora'}
          aria-expanded={open}
        >
          <span className="calc-trigger__icon calc-trigger__icon--open">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="10" y2="10" />
              <line x1="14" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="10" y2="18" />
              <line x1="14" y1="18" x2="16" y2="18" />
            </svg>
          </span>
          <span className="calc-trigger__icon calc-trigger__icon--close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
          {!open && <span className="calc-trigger__pulse" />}
        </button>
      </div>
    </>
  )
}
