import './Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Front-end',
    icon: '🎨',
    skills: [
      { name: 'JavaScript ES6+', level: 'Intermediário', color: '#f7df1e' },
      { name: 'React + Hooks', level: 'Intermediário', color: '#61dafb' },
      { name: 'CSS3 & Animações', level: 'Avançado', color: '#1572b6' },
      { name: 'Design Responsivo', level: 'Avançado', color: '#06b6d4' },
    ],
  },
  {
    category: 'Arquitetura & Ferramentas',
    icon: '🛠️',
    skills: [
      { name: 'Componentização', level: 'Intermediário', color: '#8b5cf6' },
      { name: 'REST API', level: 'Intermediário', color: '#10b981' },
      { name: 'Git & GitHub', level: 'Intermediário', color: '#f05032' },
      { name: 'Vite / npm', level: 'Intermediário', color: '#646cff' },
    ],
  },
  {
    category: 'Em Aprendizado',
    icon: '📚',
    skills: [
      { name: 'TypeScript', level: 'Básico', color: '#3178c6' },
      { name: 'Node.js', level: 'Básico', color: '#339933' },
      { name: 'Next.js', level: 'Básico', color: '#a3a3a3' },
      { name: 'Firebase', level: 'Básico', color: '#f59e0b' },
    ],
  },
]

const TECH_STACK = [
  { name: 'JavaScript', bg: '#f7df1e15', color: '#b8a000' },
  { name: 'React', bg: '#61dafb15', color: '#0ea5e9' },
  { name: 'CSS3', bg: '#1572b615', color: '#1572b6' },
  { name: 'Vite', bg: '#646cff15', color: '#646cff' },
  { name: 'Git', bg: '#f0503215', color: '#f05032' },
  { name: 'REST API', bg: '#10b98115', color: '#10b981' },
  { name: 'TypeScript', bg: '#3178c615', color: '#3178c6' },
  { name: 'Node.js', bg: '#33993315', color: '#339933' },
  { name: 'Next.js', bg: '#6366f115', color: '#818cf8' },
  { name: 'Figma', bg: '#f24e1e15', color: '#f24e1e' },
]

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Meu arsenal</span>
          <h2 className="section__title">Habilidades Técnicas</h2>
          <div className="section__divider" />
          <p className="section__subtitle">
            Tecnologias que domino e ferramentas que uso no dia a dia para
            construir produtos digitais de qualidade.
          </p>
        </div>

        <div className="skills__tech-stack">
          {TECH_STACK.map(({ name, bg, color }) => (
            <div
              key={name}
              className="skills__tech-chip"
              style={{ '--chip-bg': bg, '--chip-color': color }}
            >
              {name}
            </div>
          ))}
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => (
            <div key={category} className="skills__card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
