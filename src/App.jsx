"use client"

import About from "./components/About"
import Contact from "./components/Contact"
import DigitalMarketing from "./components/Digital-marketing"
import FashionSchool from "./components/Fashion-school"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HostaApp from "./components/Hosta-app"
import Navigation from "./components/Navigation"
import Solutions from "./components/Solution"
import WhyWorkWithUs from "./components/Why-work-with-us"

export default function App() {
  return (
    <div className="min-h-screen text-foreground font-sans antialiased relative overflow-x-hidden">

      {/* 🔒 ABSOLUTELY FIXED BACKGROUND (ZERO JITTER) */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -20,
          height: "100svh",              // critical for mobile
          width: "100vw",
          transform: "translateZ(0)",    // GPU lock
          willChange: "transform",
          contain: "paint",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/img1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(10,14,39,0.85)",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Solutions />
        <HostaApp />
        <DigitalMarketing />
        <FashionSchool />
        <WhyWorkWithUs />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
