"use client";
import React from "react";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="mx-auto max-w-5xl px-6 pt-20 pb-12 border-t border-slate-900">
      
      {/* Part 1: High-Intent Action Panel Grid (Optimized per Section 12 Audit Blueprint) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">// SYSTEM INITIALIZATION</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
          Let's Build Systems That Scale.
        </h2>
        <p className="text-sm text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Whether you're launching a new product, automating operations, or building data infrastructure, Suby Tech can help turn your vision into a production-ready solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
        {/* Route 1: WhatsApp (Primary CTA Alternative) */}
        <a 
          href="https://wa.me/254726063889"
          target="_blank"
          rel="noreferrer"
          className="group relative rounded-2xl border border-slate-900 bg-slate-950/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-950/50"
        >
          <div className="text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-2.5 w-fit mb-4 group-hover:scale-105 transition-transform">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Start A Project</h3>
          <p className="text-xs text-slate-400 mb-4">Initialize a rapid structural scope assembly or deploy direct system specs directly to our channels.</p>
          <span className="text-xs font-mono font-bold text-emerald-400 inline-flex items-center group-hover:translate-x-1 transition-transform">
            Launch Framework &rarr;
          </span>
        </a>

        {/* Route 2: Email Brief */}
        <a 
          href="mailto:studio@subytech.com"
          className="group relative rounded-2xl border border-slate-900 bg-slate-950/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-950/50"
        >
          <div className="text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-2.5 w-fit mb-4 group-hover:scale-105 transition-transform">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Dispatch Core Brief</h3>
          <p className="text-xs text-slate-400 mb-4">Have an architectural checklist or compliance mandate? Route files straight to our engine evaluation pool.</p>
          <span className="text-xs font-mono font-bold text-indigo-400 inline-flex items-center group-hover:translate-x-1 transition-transform">
            Submit Specifications &rarr;
          </span>
        </a>

        {/* Route 3: Calendar Sync (Secondary CTA Alternative) */}
        <a 
          href="#calendar-sync"
          className="group relative rounded-2xl border border-slate-900 bg-slate-950/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-950/50"
        >
          <div className="text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-2.5 w-fit mb-4 group-hover:scale-105 transition-transform">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Schedule Discovery Call</h3>
          <p className="text-xs text-slate-400 mb-4">Lock in a clean 30-minute system alignment review window directly on our calendar timeline grid.</p>
          <span className="text-xs font-mono font-bold text-cyan-400 inline-flex items-center group-hover:translate-x-1 transition-transform">
            Reserve Slot &rarr;
          </span>
        </a>
      </div>

      {/* Part 2: Premium Minimalist Footer Bar */}
      <div className="border-t border-slate-900/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          <span className="font-sans font-black tracking-tight text-white text-sm mr-2">SUBYTECH</span>
          <span>&copy; {currentYear} Studio. All rights engineered.</span>
        </div>
        
        {/* Vercel-Style Operational Heartbeat Monitor */}
        <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-900">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400 text-[10px] tracking-wider uppercase font-semibold">All Systems Operational</span>
        </div>
      </div>

    </footer>
  );
}