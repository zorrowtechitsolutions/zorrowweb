"use client";

import { useState } from "react";
import { Download, Smartphone, Apple, X } from "lucide-react";

export default function HostaApp() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section
      id="hosta"
      className="py-5 from-background to-secondary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Hosta – Healthcare Made Accessible
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Hosta is our flagship healthcare app designed to bridge the gap
                between patients and healthcare services. Find nearby hospitals,
                book ambulances instantly, and connect with verified donors.
                Built with compassion and technology.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Key Features:</h3>
              <ul className="space-y-3">
                {[
                  "Hospital Directory & Real-time Availability",
                  "Emergency Ambulance Booking",
                  "Blood Donor Network",
                  "Medical Records Management",
                  "Secure Doctor Consultations",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex sm:inline-flex justify-center sm:justify-start w-full">
                {/* Download App button opens popup */}
                <button
                  onClick={() => setIsDownloadOpen(true)}
                  className="px-6 py-3 bg-green-600 hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </button>
              </div>

              <div className="flex sm:block justify-center sm:justify-start w-full">
                <a
                  href="https://hostaweb.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass hover:bg-card/70 text-foreground border border-primary/50 rounded-xl font-semibold transition-all inline-block"
                >
                  Visit Hosta Website
                </a>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 glass p-3 rounded-3xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              {/* Phone screen */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                {/* App screenshot image (change src manually) */}
                <img
                  src="/Hero.png"
                  alt="Hosta App Screenshot"
                  className="w-full h-full object-cover"
                />

                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Popup (Glass Modal) */}
      {isDownloadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-sm mx-4 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-2xl p-6 space-y-6">
            {/* Close button */}
            <button
              onClick={() => setIsDownloadOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/15 transition-colors"
              aria-label="Close download dialog"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>

            {/* Header */}
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/30 border border-white/20 mb-1">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Download Hosta
              </h3>
              <p className="text-sm text-slate-200/80">
                Choose your platform to get started.
              </p>
            </div>

            {/* Download buttons */}
            <div className="space-y-3">
              {/* Android / Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 bg-green-600 hover:bg-green-300 transition-all shadow-md border-0"
              >
                <Smartphone className="w-4 h-4" />
                Download for Android
              </a>

              <a
                href="#" // 👉 replace with App Store link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold 
             text-slate-900 bg-green-500 hover:bg-green-400 transition-all shadow-md"
              >
                <Apple className="w-4 h-4" />
                Download for iOS
              </a>
            </div>

            <p className="text-[11px] text-center text-slate-200/60">
              By downloading, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

