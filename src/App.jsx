"use client"

import About from "./components/about"
import Contact from "./components/contact"
import DigitalMarketing from "./components/digital-marketing"
import FashionSchool from "./components/fashion-school"
import Footer from "./components/footer"
import Hero from "./components/hero"
import HostaApp from "./components/Hosta-app"
import Navigation from "./components/navigation"
import Solutions from "./components/solution"
import WhyWorkWithUs from "./components/why-work-with-us"

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
