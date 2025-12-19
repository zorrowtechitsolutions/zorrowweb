"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-">
      {/* FOOTER CONTENT – NO GLASS BACKGROUND */}
      <div className="max-w-7xl mx-auto px- py-7">
        <div className="flex flex-col items-center text-center space-y-14">
          {/* BRAND */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              ZORROW
            </h3>

            <p className="text-[11px] uppercase tracking-widest text-foreground/55">
              Parent Brand of
            </p>

            <p className="text-sm font-medium text-foreground">
              Zorrowtech IT Solutions
            </p>

            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs mx-auto">
              Building the future of technology and brands.
            </p>
          </div>

          {/* PRODUCTS */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-foreground/55">
              <li>
                <a href="#hosta" className="hover:text-primary transition">
                  Hosta App
                </a>
              </li>
              <li>
                <a href="#marketing" className="hover:text-primary transition">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#fashion" className="hover:text-primary transition">
                  Fashion School
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-foreground/55">
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary transition">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-widest text-white/80 uppercase">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-foreground/55">
              <li>
                <a
                  href="mailto:zorrowtech@gmail.com"
                  className="hover:text-primary transition"
                >
                  zorrowtech@gmail.com
                </a>
              </li>
              <li>Koottilangadi, Malappuram, Kerala</li>
              <li>+91 87144 12090</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ONLY GLASS ELEMENT – COPYRIGHT */}
      <div className="flex justify-center px-4">
        <div
          className="
          mt- mb-12
          px-6 py-2.5
          rounded-full
          backdrop-blur-xl
          border border-white/10
          shadow-[0_6px_20px_rgba(0,0,0,0.35)]
        "
        >
          <p className="text-[11px] text-foreground/50 text-center">
            © {currentYear} Zorrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
