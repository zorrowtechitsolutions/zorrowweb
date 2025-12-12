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
    <div 
      className="min-h-screen text-foreground font-sans antialiased relative"
      style={{
        backgroundColor: '#0a0e27',
        backgroundImage: `url('/img1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better readability */}
      <div 
        className="fixed inset-0"
        style={{
          background: 'rgba(10, 14, 39, 0.85)',
          zIndex: 0
        }}
      />
      
      {/* Main content */}
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
