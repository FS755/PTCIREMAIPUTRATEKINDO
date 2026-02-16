import { Building2, Landmark, Building, Scale, Briefcase, Globe } from "lucide-react"

const clients = [
  { icon: Landmark, name: "Ministry of Finance", description: "IT infrastructure modernization and secure data management systems." },
  { icon: Building2, name: "National Health Agency", description: "Integrated health information systems and network deployment." },
  { icon: Scale, name: "Department of Justice", description: "Case management systems and cybersecurity implementation." },
  { icon: Building, name: "Public Works Ministry", description: "Smart building systems and project management platforms." },
  { icon: Briefcase, name: "Regional Planning Board", description: "GIS-based planning tools and data analytics dashboards." },
  { icon: Globe, name: "Foreign Affairs Office", description: "Secure communication systems and cloud infrastructure." },
]

const stats = [
  { value: "50+", label: "Government Agencies" },
  { value: "200+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
]

export function ClientsSection() {
  return (
    <section id="clients" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Clients</p>
          <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">Trusted by Leading Government Institutions</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">We are proud to partner with government agencies at every level, delivering solutions that drive efficiency and public value.</p>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-6 rounded-lg bg-primary p-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div key={client.name} className="flex gap-4 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <client.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-card-foreground">{client.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
