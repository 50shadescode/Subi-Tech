function Hero() {
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

      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-emerald-400 text-sm font-semibold tracking-[0.2em] uppercase">
            AI Consulting · Data Products · MLOps
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            First-principles AI solutions that actually ship.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            We help fast-moving teams design, prototype, and launch AI-enabled products
            – from messy CSVs and half-baked ideas to production systems your users
            actually touch.
          </p>

                    <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/254726063889"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:subiAItech@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 text-sm font-medium hover:bg-slate-900 transition"
            >
              Email Subi AI Tech
            </a>
          </div>


          <p className="text-xs text-slate-400">
            No vague AI hype. We work with you to define concrete business outcomes and ship towards them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
