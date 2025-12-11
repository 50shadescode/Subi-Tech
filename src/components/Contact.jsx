function Contact() {
  return (
    <section id="contact" className="py-24 border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Ready to talk about your AI project?
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Whether you have a rough idea, a half-built prototype, or a messy
          dataset you&apos;re not sure how to use, we can help you figure out
          the next concrete step.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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

        <p className="text-xs text-slate-500">
          Typical response time: under 24 hours on weekdays.
        </p>
      </div>
    </section>
  );
}

export default Contact;
