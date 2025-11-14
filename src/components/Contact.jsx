import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const validate = () => {
    const e = {}
    if (!values.name || values.name.length < 2) e.name = 'Name is required'
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Valid email required'
    if (!values.message || values.message.length < 10) e.message = 'Message is too short'
    setErrors(e)
    return Object.keys(e).length === 0
  }
  const submit = (ev) => {
    ev.preventDefault()
    if (validate()) setSent(true)
  }
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-display text-3xl mb-6">Contact</h2>
      <form onSubmit={submit} className="glass rounded-xl p-6 border border-white/10 text-left">
        <div className="mb-4 flex flex-wrap gap-2 text-sm text-white/70">
          <span className="chip">Chennai</span>
          <a className="chip" href="mailto:sayakr05@gmail.com">sayakr05@gmail.com</a>
          <a className="chip" href="tel:+916033073031">6033073031</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-white/70">Name</label>
            <input value={values.name} onChange={e=>setValues(v=>({ ...v, name: e.target.value }))} className="mt-1 w-full px-3 py-2 rounded bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neonBlue" />
            {errors.name && <div className="text-red-400 text-xs mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input value={values.email} onChange={e=>setValues(v=>({ ...v, email: e.target.value }))} className="mt-1 w-full px-3 py-2 rounded bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neonBlue" />
            {errors.email && <div className="text-red-400 text-xs mt-1">{errors.email}</div>}
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm text-white/70">Message</label>
          <textarea rows={5} value={values.message} onChange={e=>setValues(v=>({ ...v, message: e.target.value }))} className="mt-1 w-full px-3 py-2 rounded bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neonPurple" />
          {errors.message && <div className="text-red-400 text-xs mt-1">{errors.message}</div>}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.03 }} className="btn-primary">Send Message</motion.button>
          <a href="https://linkedin.com" className="btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" className="btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:someone@example.com" className="btn-secondary">Email</a>
        </div>
        {sent && <div className="mt-4 text-neonCyan">Message sent. I’ll get back soon.</div>}
      </form>
    </div>
  )
}