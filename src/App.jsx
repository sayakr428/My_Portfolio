import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Background from './components/Background.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import ProjectsSlider from './components/ProjectsSlider.jsx'
import Timeline from './components/Timeline.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const Section = ({ id, children }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: false })
  const controls = useAnimation()
  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 })
    else controls.start({ opacity: 0, y: 24 })
  }, [inView])
  return (
    <section id={id} ref={ref} className="section py-20">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={controls} transition={{ duration: 0.6, ease: 'easeOut' }}>
        {children}
      </motion.div>
    </section>
  )
}

export default function App() {
  const [active, setActive] = useState('hero')
  const sections = useMemo(() => ['hero','about','skills','projects','timeline','testimonials','contact'], [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible && visible.target.id) setActive(visible.target.id)
    }, { root: null, threshold: [0.2,0.4,0.6], rootMargin: '-10% 0px -10% 0px' })
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-charcoal text-white font-sans">
      <Background />
      <Navbar active={active} onNavigate={id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
      <Section id="hero"><Hero /></Section>
      <Section id="about"><About /></Section>
      <Section id="skills"><Skills /></Section>
      <Section id="projects"><ProjectsSlider /></Section>
      <Section id="timeline"><Timeline /></Section>
      <Section id="testimonials"><Testimonials /></Section>
      <Section id="contact"><Contact /></Section>
      <Footer />
    </div>
  )
}
