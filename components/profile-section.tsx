import Image from "next/image"
import { Shield, Users, Award, Target } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Certified & Compliant",
    description: "Fully certified with government procurement standards and regulatory compliance frameworks.",
  },
  {
    icon: Users,
    title: "200+ Professionals",
    description: "A dedicated team of engineers, consultants, and project managers serving the public sector.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade and a half of proven track record delivering complex government projects.",
  },
  {
    icon: Target,
    title: "98% Project Success",
    description: "Industry-leading project completion rate with on-time and on-budget delivery.",
  },
]

export function ProfileSection() {
  return (
    <section id="profile" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about.jpg"
              alt="Our team collaborating in a modern office"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Company Profile
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Your Trusted Partner in Government Solutions
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Vistara Group has been at the forefront of providing comprehensive
              third-party vendor services for government agencies. We specialize in
              bridging the gap between public sector needs and innovative technology
              solutions, ensuring efficiency, transparency, and accountability in
              every project we deliver.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our mission is to empower government institutions with reliable,
              scalable, and secure solutions that serve the public interest. From IT
              infrastructure to consulting and project management, we are committed
              to excellence.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
