import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function Background() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })
  useEffect(() => {
    const h = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [x, y])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-3xl"
        style={{ left: sx, top: sy, background: 'radial-gradient(circle at center, rgba(59,199,255,0.18), transparent 60%)' }}
      />
      <motion.div
        className="absolute left-[15%] top-[12%] w-[30vw] h-[30vw] rounded-full blur-3xl opacity-70"
        animate={{ x: [0, 40, -30, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at center, rgba(155,92,255,0.14), transparent 60%)' }}
      />
      <motion.div
        className="absolute right-[12%] bottom-[8%] w-[26vw] h-[26vw] rounded-full blur-3xl opacity-70"
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle at center, rgba(78,241,229,0.12), transparent 60%)' }}
      />
    </div>
  )
}