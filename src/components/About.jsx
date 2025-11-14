export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="font-display text-3xl">About</h2>
        <div className="flex flex-wrap gap-2 text-sm text-white/70">
          <span className="chip">Chennai</span>
          <a className="chip" href="mailto:sayakr05@gmail.com">sayakr05@gmail.com</a>
          <a className="chip" href="tel:+916033073031">6033073031</a>
          <a className="chip" href="#projects">Portfolio</a>
          <a className="chip" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="chip" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="text-white/80">
          AI Infrastructure & Automation Engineer with 2+ years of hands-on experience in cloud, DevOps, and network automation at Tata Communications. Specializes in designing scalable, intelligent infrastructure systems that integrate AI, Terraform, Ansible, and full-stack applications. Expert in building automation pipelines using AWS, Docker, Kubernetes, and n8n, with strong grounding in BGP, SDN, and telemetry frameworks. Passionate about building AI-driven DevOps platforms and end-to-end SaaS automation systems.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/75">
          <li className="chip">AWS, Azure, Docker, Kubernetes</li>
          <li className="chip">Terraform, Ansible, CI/CD</li>
          <li className="chip">OpenDaylight, NETCONF, RESTCONF</li>
          <li className="chip">Telemetry, InfluxDB, Grafana</li>
          <li className="chip">Python, Bash, YAML</li>
          <li className="chip">React, Flask, APIs</li>
        </ul>
      </div>
      <div className="glass rounded-xl p-6 border border-white/10 shadow-glow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-3xl font-display">2+</div>
            <div className="text-white/70">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-display">20+</div>
            <div className="text-white/70">Projects Delivered</div>
          </div>
          <div>
            <div className="text-white/70">Key Tools</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="chip">AWS</span>
              <span className="chip">Terraform</span>
              <span className="chip">Ansible</span>
              <span className="chip">Docker</span>
              <span className="chip">Kubernetes</span>
              <span className="chip">OpenDaylight</span>
              <span className="chip">NETCONF/RESTCONF</span>
              <span className="chip">n8n</span>
              <span className="chip">Grafana</span>
              <span className="chip">InfluxDB</span>
              <span className="chip">Prometheus</span>
              <span className="chip">Kafka</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">React.js</span>
              <span className="chip">Flask</span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-display">3</div>
            <div className="text-white/70">Industry Awards</div>
          </div>
        </div>
      </div>
    </div>
  )
}