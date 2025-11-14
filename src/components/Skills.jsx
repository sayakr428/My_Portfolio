const data = [
  { title: 'Cloud & Infrastructure', items: ['AWS (EC2, Lambda, S3, CloudWatch, API Gateway, EKS)','Azure','Terraform','Ansible','AWS CDK','CloudFormation','NGINX','Docker','Kubernetes'] },
  { title: 'Operating Systems', items: ['Linux (Ubuntu, Debian)','Windows','MAC OS'] },
  { title: 'DevOps & CI/CD', items: ['GitHub Actions','Jenkins','GitLab CI/CD','Cloud-native deployment'] },
  { title: 'Programming & Scripting', items: ['Python (Automation, Flask APIs, Web Scraping)','Bash','YAML'] },
  { title: 'Full-Stack Development', items: ['React.js','Tailwind CSS','Express.js','Flask','RESTful API Design','JWT Auth','Environment Management','PostgreSQL','MongoDB','SQL'] },
  { title: 'WebAutomation & Scraping', items: ['BeautifulSoup','Selenium','Newspaper3k','cron-based scheduling','Proxy Handling','n8n Integrations'] },
  { title: 'Monitoring & Visualization', items: ['Grafana','Prometheus','Kentik','Power BI','Chronograf','Telegraf','CloudWatch'] },
  { title: 'Version Control & Collaboration', items: ['Git','GitHub','GitLab','Postman','Confluence'] },
]

function Level({ n=4 }) {
  return (
    <div className="flex gap-1">
      {Array.from({length:5}).map((_,i) => (
        <span key={i} className={`h-1.5 w-6 rounded ${i<n ? 'bg-neonBlue' : 'bg-white/15'}`} />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <div>
      <h2 className="font-display text-3xl mb-6">Skills</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {data.map((group, gi) => (
          <div key={group.title} className="glass rounded-xl p-5 border border-white/10">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{group.title}</div>
              <Level n={gi%3+3} />
            </div>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {group.items.map(it => (
                <span key={it} className="text-white/80 text-sm">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}