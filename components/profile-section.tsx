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
    title: "100+ Professionals",
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
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Company Profile
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Your Trusted Partner in Construction Solutions
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              PT. CIREMAI PUTRA TEKINDO merupakan perusahaan yang bergerak di bidang konstruksi yaitu sebagai jasa mekanikal elektrikal, Didirikan sejak tahun 2007 dengan menjadi Mitra PLN hingga Mitra BUMN dan BUMD serta SWASTA yang dikerjakan oleh beberapa praktisi konstruksi yang memiliki visi dan misi yang sama serta memiliki keinginan untuk mengembangkan usaha di bidang konstruksi secara profesional. Perusahaan kami berkontribusi bagi pembangun rumah, jalan, lapangan, gedung,dan infrastruktur lainnya milik perorangan atau perseroan di Indonesia.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our vision : Dengan kerja sama tim, dukungan yang solid, dan profesionalisme, kami selalu siap membangun komunikasi yang efektif dan tepat dalam memenuhi kebutuhan pelanggan.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our mssion : Memberikan layanan, kualitas, dan kepuasan kepada pelanggan. Membangun dan menciptakan citra terbaik perusahaan. Serta berpartisipasi dalam pembangunan Republik Indonesia.
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
