import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
  ...rest
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
