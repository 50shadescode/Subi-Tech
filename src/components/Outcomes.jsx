const outcomes = [
  {
    label: "Time-to-prototype",
    value: "2–4 weeks",
    description:
      "Get a working AI prototype in front of users quickly – not in six months.",
  },
  {
    label: "Data leverage",
    value: "70%+ usable",
    description:
      "Turn messy, underused datasets into structured assets that power products.",
  },
  {
    label: "Engineering impact",
    value: "Fewer ad-hoc scripts",
    description:
      "Replace brittle one-off notebooks with maintainable pipelines and services.",
  },
  {
    label: "Delivery model",
    value: "Hands-on",
    description:
      "We ship with your team, not just hand over a slide deck and disappear.",
  },
];

function Outcomes() {
  return (
    <section id="outcomes" className="py-24 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Outcomes you can actually measure
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We focus on shippable value: prototypes, internal tools, and
            production systems that change how your team works — not just
            experiments that sit in a notebook.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-6 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-400 mb-2">
                {item.label}
              </div>
              <div className="text-2xl font-bold mb-2">
                {item.value}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Outcomes;
