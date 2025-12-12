"use client"

const solutions = [
  {
    id: "hosta",
    title: "Hosta – Healthcare App",
    status: "Live Now",
    statusColor: "bg-green-500/20 text-green-300",
    description: "Connect with hospitals, book ambulances, find donors. Hosta makes healthcare accessible to everyone.",
  },
  {
    id: "marketing",
    title: "Zorrow Digital Marketing",
    status: "ACTIVE",
    statusColor: "bg-green-500/20 text-green-300",
    description: "Social media growth, paid advertising strategies, and content marketing tailored to your brand.",
  },
  {
    id: "fashion",
    title: "Zorrow School of Fashion",
    status: "Concept Stage",
    statusColor: "bg-blue-500/20 text-blue-300",
    description: "A modern fashion school combining design, branding, and marketing for the next generation.",
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-foreground/60">Three initiatives building the future</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div key={solution.id} className="glass p-8 space-y-6 hover:bg-card/70 transition-all group cursor-pointer">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold inline-block ${solution.statusColor}`}>
                  {solution.status}
                </span>
              </div>

              <p className="text-foreground/70 leading-relaxed">{solution.description}</p>

              <a
                href={`#${solution.id}`}
                className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold group-hover:gap-2 gap-1"
              >
                Learn More
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
