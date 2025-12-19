"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        flex items-center justify-center
        pt-8 pb-16
        overflow-hidden
      "
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  font-bold
                  leading-tight sm:leading-snug
                "
              >
                Zorrow Where
                <span className="block bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                  Technology,
                  Brands & Fashion
                </span>
                Meet
              </h1>

              <p className="text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed">
                Zorrow is the parent brand of Zorrowtech IT Solutions.
                We&apos;re building innovative products starting with Hosta, our
                healthcare app, while launching Zorrow Digital Marketing and
                Zorrow School of Fashion.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <a
                href="#solutions"
                className="
                  inline-flex
                  items-center justify-center
                  px-8 py-3
                  min-h-[48px]
                  bg-primary hover:bg-primary/90
                  text-primary-foreground
                  rounded-xl
                  font-semibold
                  transition
                  hover:scale-105 active:scale-95
                  text-center
                  whitespace-nowrap
                "
              >
                Explore Our Solutions
              </a>

              {/* Secondary CTA */}
              <a
                href="#hosta"
                className="
                  inline-flex
                  items-center justify-center
                  px-8 py-3
                  min-h-[48px]
                  glass
                  border border-primary/50
                  rounded-xl
                  font-semibold
                  text-foreground
                  transition
                  hover:bg-card/70
                  text-center
                  whitespace-nowrap
                "
              >
                Learn About Hosta
              </a>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="space-y-3 sm:space-y-4 flex flex-col justify-center">
            {/* 1. Zorrowtech */}
            <div className="glass p-6 space-y-3 transition md:hover:scale-105">
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
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-primary/80"
                >
                  zorrowtech.in
                </a>
              </p>
            </div>

            {/* 2. Hosta */}
            <div className="glass p-6 space-y-3 transition md:hover:scale-105">
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

            {/* 3. Digital Marketing */}
            <div className="glass p-6 space-y-3 transition md:hover:scale-105">
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

            {/* 4. Fashion */}
            <div className="glass p-6 space-y-3 transition md:hover:scale-105">
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


