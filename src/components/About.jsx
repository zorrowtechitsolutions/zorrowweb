"use client"

export default function About() {
  const aboutCards = [
    {
      title: "Our Vision",
      description:
        "To empower businesses and individuals through technology, creative excellence, and innovative education. We believe in building products that matter.",
    },
    {
      title: "What We Do Now",
      description:
        "Hosta is our flagship healthcare app connecting patients with hospitals, ambulance services, and donors. Trusted by thousands for accessible healthcare solutions.",
    },
    {
      title: "What's Coming Next",
      description:
        "Zorrow Digital Marketing will help brands grow through social media, paid advertising, and content strategy. Zorrow School of Fashion brings design and marketing education together.",
    },
  ]

  return (
    <section id="about" className="py-5 from-background via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Zorrow</h2>
          <p className="text-lg text-foreground/60">Understanding our mission and future</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, idx) => (
            <div key={idx} className="glass p-8 space-y-4 hover:bg-card/70 transition-all">
              <h3 className="text-xl font-bold text-primary">{card.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
