import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ active, onNavigate }) {
  const items = useMemo(() => [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Experience' },
    { id: 'testimonials', label: 'Highlights' },
    { id: 'contact', label: 'Contact' },
  ], [])
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="section py-4 flex items-center justify-between">
        <div className="font-display text-xl tracking-wide">
          <span className="text-neonBlue">Sayak</span> <span className="text-neonPurple">Roy</span>
        </div>
        <nav className="hidden md:flex gap-2">
          {items.map(item => (
            <button
              key={item.id}
              className={`px-3 py-2 rounded-md text-sm ${active===item.id ? 'bg-white/10 text-neonBlue' : 'hover:bg-white/10'}`}
              onClick={() => onNavigate(item.id)}
            >{item.label}</button>
          ))}
        </nav>
        <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary md:ml-4" onClick={() => onNavigate('projects')}>View Projects</motion.button>
      </div>
    </div>
  )
}