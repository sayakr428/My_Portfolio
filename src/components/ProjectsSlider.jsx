import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'LEO Satellite KPI Monitoring', desc: 'Distributed Raspberry Pi probes using iperf3+mtr. Ingest to InfluxDB and visualize in Chronograf.', tech: ['Raspberry Pi','iperf3','mtr','InfluxDB','Chronograf','Telegraf'] },
  { title: 'BGP Telemetry with BMP/OpenBMP', desc: 'Containerized stack to collect, stream, and visualize BGP updates via Kafka and Grafana.', tech: ['OpenBMP','Kafka','PostgreSQL','Grafana','Docker'] },
  { title: 'WebGrow360 – Marketing Platform', desc: 'Full-stack AI-driven automation with React+Tailwind, Express, Prisma, MongoDB, CI/CD.', tech: ['React','Tailwind','Express','Prisma','MongoDB','Docker'] },
  { title: 'AI Chatbot + n8n Pipelines', desc: 'React UI with Express backend integrated to n8n workflows, AWS infra via Terraform+Ansible.', tech: ['React','Express','n8n','AWS','Terraform','Ansible'] },
  { title: 'SDN Automation – Multi‑Vendor', desc: 'OpenDaylight controller with NETCONF/RESTCONF; YAML OpenConfig templates across vendors.', tech: ['OpenDaylight','NETCONF','RESTCONF','YAML','OpenConfig'] },
  { title: 'IRR‑Driven BGP Filters', desc: 'Automated prefix lists and AS‑path sets via bgpq3 and Python from IRR sources.', tech: ['bgpq3','Python','BGP','IRR'] },
  { title: 'Cloud Infra Automation Scripts', desc: 'Terraform+Bash/Python for EC2, VPC, S3 with CI/CD pipelines.', tech: ['Terraform','AWS','Bash','Python','CI/CD'] },
  { title: 'DevOps Assistant Workflows', desc: 'n8n-based task orchestration for provisioning and notifications.', tech: ['n8n','AWS','APIs'] },
  { title: 'Observability Dashboards', desc: 'Grafana, Prometheus, CloudWatch dashboards for services and network KPIs.', tech: ['Grafana','Prometheus','CloudWatch'] },
  { title: 'Data‑Driven UIs', desc: 'React dashboards with Flask APIs for analytics and filtering.', tech: ['React','Flask','MongoDB','SQL'] },
]

function Card({ p, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} className="relative min-w-[80%] sm:min-w-[46%] md:min-w-[22%] xl:min-w-[10%] max-w-[320px] flex-shrink-0 glass rounded-xl p-4 border border-white/10 hover:shadow-glow">
      <div className="font-semibold text-sm">{p.title}</div>
      <div className="text-xs text-white/70 mt-2 line-clamp-2">{p.desc}</div>
      <div className="mt-3 flex flex-wrap gap-1">
        {p.tech.map(t => <span key={t} className="px-2 py-1 rounded bg-white/10 text-[11px]">{t}</span>)}
      </div>
      <motion.button whileHover={{ scale: 1.03 }} onClick={() => onClick(p)} className="mt-3 w-full btn-secondary text-xs">View Details</motion.button>
    </motion.div>
  )
}

function Modal({ item, onClose }) {
  if (!item) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="relative z-10 w-[92%] max-w-2xl glass rounded-xl p-6 border border-white/10">
        <div className="font-display text-xl">{item.title}</div>
        <p className="text-white/80 mt-2">{item.desc}</p>
        <div className="mt-4">
          <div className="font-semibold">Tech Stack</div>
          <div className="mt-2 flex flex-wrap gap-2">{item.tech.map(t => <span key={t} className="px-2 py-1 rounded bg-white/10 text-sm">{t}</span>)}</div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="btn-secondary" onClick={onClose}>Close</button>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSlider() {
  const [selected, setSelected] = useState(null)
  const trackRef = useRef(null)
  const data = useMemo(() => [...projects, ...projects], [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-3xl">Featured Projects</h2>
        <div className="text-white/60 text-sm">Auto-scrolling • drag to browse</div>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-3"
          animate={{ x: -800 }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          initial={{ x: 0 }}
        >
          {data.map((p, i) => (
            <Card key={i+p.title} p={p} onClick={setSelected} />
          ))}
        </motion.div>
        
      </div>
      <Modal item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}