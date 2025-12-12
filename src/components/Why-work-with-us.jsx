"use client"

export default function WhyWorkWithUs() {
  const reasons = [
    {
      title: "Tech + Creative Mix",
      description: "We blend cutting-edge technology with creative excellence",
    },
    {
      title: "Future-Ready Thinking",
      description: "Always innovating and anticipating market trends",
    },
    {
      title: "User-first Design",
      description: "Every solution is built with the user experience at its core",
    },
    {
      title: "Scalable Solutions",
      description: "From concept to global scale, we grow with you",
    },
  ]

  return (
    <section id="why" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Zorrow</h2>
          <p className="text-lg text-foreground/60">Our commitment to excellence</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="glass-subtle p-6 space-y-3 hover:bg-card/60 transition-all group">
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-lg">{idx + 1}</span>
              </div>
              <h3 className="font-bold text-lg">{reason.title}</h3>
              <p className="text-sm text-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
