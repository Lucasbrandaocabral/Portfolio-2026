import { motion } from 'framer-motion'
import Reveal from './Reveal'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Front-end',
    icon: '🎨',
    skills: [
      { name: 'JavaScript ES6+', level: 'Intermediário', color: '#f7df1e' },
      { name: 'React + Hooks', level: 'Intermediário', color: '#61dafb' },
      { name: 'Framer Motion', level: 'Intermediário', color: '#0055ff' },
      { name: 'Tailwind CSS', level: 'Intermediário', color: '#38bdf8' },
      { name: 'CSS3 & Animações', level: 'Avançado', color: '#1572b6' },
      { name: 'Design Responsivo', level: 'Avançado', color: '#06b6d4' },
    ],
  },
  {
    category: 'Arquitetura & Ferramentas',
    icon: '🛠️',
    skills: [
      { name: 'TypeScript', level: 'Intermediário', color: '#3178c6' },
      { name: 'REST API / tRPC', level: 'Intermediário', color: '#10b981' },
      { name: 'Git & GitHub', level: 'Intermediário', color: '#f05032' },
      { name: 'Vite / npm', level: 'Intermediário', color: '#646cff' },
      { name: 'Vercel', level: 'Intermediário', color: '#a3a3a3' },
      { name: 'SQLite', level: 'Intermediário', color: '#003b57' },
    ],
  },
  {
    category: 'Em Aprendizado',
    icon: '📚',
    skills: [
      { name: 'Node.js', level: 'Básico', color: '#339933' },
      { name: 'Next.js', level: 'Básico', color: '#a3a3a3' },
      { name: 'Python & IA', level: 'Básico', color: '#3776ab' },
      { name: 'Firebase', level: 'Básico', color: '#f59e0b' },
    ],
  },
]

const TECH_STACK = [
  { name: 'JavaScript', bg: '#f7df1e15', color: '#b8a000' },
  { name: 'React', bg: '#61dafb15', color: '#0ea5e9' },
  { name: 'Framer Motion', bg: '#0055ff15', color: '#3b82f6' },
  { name: 'Tailwind CSS', bg: '#38bdf815', color: '#38bdf8' },
  { name: 'CSS3', bg: '#1572b615', color: '#1572b6' },
  { name: 'Vite', bg: '#646cff15', color: '#646cff' },
  { name: 'Git', bg: '#f0503215', color: '#f05032' },
  { name: 'REST API', bg: '#10b98115', color: '#10b981' },
  { name: 'TypeScript', bg: '#3178c615', color: '#3178c6' },
  { name: 'tRPC', bg: '#398ccb15', color: '#398ccb' },
  { name: 'SQLite', bg: '#003b5715', color: '#44a8d8' },
  { name: 'Node.js', bg: '#33993315', color: '#339933' },
  { name: 'Next.js', bg: '#6366f115', color: '#818cf8' },
  { name: 'Python', bg: '#3776ab15', color: '#5b9bd5' },
  { name: 'Vercel', bg: '#73737315', color: '#a3a3a3' },
  { name: 'Figma', bg: '#f24e1e15', color: '#f24e1e' },
]

function MarqueeRow({ items, reverse = false }) {
  const group = (hidden) => (
    <div className="skills__marquee-group" aria-hidden={hidden || undefined}>
      {items.map(({ name, bg, color }) => (
        <div
          key={name}
          className="skills__tech-chip"
          style={{ '--chip-bg': bg, '--chip-color': color }}
        >
          {name}
        </div>
      ))}
    </div>
  )

  return (
    <div className={`skills__marquee-track${reverse ? ' skills__marquee-track--reverse' : ''}`}>
      {group(false)}
      {group(true)}
    </div>
  )
}

export default function Skills() {
  const half = Math.ceil(TECH_STACK.length / 2)

  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">skills</span>
          <h2 className="section__title">O que sei fazer</h2>
          <div className="section__divider" />
          <p className="section__subtitle">
            As tecnologias que uso de verdade, sem encher de coisa que só apareceu num tutorial.
          </p>
        </Reveal>

        <Reveal className="skills__marquee" delay={0.1}>
          <MarqueeRow items={TECH_STACK.slice(0, half)} />
          <MarqueeRow items={TECH_STACK.slice(half)} reverse />
        </Reveal>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(({ category, icon, skills }, index) => (
            <Reveal key={category} delay={index * 0.12}>
              <motion.div
                className="skills__card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="skills__card-header">
                  <span className="skills__card-icon">{icon}</span>
                  <h3 className="skills__card-title">{category}</h3>
                </div>

                <div className="skills__list">
                  {skills.map(({ name, level, color }) => (
                    <div key={name} className="skill-item">
                      <span className="skill-item__name" style={{ '--skill-color': color }}>{name}</span>
                      <span className={`skill-item__badge skill-item__badge--${level.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}>
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
