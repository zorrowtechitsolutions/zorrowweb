"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Hosta App", href: "#hosta" },
    { label: "Digital Marketing", href: "#marketing" },
    { label: "Fashion School", href: "#fashion" },
    { label: "Contact", href: "#contact" },
  ]

  /* AUTO CLOSE ON SCROLL */
  useEffect(() => {
    if (!isOpen) return
    const close = () => setIsOpen(false)
    window.addEventListener("scroll", close, { passive: true })
    return () => window.removeEventListener("scroll", close)
  }, [isOpen])

  return (
    <>
      {/* HEADER SPACER */}
      <div className="h-16 md:h-20" />

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img src="/img1.png" alt="Zorrow Logo" width={70} height={70} />
              <span className="text-lg font-bold text-white">ZORROW</span>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-primary transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowCallPopup(true)}
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold"
              >
                Book a Call
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              disabled={isOpen}
              className={`lg:hidden p-2 text-white transition ${
                isOpen ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <Menu />
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 rounded-2xl 
            bg-white/15 backdrop-blur-xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/70"
            >
              <X size={22} />
            </button>

            <div className="pt-12 divide-y divide-white/10">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-white/85"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="p-4">
              <button
                onClick={() => {
                  setIsOpen(false)
                  setShowCallPopup(true)
                }}
                className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CALL POPUP */}
      {showCallPopup && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center
          bg-black/20 backdrop-blur-[2px]"
          onClick={() => setShowCallPopup(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm p-7 rounded-3xl
            bg-white/20 backdrop-blur-xl border border-white/25 shadow-xl"
          >
            {/* CLOSE */}
            <button
              onClick={() => setShowCallPopup(false)}
              className="absolute top-3 right-3 text-white/80"
            >
              <X size={22} />
            </button>

            <h3 className="text-lg text-white text-center font-semibold">
              Book a Call
            </h3>

            <p className="text-sm text-white/70 text-center mt-1">
              Call or connect with us instantly
            </p>

            <div className="space-y-3 mt-6">
              <a
                href="tel:8714412090"
                className="
                  flex justify-center items-center gap-2
                  py-3 rounded-full
                  bg-blue-400 hover:bg-blue-300
                  text-black font-semibold transition
                "
              >
                <Phone size={18} /> Call Now
              </a>

              <a
                href="https://wa.me/918714412090"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex justify-center items-center gap-2
                  py-3 rounded-full
                  bg-blue-400 hover:bg-blue-300
                  text-black font-semibold transition
                "
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

