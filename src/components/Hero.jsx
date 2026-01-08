import React from 'react';
import profilePic from '../assets/profile.jpg';

function Hero() {

  const callBackend = () => {
    fetch("/api/health")
      .then(res => res.json())
      .then(data => console.log("Backend data: ", data))
  }
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 flex flex-col md:flex-row items-center gap-6 lg:gap-8">

        {/* LEFT COLUMN: Text Content */}
        <div className="flex-1 text-left z-10">
          <p className="text-emerald-400 text-sm font-semibold tracking-[0.2em] uppercase">
            AI Consulting · Data Products · MLOps
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-6 mb-6">
            First-principles AI solutions that actually ship.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            We help fast-moving teams design, prototype, and launch AI-enabled products
            – from messy CSVs and half-baked ideas to production systems your users
            actually touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/254726063889"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-slate-950 hover:bg-emerald-400HV transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:subiAItech@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-white hover:bg-slate-900 transition"
            >
              Email Subi AI Tech
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            No vague AI hype. We work with you to define concrete business outcomes and ship towards them.
          </p>
        </div>

        {/* RIGHT COLUMN: Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* UPDATED SIZE LOGIC:
              1. w-64 h-64 (256px): Default mobile size (Smaller than before so it fits better)
              2. sm:w-80 sm:h-80 (320px): Tablet size (Intermediate step)
              3. md:w-[450px] md:h-[450px]: Desktop size (Large, exactly as you liked it)
          */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>

            <img
              src={profilePic}
              onClick={callBackend}
              alt="Subi AI Tech Founder"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-700/50"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
