"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold from-primary to-accent bg-clip-text ">
              ZORROW
            </h3>
            <p className="text-xs text-foreground/75 tracking-wide mb-3">Parent Brand of</p>
            <p className="text-sm font-semibold text-foreground">Zorrowtech IT Solutions</p>
            <p className="text-sm text-foreground/60">Building the future of technology,and brands.</p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hosta" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Hosta App
                </a>
              </li>
              <li>
                <a href="#marketing" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#fashion" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Fashion School
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:zorrowtech@gmail.com"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  zorrowtech@gmail.com
                </a>
              </li>
              <li className="text-sm text-foreground/60">Koottilangadi,Malappuram,Kerala</li>
              <li className="text-sm text-foreground/60">8714412090</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/50">
              © {currentYear} Zorrowtech IT Solutions. All rights reserved. Hosta App is our flagship product.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
