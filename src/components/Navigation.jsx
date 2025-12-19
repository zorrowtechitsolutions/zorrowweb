"use client"

import { useState, useRef } from "react"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)

  // Touch tracking
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Hosta App", href: "#hosta" },
    { label: "Digital Marketing", href: "#marketing" },
    { label: "Fashion School", href: "#fashion" },
    { label: "Contact", href: "#contact" },
  ]

  // Detect real tap vs scroll
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY

    const diff = Math.abs(touchStartY.current - touchEndY.current)

    // If finger moved more than 10px → SCROLL → ignore
    if (diff > 10) return

    // Otherwise → REAL TAP
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {/* HEADER SPACER */}
      <div className="h-16 md:h-20" />

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img src="/img1.png" alt="Zorrow Logo" width={40} height={40} />
              <span className="text-lg font-bold text-white">ZORROW</span>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* DESKTOP BOOK CALL */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowCallPopup(true)}
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold"
              >
                Book a Call
              </button>
            </div>

            {/* MOBILE TOGGLE — FIXED */}
            <button
              className="lg:hidden p-2 text-white"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => e.preventDefault()} // prevent ghost clicks
            >
              {isOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm">
          <div className="absolute top-20 left-4 right-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10">

            <div className="divide-y divide-white/10">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-white/80"
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
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-sm p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/15">

            <button
              onClick={() => setShowCallPopup(false)}
              className="absolute top-3 right-3 text-white/70"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl text-white text-center font-semibold">
              Book a Call
            </h3>

            <div className="space-y-4 mt-6">
              <a
                href="tel:8714412090"
                className="flex justify-center items-center gap-2 py-3 rounded-full bg-blue-400 text-black font-semibold"
              >
                <Phone size={18} /> Call Now
              </a>

              <a
                href="https://wa.me/918714412090"
                target="_blank"
                className="flex justify-center items-center gap-2 py-3 rounded-full bg-blue-400 text-black font-semibold"
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
