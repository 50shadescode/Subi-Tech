function About() {
  return (
    <section id="about" className="py-24 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for teams who care about what ships
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Subi AI Tech exists for teams who need more than slideware. We blend
            first-principles thinking, solid engineering, and a bias towards
            production to help you move from “AI could be useful” to “AI is in
            production and creating value”.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We’ve worked with product, data, and engineering leaders who are
            under pressure to deliver results quickly without burning out their
            teams. Our role is to bring clarity, focus, and the extra hands you
            need to ship.
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold mb-1">First-principles approach</h3>
            <p className="text-slate-400">
              We start from the problem, not the model. Tools are chosen to fit
              the job, not the other way around.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold mb-1">Hands-on collaboration</h3>
            <p className="text-slate-400">
              We work in your repos, with your engineers and data people. No
              black boxes, no mystery tools.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold mb-1">Pragmatic, not dogmatic</h3>
            <p className="text-slate-400">
              Simple solutions beat clever ones. We optimize for reliability,
              maintainability, and value delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
