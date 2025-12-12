"use client"

export default function FashionSchool() {
  const programs = [
    {
      title: "Fashion Design",
      description: "Master the fundamentals of design and create your signature style",
      icon: "✨",
    },
    {
      title: "Brand & Styling",
      description: "Learn branding principles and personal styling techniques",
      icon: "🎨",
    },
    {
      title: "Fashion + Tech + Marketing",
      description: "Combine fashion with technology and digital marketing strategies",
      icon: "🚀",
    },
  ]

  return (
    <section id="fashion" className="py-5 from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full font-semibold">
              Status: Concept Stage – Stay Tuned
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Zorrow School of Fashion</h2>
          <p className="text-lg text-foreground/60">Where fashion meets technology and business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, idx) => (
            <div key={idx} className="glass p-8 space-y-4 hover:bg-card/70 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{program.icon}</div>
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-12 space-y-6 bg-card/40">
          <h3 className="text-2xl font-bold text-center">Our Vision</h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Zorrow School of Fashion is designed to educate the next generation of fashion professionals. We combine
            traditional design principles with modern technology and marketing expertise, creating a unique learning
            experience that prepares students for the future of fashion.
          </p>
          <div className="flex justify-center pt-4">
          </div>
        </div>
      </div>
    </section>
  )
}
