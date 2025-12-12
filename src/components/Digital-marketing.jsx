"use client"

export default function DigitalMarketing() {
  const services = [
    {
      title: "Social Media Growth",
      description: "Strategic content and community management to grow your presence",
    },
    {
      title: "Paid Ads & Funnels",
      description: "Data-driven campaigns that convert and deliver ROI",
    },
    {
      title: "Brand Strategy & Content",
      description: "Compelling storytelling that resonates with your audience",
    },
  ]

  return (
    <section id="marketing" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Zorrow Digital Marketing</h2>
          <p className="text-lg text-foreground/60">Elevate your brand's digital presence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <div key={idx} className="glass-subtle p-6 space-y-3 hover:bg-card/50 transition-all">
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-12 text-center space-y-4 bg-card/40">
          <p className="text-lg text-foreground/70">
            We're building comprehensive digital marketing solutions to help brands thrive in the modern landscape.
          </p>
          <p className="text-foreground/100 text-sm">Be part of the revolution.</p>
        </div>
      </div>
    </section>
  )
}
