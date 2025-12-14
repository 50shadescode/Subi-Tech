import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-24 border-b border-slate-800 bg-slate-950 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
        <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
          Get in touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
          Ready to ship?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We’re currently taking on new projects. Whether you have a rough idea, a half-built prototype, or a messy dataset, let's figure out the next step.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3 relative z-10">
        
        {/* OPTION 1: WhatsApp (Chat) */}
        <a 
          href="https://wa.me/254726063889"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all hover:border-emerald-500/50 hover:-translate-y-1 hover:bg-slate-900"
        >
          <div className="mb-6 flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-slate-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
            {/* Message Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Chat directly</h3>
          <p className="text-slate-400 text-sm mb-6">
            Best for quick questions or immediate project needs.
          </p>
          <span className="text-emerald-400 text-sm font-semibold group-hover:underline decoration-emerald-500/50 underline-offset-4">
            Chat on WhatsApp &rarr;
          </span>
        </a>

        {/* OPTION 2: Email */}
        <a 
          href="mailto:subiAItech@gmail.com"
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all hover:border-emerald-500/50 hover:-translate-y-1 hover:bg-slate-900"
        >
          <div className="mb-6 flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-slate-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Send a brief</h3>
          <p className="text-slate-400 text-sm mb-6">
            Have a detailed scope? Send it over for review.
          </p>
          <span className="text-emerald-400 text-sm font-semibold group-hover:underline decoration-emerald-500/50 underline-offset-4">
            Email Subi AI Tech &rarr;
          </span>
        </a>

        {/* OPTION 3: Book a Call */}
        {/* Currently points to WhatsApp, but ready for a Calendly link later */}
        <a 
          href="https://wa.me/254726063889" 
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all hover:border-emerald-500/50 hover:-translate-y-1 hover:bg-slate-900"
        >
          <div className="mb-6 flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-slate-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
            {/* Calendar Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Book a call</h3>
          <p className="text-slate-400 text-sm mb-6">
            30-minute discovery call to see if we're a fit.
          </p>
          <span className="text-emerald-400 text-sm font-semibold group-hover:underline decoration-emerald-500/50 underline-offset-4">
            Schedule now &rarr;
          </span>
        </a>

      </div>
      
      <p className="text-xs text-slate-500 text-center mt-12 relative z-10">
        Typical response time: under 24 hours on weekdays.
      </p>
    </section>
  );
}

export default Contact;