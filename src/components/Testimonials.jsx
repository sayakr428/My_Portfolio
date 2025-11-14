import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const items = useMemo(() => [
    { who: 'Manager', text: 'Delivered reliable SDN automation pipelines and improved telemetry observability.' },
    { who: 'Teammate', text: 'Collaborative, designs robust cloud systems with clean automation.' },
    { who: 'Client', text: 'Built AI-driven analytics that boosted campaign effectiveness and reporting.' },
    { who: 'Partner', text: 'Rapid prototyping with thoughtful design and production-ready code.' },
  ], [])
  return (
    <div>
      <h2 className="font-display text-3xl mb-6">Highlights</h2>
      <div className="relative overflow-hidden">
        <motion.div className="flex gap-4" animate={{ x: -400 }} transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}>
          {[...items, ...items].map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="min-w-[80%] sm:min-w-[40%] md:min-w-[30%] xl:min-w-[20%] glass rounded-xl p-5 border border-white/10">
              <div className="text-white/90">{t.text}</div>
              <div className="mt-3 text-sm text-neonBlue">{t.who}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}