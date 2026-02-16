"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight, ArrowUpRight, Shield, Users, Award, Target, Mail, Phone, MapPin, Building2, Landmark, Building, Scale, Briefcase, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

/* ─── NAV LINKS ─── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
]

/* ─── HIGHLIGHTS ─── */
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

/* ─── SERVICES ─── */
const services = [
  {
    title: "IT Infrastructure & Solutions",
    description: "End-to-end IT infrastructure deployment, network architecture, cloud migration, and cybersecurity services tailored for government environments.",
    image: "/images/portfolio-1.jpg",
    tags: ["Cloud Computing", "Cybersecurity", "Network Design"],
  },
  {
    title: "Consulting & Advisory",
    description: "Strategic consulting for digital transformation, procurement optimization, and regulatory compliance across all levels of government.",
    image: "/images/portfolio-2.jpg",
    tags: ["Digital Transformation", "Procurement", "Compliance"],
  },
  {
    title: "System Integration",
    description: "Seamless integration of legacy systems with modern platforms, ensuring interoperability and long-term sustainability for public sector operations.",
    image: "/images/portfolio-3.jpg",
    tags: ["Legacy Modernization", "API Integration", "IoT"],
  },
]

/* ─── CLIENTS ─── */
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

/* ════════════════════════════════════════════════════════ */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* ─── NAVBAR ─── */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-heading text-xl font-bold tracking-tight text-primary">
            PT. CIREMAI PUTRA TEKINDO
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="hidden md:inline-flex" size="sm">
            <a href="#contact">Get in Touch</a>
          </Button>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild size="sm" className="w-full">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Get in Touch</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/hero.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                Mitra Solusi Konstruksi Terpercaya
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground text-balance md:text-5xl lg:text-6xl">
                Memberikan Layanan Sektor Publik yang Unggul
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Kami adalah vendor pihak ketiga terkemuka yang menyediakan solusi konstruksi profesional, konsultasi, dan dukungan infrastruktur kepada instansi pemerintah dan sektor swasta di seluruh negeri.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <a href="#services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href="#profile">Learn About Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROFILE ─── */}
        <section id="profile" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src="/images/about.jpg" alt="Our team collaborating in a modern office" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Company Profile</p>
                <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">Your Trusted Partner in Construction Solutions</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  PT. CIREMAI PUTRA TEKINDO merupakan perusahaan yang bergerak di bidang konstruksi yaitu sebagai jasa mekanikal elektrikal, Didirikan sejak tahun 2007 dengan menjadi Mitra PLN hingga Mitra BUMN dan BUMD serta SWASTA yang dikerjakan oleh beberapa praktisi konstruksi yang memiliki visi dan misi yang sama serta memiliki keinginan untuk mengembangkan usaha di bidang konstruksi secara profesional. Perusahaan kami berkontribusi bagi pembangun rumah, jalan, lapangan, gedung,dan infrastruktur lainnya milik perorangan atau perseroan di Indonesia.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our vision : Dengan kerja sama tim, dukungan yang solid, dan profesionalisme, kami selalu siap membangun komunikasi yang efektif dan tepat dalam memenuhi kebutuhan pelanggan.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our mission : Memberikan layanan, kualitas, dan kepuasan kepada pelanggan. Membangun dan menciptakan citra terbaik perusahaan. Serta berpartisipasi dalam pembangunan Republik Indonesia.
                </p>
              </div>
            </div>
            <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Services</p>
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">Comprehensive Solutions for the Public Sector</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">We deliver a full spectrum of professional services designed to meet the unique demands of government agencies.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CLIENTS ─── */}
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

        {/* ─── CONTACT ─── */}
        <section id="contact" className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Contact Us</p>
                <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">{"Let's Discuss Your Project"}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">Siap mentransformasi proyek Anda? Hubungi tim kami dan temukan bagaimana PT. CIREMAI PUTRA TEKINDO dapat memberikan solusi yang Anda butuhkan.</p>
                <div className="mt-10 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">ptciremaiputratekindo@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">021-59713341 / 081286345007</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></div>
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-sm text-muted-foreground">Jl. Oskar II, No.26/Blok 32, Pondok Permai Kuta Baru.<br />Tangerang - Banten, 15560, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-background p-8">
                <form className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                      <input id="name" type="text" placeholder="Your name" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                      <input id="email" type="email" placeholder="you@company.com" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                    <input id="subject" type="text" placeholder="How can we help?" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                    <textarea id="message" rows={5} placeholder="Tell us about your project..." className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-semibold">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border bg-primary py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-heading text-lg font-bold text-primary-foreground">PT. CIREMAI PUTRA TEKINDO</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">Your trusted 3rd party vendor for government services and solutions.</p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-primary-foreground">Navigation</p>
              <ul className="flex flex-col gap-2">
                {["Home", "Profile", "Services", "Clients"].map((item) => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-primary-foreground">Services</p>
              <ul className="flex flex-col gap-2">
                {["Contractor Mechanical", "Consulting", "Electrical", "Instrument", "Civil"].map((item) => (
                  <li key={item}><span className="text-sm text-primary-foreground/70">{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-primary-foreground">Contact</p>
              <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
                <li>ptciremaiputratekindo@gmail.com</li>
                <li>021-59713341 / 081286345007</li>
                <li>Jl. Oskar II, No.26/Blok 32, Pondok Permai Kuta Baru Tangerang - Banten, 15560</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
            {"2026 PT. CIREMAI PUTRA TEKINDO. All rights reserved."}
          </div>
        </div>
      </footer>
    </div>
  )
}
