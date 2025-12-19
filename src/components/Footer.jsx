"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24">
      
      {/* Glass Footer Container */}
      <div className="
        glass
        border-t border-white/10
        backdrop-blur-2xl
        bg-white/5
      ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                ZORROW
              </h3>
              <p className="text-xs text-foreground/70 tracking-wide">
                Parent Brand of
              </p>
              <p className="text-sm font-semibold text-foreground">
                Zorrowtech IT Solutions
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Building the future of technology and brands.
              </p>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">
                Products
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hosta" className="text-sm text-foreground/60 hover:text-primary transition">
                    Hosta App
                  </a>
                </li>
                <li>
                  <a href="#marketing" className="text-sm text-foreground/60 hover:text-primary transition">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#fashion" className="text-sm text-foreground/60 hover:text-primary transition">
                    Fashion School
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-foreground/60 hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-sm text-foreground/60 hover:text-primary transition">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-foreground/60 hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">
                Connect
              </h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="mailto:zorrowtech@gmail.com" className="hover:text-primary transition">
                    zorrowtech@gmail.com
                  </a>
                </li>
                <li>
                  Koottilangadi, Malappuram, Kerala
                </li>
                <li>
                  +91 87144 12090
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FINAL COPYRIGHT BAR (FULL BOTTOM) */}
      <div className="
        w-full
        bg-black/40
        backdrop-blur-xl
        border-t border-white/10
      ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs sm:text-sm text-foreground/50">
            © {currentYear} Zorrowtech IT Solutions. All rights reserved.
            <span className="hidden sm:inline"> Hosta App is our flagship product.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
