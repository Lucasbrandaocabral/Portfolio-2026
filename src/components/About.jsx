import { motion } from 'framer-motion'
import Reveal from './Reveal'
import './About.css'
import fotoPerfil from '../assets/foto-perfil.jpg'

const STATS = [
  { value: '10+', label: 'Projetos entregues' },
  { value: '15+', label: 'Tecnologias usadas' },
  { value: '3+', label: 'Anos programando' },
]

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">sobre</span>
          <h2 className="section__title">Quem sou</h2>
          <div className="section__divider" />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__visual" y={48}>
            <div className="about__avatar-wrap">
              <div className="about__avatar-bg" />
              <img src={fotoPerfil} alt="Lucas Brandão" className="about__avatar about__avatar--photo" />
              <div className="about__avatar-badge">
                <span>👋</span>
                <span>Olá!</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="about__text" delay={0.15} y={48}>
            <h3 className="about__subtitle">
              Sou o Lucas, formado em ADS pela Cruzeiro do Sul, foco em React, TypeScript e em deixar as coisas bem feitas
            </h3>

            <p className="about__paragraph">
              Comecei programando por curiosidade e fui ficando. Hoje trabalho principalmente
              com <strong>React</strong>, <strong>TypeScript</strong> e <strong>CSS</strong>.
              Gosto bastante da parte visual, de fazer animação com <strong>Framer Motion</strong>{' '}
              e de cuidar dos detalhes que a maioria ignora.
            </p>

            <p className="about__paragraph">
              No trabalho, cuido das rotinas administrativas de um serviço de assistência
              social em Guaianases, às vezes cobrindo a gerência, e foi dali que saiu o{' '}
              <strong>Portal do Usuário</strong>: o sistema que a equipe usa todo dia, com
              React no front e <strong>Node.js</strong>, <strong>Express</strong>,{' '}
              <strong>Prisma</strong> e <strong>PostgreSQL</strong> no back. Antes disso já
              tinha entregado dashboards, um portal corporativo no Senac e o HoloFrame, que
              nasceu quando comecei a brincar com <strong>Python</strong> pra visão computacional.
            </p>

            <p className="about__paragraph">
              Fora isso, toco projetos meus que ainda estão em desenvolvimento, como a{' '}
              <strong>Olitt</strong> e o <strong>Seja Turing</strong>. Também fiz uma loja com
              agendamento pra um salão de beleza que conversava com a <strong>Alexa</strong>:
              dava pra registrar o atendimento, a forma de pagamento e o valor direto no
              dashboard, e perguntar qual era o próximo horário. Ficou estacionado porque o
              custo não fechou pra cliente, mas tinha muito potencial.
            </p>

            <p className="about__paragraph">
              Ainda tenho muito pra aprender e tô bem tranquilo com isso. Estou aprofundando
              em <strong>Next.js</strong> e em back-end, e aberto a projetos que me tirem da
              zona de conforto.
            </p>

            <div className="about__tags">
              {['React', 'JavaScript ES6+', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'CSS3', 'REST API', 'tRPC', 'Node.js', 'PostgreSQL', 'Python', 'Vite', 'Vercel', 'Git'].map((tag) => (
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
          </Reveal>
        </div>

        <div className="about__stats">
          {STATS.map(({ value, label }, index) => (
            <Reveal key={label} delay={index * 0.12}>
              <motion.div
                className="about__stat"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
