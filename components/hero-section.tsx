import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Mitra Solusi Konstruksi Terpercaya
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Memberikan Layanan Sektor Publik yang Unggul
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Kami adalah vendor pihak ketiga terkemuka yang menyediakan solusi konstruksi profesional, konsultasi, dan dukungan infrastruktur kepada instansi pemerintah dan sektor swasta di seluruh negeri.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <a href="#services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#profile">Learn About Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
