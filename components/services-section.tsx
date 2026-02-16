import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "IT Infrastructure & Solutions",
    description:
      "End-to-end IT infrastructure deployment, network architecture, cloud migration, and cybersecurity services tailored for government environments.",
    image: "/images/portfolio-1.jpg",
    tags: ["Cloud Computing", "Cybersecurity", "Network Design"],
  },
  {
    title: "Consulting & Advisory",
    description:
      "Strategic consulting for digital transformation, procurement optimization, and regulatory compliance across all levels of government.",
    image: "/images/portfolio-2.jpg",
    tags: ["Digital Transformation", "Procurement", "Compliance"],
  },
  {
    title: "System Integration",
    description:
      "Seamless integration of legacy systems with modern platforms, ensuring interoperability and long-term sustainability for public sector operations.",
    image: "/images/portfolio-3.jpg",
    tags: ["Legacy Modernization", "API Integration", "IoT"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Comprehensive Solutions for the Public Sector
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We deliver a full spectrum of professional services designed to meet the
            unique demands of government agencies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
