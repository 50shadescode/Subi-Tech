const caseStudies = [
  {
    company: "B2B SaaS platform",
    headline: "Reduced onboarding time from weeks to days",
    result:
      "Designed and shipped an internal AI assistant that guides customer success reps through complex configuration steps.",
    impact:
      "Cut manual onboarding effort by ~40% and reduced variance in customer setups.",
  },
  {
    company: "Fintech startup",
    headline: "Turned noisy transactional data into a risk scoring product",
    result:
      "Built a data pipeline and model that flags high-risk accounts using existing transaction logs and support tickets.",
    impact:
      "Enabled the team to prioritize reviews and reduce false positives without hiring a large ops team.",
  },
  {
    company: "Healthcare analytics firm",
    headline: "From ad-hoc notebooks to a repeatable pipeline",
    result:
      "Re-engineered a collection of notebooks into a scheduled, tested data pipeline with clear ownership.",
    impact:
      "Improved reliability, reduced firefighting, and made it possible to onboard new engineers quickly.",
  },
];

function CaseStudies() {
  return (
    <section id="cases" className="py-24 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Case studies from the field
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Every engagement looks different, but the pattern is the same:
            clarify the problem, ship a narrow solution fast, then scale what works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, index) => (
            <article
              key={index}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400 mb-2">
                {cs.company}
              </p>
              <h3 className="text-lg font-semibold mb-3">
                {cs.headline}
              </h3>
              <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                {cs.result}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed mt-auto">
                Impact: {cs.impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
