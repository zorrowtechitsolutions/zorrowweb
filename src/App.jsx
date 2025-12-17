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
      
      {/* FIXED BACKGROUND IMAGE (Mobile Safe) */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "#0a0e27",
          backgroundImage: "url('/img1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "rgba(10, 14, 39, 0.85)",
        }}
      />

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
