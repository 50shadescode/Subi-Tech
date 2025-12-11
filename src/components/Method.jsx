const steps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "We work with your team to define the real problem, clarify success metrics, and identify constraints before writing any code.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Rapid Prototyping",
    description:
      "Build a lean, testable prototype using real data. Prove value early instead of spending months on assumptions.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "Validation with Users",
    description:
      "Put the prototype in front of actual users or internal stakeholders. Iterate based on feedback and measurable outcomes.",
    icon: "🧪",
  },
  {
    step: "04",
    title: "Production & Scale",
    description:
      "Engineer scalable pipelines and deploy reliable AI systems. Implement monitoring, CI/CD, and long-term maintenance practices.",
    icon: "🚀",
  },
];

function Method() {
  return (
    <section id="method" className="py-24 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            A method built for real-world AI projects
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Our lightweight, repeatable framework helps teams avoid costly detours 
            and ship value at every stage — from exploration to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-slate-900/60 border border-slate-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{step.icon}</span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Method;
