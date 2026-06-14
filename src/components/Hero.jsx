import { useRef, useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'
import './Hero.css'
import fotoPerfil from '../assets/foto-hero.jpg'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Lucasbrandaocabral',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lucasbrandaocabral',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5500000000000',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
]

const ROLES = ['Full Stack', 'Front-end', 'Criativo', 'de Interfaces']

const SPOTLIGHT_R = 260

const BLUEPRINT_SNIPPETS = [
  { text: '<Hero />', style: { top: '16%', left: '7%' } },
  { text: "const [theme, setTheme] = useState('dark')", style: { top: '24%', right: '5%' } },
  { text: 'useSpring(x, { stiffness: 180, damping: 14 })', style: { top: '46%', left: '4%' } },
  { text: 'display: flex; gap: var(--space-6);', style: { top: '12%', right: '24%' } },
  { text: 'animation: orbDrift 18s linear infinite', style: { bottom: '26%', right: '7%' } },
  { text: 'npm run build  ✓ 452 modules', style: { bottom: '13%', left: '9%' } },
  { text: 'git push origin main', style: { bottom: '9%', right: '18%' } },
  { text: 'min-height: 100dvh', style: { top: '58%', right: '4%' } },
  { text: 'letter-spacing: -0.035em', style: { top: '36%', left: '12%' } },
]

const NAME_WORDS = [
  { text: 'Lucas', highlight: false },
  { text: 'Brandão', highlight: false },
  { text: 'Cabral', highlight: true },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const letterStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
}

const letterReveal = {
  hidden: { y: '115%', rotate: 8 },
  show: {
    y: '0%',
    rotate: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
}

function Magnetic({ children, strength = 0.3, disabled = false }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 })

  const onMouseMove = (e) => {
    if (disabled) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="hero__magnetic"
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}

function TiltAvatar({ disabled = false }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 120, damping: 16 })
  const sry = useSpring(ry, { stiffness: 120, damping: 16 })

  const onMouseMove = (e) => {
    if (disabled) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 22)
    rx.set(-py * 22)
  }

  const onMouseLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="hero__avatar-tilt"
      variants={fadeUp}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 600 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="hero__avatar">
        <div className="hero__avatar-ring" />
        <img src={fotoPerfil} alt="Lucas Brandão" className="hero__avatar-img" />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2600
    )
    return () => clearInterval(id)
  }, [reduceMotion])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const orbsY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const spotX = useSpring(mouseX, { stiffness: 60, damping: 18 })
  const spotY = useSpring(mouseY, { stiffness: 60, damping: 18 })
  const spotlight = useMotionTemplate`radial-gradient(34rem circle at ${spotX}px ${spotY}px, rgba(99, 102, 241, 0.14), transparent 70%)`
  const blueprintMask = useMotionTemplate`radial-gradient(${SPOTLIGHT_R}px circle at ${spotX}px ${spotY}px, rgb(0 0 0) 0%, rgb(0 0 0) 40%, rgb(0 0 0 / 0.75) 60%, rgb(0 0 0 / 0.4) 75%, rgb(0 0 0 / 0.12) 88%, transparent 100%)`

  const onSectionMouseMove = (e) => {
    if (reduceMotion) return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const scrollToContact = () =>
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="hero"
      ref={sectionRef}
      onMouseMove={onSectionMouseMove}
    >
      <motion.div className="hero__orbs" aria-hidden="true" style={{ y: orbsY }}>
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__orb hero__orb--4" />
      </motion.div>

      <div className="hero__grid" aria-hidden="true" />

      {!reduceMotion && (
        <motion.div
          className="hero__spotlight"
          aria-hidden="true"
          style={{ background: spotlight }}
        />
      )}

      {!reduceMotion && (
        <motion.div
          className="hero__blueprint"
          aria-hidden="true"
          style={{ maskImage: blueprintMask, WebkitMaskImage: blueprintMask }}
        >
          <div className="hero__blueprint-grid" />
          <div className="hero__blueprint-box">
            <span className="hero__blueprint-label">section#hero &gt; .hero__content</span>
          </div>
          {BLUEPRINT_SNIPPETS.map(({ text, style }) => (
            <code key={text} className="hero__blueprint-snippet" style={style}>
              {text}
            </code>
          ))}
        </motion.div>
      )}

      <div className="hero__grain" aria-hidden="true" />

      <motion.div
        className="container hero__content"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div className="hero__badge" variants={fadeUp}>
          <span className="hero__badge-dot" />
          Aberto a freelas e oportunidades
        </motion.div>

        <TiltAvatar disabled={reduceMotion} />

        <motion.h1 className="hero__name" variants={letterStagger}>
          {NAME_WORDS.map(({ text, highlight }) => (
            <span key={text}>
              <span className="hero__word">
                {text.split('').map((letter, i) => (
                  <motion.span
                    key={`${text}-${i}`}
                    className={`hero__letter${highlight ? ' hero__name-highlight' : ''}`}
                    variants={letterReveal}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>{' '}
            </span>
          ))}
        </motion.h1>

        <motion.p className="hero__role" variants={fadeUp}>
          <span className="hero__role-static">Desenvolvedor</span>{' '}
          <span className="hero__role-rotate">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                className="hero__role-word"
                initial={{ y: '105%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-105%', opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.p>

        <motion.p className="hero__description" variants={fadeUp}>
          Formado em ADS pela Cruzeiro do Sul (2025). Gosto de
          construir interfaces que funcionam bem e ficam bonitas, sem exagerar.
        </motion.p>

        <motion.div className="hero__actions" variants={fadeUp}>
          <Magnetic disabled={reduceMotion}>
            <motion.button
              className="btn btn--primary btn--lg"
              onClick={scrollToContact}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Entrar em Contato
            </motion.button>
          </Magnetic>
          <Magnetic disabled={reduceMotion}>
            <motion.a
              href="/cv-lucas-brandao.pdf"
              download
              className="btn btn--outline btn--lg hero__btn-cv"
              onClick={(e) => e.preventDefault()}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </motion.a>
          </Magnetic>
        </motion.div>

        <motion.div className="hero__socials" variants={fadeUp}>
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <Magnetic key={label} strength={0.45} disabled={reduceMotion}>
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={label}
                title={label}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            </Magnetic>
          ))}
        </motion.div>

        <motion.div className="hero__scroll-hint" variants={fadeUp}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
          <span>Role para baixo</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
