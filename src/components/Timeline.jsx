export default function Timeline() {
  const items = [
    { role: 'AWS Terraform Ansible n8n automations for SaaS platforms • OpenDaylight SDN NETCONF/RESTCONF YAML OpenConfig IRR-driven BGP filters' },
    { role: 'Analyst Intern', org: 'Accenture – Bangalore', details: 'React+Tailwind dashboards, Flask APIs, MongoDB/SQL data pipelines.' },
  ]
  return (
    <div>
      <h2 className="font-display text-3xl mb-6">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neonBlue to-neonPurple"></div>
        <div className="space-y-6">
          {items.map((it, idx) => (
            <div key={idx} className="pl-10">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-neonBlue shadow-glow"></div>
                <div className="font-semibold">{it.role} – {it.org}</div>
              </div>
              <div className="text-white/70 mt-2">{it.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
