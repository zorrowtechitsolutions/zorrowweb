// Futuristic glassmorphism contact component
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xblnakqk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        alert("Message sent successfully! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          message: "",
          projectType: "",
        });
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* background glow removed as you did */}
      {/* <div className="absolute inset-0 from-primary/20 via-blue-600/10 to-purple-600/20 blur-3xl animate-pulse opacity-50" /> */}

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Futuristic
          </h2>
        </div>

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-xl shadow-black/40 p-8 md:p-12 space-y-6 relative">
          {/* neon outer glow removed as you did */}
          {/* <div className="absolute inset-0 rounded-2xl border border-primary/30 shadow-[0_0_80px_20px_rgba(59,130,246,0.2)] pointer-events-none" /> */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/40 focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-all hover:bg-white/20 backdrop-blur-xl"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/40 focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-all hover:bg-white/20 backdrop-blur-xl"
                  placeholder="your@gmail.com"
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
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/40 focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-all hover:bg-white/20 backdrop-blur-xl"
                placeholder="Type your project type..."
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
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder-white/40 focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-all hover:bg-white/20 backdrop-blur-xl resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center gap-3 pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
