import './About.css'
import fotoPerfil from '../assets/foto-perfil.jpg'

const STATS = [
  { value: '7+', label: 'Projetos Concluídos', icon: '🚀' },
  { value: '10+', label: 'Tecnologias', icon: '⚡' },
  { value: '100%', label: 'Comprometimento', icon: '🎯' },
]

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Quem sou eu</span>
          <h2 className="section__title">Sobre Mim</h2>
          <div className="section__divider" />
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <div className="about__avatar-wrap">
              <div className="about__avatar-bg" />
              <img src={fotoPerfil} alt="Lucas Brandão" className="about__avatar about__avatar--photo" />
              <div className="about__avatar-badge">
                <span>👋</span>
                <span>Olá!</span>
              </div>
            </div>
          </div>

          <div className="about__text">
            <h3 className="about__subtitle">
              Desenvolvedor Front-end com experiência em React, TypeScript e arquitetura full-stack
            </h3>

            <p className="about__paragraph">
              Eu sou o Lucas Brandão Cabral. Trabalho com <strong>desenvolvimento front-end</strong> e curto
              transformar ideias em interfaces que realmente funcionam bem no dia a dia.
              Já desenvolvi desde <strong>e-commerces</strong> até <strong>dashboards</strong>, sempre tentando deixar tudo
              simples de usar e bem organizado por trás.
            </p>

            <p className="about__paragraph">
              No meu dia a dia uso bastante <strong>React</strong>, <strong>JavaScript moderno</strong> e <strong>TypeScript</strong>.
              Tenho experiência integrando APIs, organizando estado da aplicação e
              cuidando da parte visual com <strong>CSS mais avançado</strong>. Também utilizo <strong>Vite</strong>
              nos projetos e <strong>Git</strong> para versionamento.
            </p>


            <p className="about__paragraph">
              Já entreguei projetos full-stack com <strong>tRPC</strong> e <strong>SQLite</strong>,
              e sigo evoluindo aprofundando atualmente em <strong>Node.js</strong> e{' '}
              <strong>Next.js</strong>.
            </p>

            <div className="about__tags">
              {['React', 'JavaScript ES6+', 'TypeScript', 'CSS3', 'REST API', 'tRPC', 'Vite', 'Git'].map((tag) => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>

            <div className="about__actions">
              <button
                className="btn btn--primary"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vamos conversar
              </button>
              <button
                className="btn btn--outline"
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver projetos
              </button>
            </div>
          </div>
        </div>

        <div className="about__stats">
          {STATS.map(({ value, label, icon }) => (
            <div key={label} className="about__stat">
              <span className="about__stat-icon">{icon}</span>
              <span className="about__stat-value">{value}</span>
              <span className="about__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
