"use client";

import { useState } from "react";
import { Download, Smartphone, Apple, X } from "lucide-react";

export default function HostaApp() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section id="hosta" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Hosta – Healthcare Made Accessible
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Hosta is our flagship healthcare app designed to bridge the gap
                between patients and healthcare services. Find nearby hospitals,
                book ambulances instantly, and connect with verified donors.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Key Features:</h3>
              <ul className="space-y-3">
                {[
                  "Hospital Directory & Real-time Availability",
                  "Emergency Ambulance Booking",
                  "Blood Donor Network",
                  "Medical Records Management",
                  "Secure Doctor Consultations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsDownloadOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition"
              >
                <Download className="w-4 h-4" />
                Download App
              </button>

              <a
                href="https://hostaweb.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl glass border border-white/20 hover:bg-white/10 font-semibold transition"
              >
                Visit Hosta Website
              </a>
            </div>
          </div>

          {/* RIGHT PHONE + STORE ICONS */}
          <div className="flex flex-col items-center gap-4">
            
            {/* PHONE */}
            <div className="relative w-64 h-96 glass p-3 rounded-3xl transition-transform hover:scale-105">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                
                {/* NOTCH */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                <img
                  src="/Hero.png"
                  alt="Hosta App"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* STORE ICONS */}
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Smartphone className="w-5 h-5 text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Apple className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD MODAL */}
      {isDownloadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
          onClick={() => setIsDownloadOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm mx-4 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-6 space-y-6"
          >
            {/* DEPTH LAYER */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

            {/* CLOSE */}
            <button
              onClick={() => setIsDownloadOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/15 z-10"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>

            {/* HEADER */}
            <div className="relative text-center space-y-2 z-10">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/30 flex items-center justify-center border border-white/20">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Download Hosta
              </h3>
              <p className="text-sm text-white/70">
                Choose your platform to get started
              </p>
            </div>

            {/* LINKS */}
            <div className="relative space-y-3 z-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition"
              >
                <Smartphone className="w-4 h-4" />
                Download for Android
              </a>

              <a
                href="#"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold transition"
              >
                <Apple className="w-4 h-4" />
                Download for iOS
              </a>
            </div>

            <p className="relative text-[11px] text-center text-white/60 z-10">
              By downloading, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
