export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-heading text-lg font-bold text-primary-foreground">
              Vistara Group
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              Your trusted 3rd party vendor for government services and solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-sm font-semibold text-primary-foreground">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {["Home", "Profile", "Services", "Clients"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-3 text-sm font-semibold text-primary-foreground">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "IT Infrastructure",
                "Consulting",
                "System Integration",
                "Cybersecurity",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-sm font-semibold text-primary-foreground">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>info@vistaragroup.com</li>
              <li>+1 (555) 234-5678</li>
              <li>Washington, DC 20001</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          {"2026 Vistara Group. All rights reserved."}
        </div>
      </div>
    </footer>
  )
}
