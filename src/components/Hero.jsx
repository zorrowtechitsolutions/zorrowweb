"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    try {
      const response = await fetch("https://formspree.io/f/xblnakqk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })

      if (response.ok) {
        alert("Message sent successfully! We'll contact you soon.")
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        })
        form.reset()
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <section
      id="contact"
      className="relative py-1 px-4 sm:px- lg:px- overflow-hidden"
    >
      <div className="relative max-w-2xl mx-auto z-10">
        
    {/* Heading */}
<div className="text-center mb-12 px-2 overflow-visible">
  <h2
    className="
      text-3xl sm:text-4xl md:text-5xl
      font-semibold tracking-tight
      leading-tight sm:leading-snug md:leading-[1.15]
      pb-1
      bg-gradient-to-r from-primary to-purple-400
      bg-clip-text text-transparent
    "
  >
    Let&apos;s Build Something Futuristic
  </h2>
</div>


        {/* Glass Card */}
        <div
          className="
            relative
            rounded-2xl
            bg-white/2
            backdrop-blur-2xl
            border border-white/10
            p-8 sm:p-10 md:p-12
          "
        >
          {/* Inner glass highlight */}
          <div className="absolute inset-0 rounded-2xl  from-white/10 via-transparent to-transparent pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-white/10 text-white
                    border border-white/20
                    placeholder-white/40
                    backdrop-blur-xl
                    focus:outline-none
                    focus:ring-2 focus:ring-primary/80
                    transition
                  "
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-white/10 text-white
                    border border-white/20
                    placeholder-white/40
                    backdrop-blur-xl
                    focus:outline-none
                    focus:ring-2 focus:ring-primary/80
                    transition
                  "
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">
                Project Type
              </label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Website, App, Branding, Marketing..."
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-white/10 text-white
                  border border-white/20
                  placeholder-white/40
                  backdrop-blur-xl
                  focus:outline-none
                  focus:ring-2 focus:ring-primary/80
                  transition
                "
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-white/10 text-white
                  border border-white/20
                  placeholder-white/40
                  backdrop-blur-xl
                  resize-none
                  focus:outline-none
                  focus:ring-2 focus:ring-primary/80
                  transition
                "
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="
                  flex items-center gap-2
                  px-8 py-3
                  rounded-xl
                  bg-primary text-primary-foreground
                  font-semibold
                  transition-all
                  hover:bg-primary/85
                  hover:scale-105
                  active:scale-95
                  shadow-md hover:shadow-lg
                "
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
