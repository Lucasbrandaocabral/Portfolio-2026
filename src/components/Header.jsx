import { useState, useEffect } from 'react'
import './Header.css'
import logoGif from '../assets/logo.gif'

const NAV_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
]

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id))
      const current = sections.findLast(
        (el) => el && el.getBoundingClientRect().top <= 120
      )
      if (current) setActiveSection(current.id)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">
          <button className="header__logo" onClick={() => scrollTo('hero')}>
            <img src={logoGif} alt="LB" className="header__logo-gif" />
            <span className="header__logo-text">Lucas Brandão</span>
          </button>

          <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                className={`header__nav-link${activeSection === id ? ' header__nav-link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="header__actions">
            <button
              className="header__theme-btn"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="header__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}
