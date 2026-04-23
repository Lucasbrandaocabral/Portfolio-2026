import { useState } from 'react'
import './Contact.css'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'E-mail',
    value: 'lucasbrandao11br@gmail.com',
    href: 'mailto:lucasbrandao11br@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucasbrandaocabral',
    href: 'https://linkedin.com/in/lucasbrandaocabral',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Lucasbrandaocabral',
    href: 'https://github.com/Lucasbrandaocabral',
  },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Fale comigo</span>
          <h2 className="section__title">Entre em Contato</h2>
          <div className="section__divider" />
          <p className="section__subtitle">
            Tem um projeto em mente ou quer trocar uma ideia? Estou disponível
            para novas oportunidades e colaborações.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-title">Vamos trabalhar juntos!</h3>
              <p className="contact__info-text">
                Estou sempre aberto a discutir novos projetos, ideias criativas
                ou oportunidades de fazer parte de algo incrível.
              </p>

              <div className="contact__items">
                {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__item"
                  >
                    <span className="contact__item-icon">{icon}</span>
                    <div>
                      <p className="contact__item-label">{label}</p>
                      <p className="contact__item-value">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact__availability">
                <span className="contact__availability-dot" />
                <span>Disponível para freela e oportunidades CLT</span>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="subject">Assunto</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="contact__input"
                placeholder="Sobre o que você quer falar?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder="Descreva seu projeto ou deixe sua mensagem..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn--primary btn--lg contact__submit${status === 'sending' ? ' contact__submit--loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="contact__spinner" />
                  Enviando...
                </>
              ) : status === 'sent' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Enviado com sucesso!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
