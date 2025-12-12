"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-10 pb-10 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-pretty">
                Zorrow Where
                <span className="block bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                  Technology, Brands & Fashion
                </span>
                Meet
              </h1>
              <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                Zorrow is the parent brand of Zorrowtech IT Solutions. We're
                building innovative products starting with Hosta, our healthcare
                app, while launching Zorrow Digital Marketing and Zorrow School
                of Fashion.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solutions"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 inline-block text-center"
              >
                Explore Our Solutions
              </a>
              <a
                href="#hosta"
                className="px-8 py-3 glass hover:bg-card/70 text-foreground border border-primary/50 rounded-xl font-semibold transition-all inline-block"
              >
                Learn About Hosta
              </a>
            </div>
          </div>

          {/* Right Side - Products Stack */}
          <div className="space-y-4 md:h-full flex flex-col justify-center">

            {/* 🔵 1. Zorrowtech IT Solutions (FIRST) */}
            <div className="glass p-6 space-y-3 hover:bg-card/60 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Zorrowtech IT Solutions</h3>
                <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full font-semibold">
                  Our First Brand
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                Visit our official website:{" "}
                <a
                  href="https://zorrowtech.in"
                  target="_blank"
                  className="underline text-primary hover:text-primary/80"
                >
                  zorrowtech.in
                </a>
              </p>
            </div>

            {/* 🟢 2. Hosta Card */}
            <div className="glass p-6 space-y-3 hover:bg-card/60 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Hosta – Healthcare App</h3>
                <span className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full font-semibold">
                  Live
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                Find hospitals, book ambulances, and connect with donors
              </p>
            </div>

            {/* 🟡 3. Digital Marketing Card */}
            <div className="glass p-6 space-y-3 hover:bg-card/60 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Zorrow Digital Marketing</h3>
                <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full font-semibold">
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                Social media growth, paid ads, and brand strategy
              </p>
            </div>

            {/* 🔵 4. Fashion School Card */}
            <div className="glass p-6 space-y-3 hover:bg-card/60 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Zorrow School of Fashion</h3>
                <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full font-semibold">
                  Concept
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                Design, branding, and marketing education
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
