"use client"

import { useState } from "react"
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

  return (
    <>
      {/* 🔒 HEADER SPACER (prevents scroll-under) */}
      <div className="h-16 md:h-20" />

      {/* ✅ FIXED HEADER */}
      <nav
        className="
          fixed top-0 inset-x-0 z-50
          glass
          border-b border-white/10
          backdrop-blur-2xl
          supports-[backdrop-filter]:bg-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/img1.png"
                alt="Zorrow Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-bold text-white">
                ZORROW
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    text-sm font-medium
                    text-foreground/70
                    hover:text-primary
                    transition-colors
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Book Call */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowCallPopup(true)}
                className="
                  px-6 py-2 rounded-lg
                  bg-primary text-primary-foreground
                  font-semibold
                  hover:bg-primary/90
                  transition-colors
                "
              >
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    block px-4 py-2 text-sm
                    text-foreground/70
                    hover:text-primary
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false)
                  setShowCallPopup(true)
                }}
                className="
                  block w-full mt-4 mx-4 px-6 py-2
                  bg-primary text-primary-foreground
                  rounded-lg font-semibold
                "
              >
                Book a Call
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* 📌 CALL POPUP */}
      {showCallPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-sm mx-4 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-2xl p-8 space-y-6">

            <button
              onClick={() => setShowCallPopup(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-semibold text-white text-center">
              Book a Call
            </h3>

            <p className="text-sm text-white/70 text-center">
              Connect with us instantly
            </p>

            <a
              href="tel:8714412090"
              className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-black bg-blue-400 hover:bg-blue-300 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/918714412090"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-black bg-blue-400 hover:bg-blue-300 transition"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </>
  )
}
