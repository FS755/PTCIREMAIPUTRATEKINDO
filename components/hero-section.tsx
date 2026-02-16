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
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Trusted Government Solutions Partner
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Delivering Excellence in Public Sector Services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            We are a leading 3rd party vendor providing professional IT solutions,
            consulting, and infrastructure support to government agencies across the nation.
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
