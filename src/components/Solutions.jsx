import React from 'react';

const industries = [
  {
    title: "For Schools & Training",
    icon: "🎓",
    features: [
      "Student management (records, grades)",
      "Parent & Teacher portals",
      "AI-assisted reporting & insights"
    ],
    result: "Less paperwork, better decisions, happier parents."
  },
  {
    title: "For Hotels & Hospitality",
    icon: "🏨",
    features: [
      "Direct booking websites",
      "Reservation & inquiry systems",
      "24/7 AI guest chat assistants"
    ],
    result: "More direct bookings, fewer missed inquiries."
  },
  {
    title: "For SMEs & Organizations",
    icon: "🏢",
    features: [
      "Automated internal tools",
      "Sales & Ops dashboards",
      "Data analysis & action AI"
    ],
    result: "Save time, reduce errors, improve profit."
  }
];

function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
            Real World Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
            We don't just write code. <br />
            <span className="text-emerald-400">We solve business problems.</span>
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 hover:bg-slate-900 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{industry.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {industry.title}
              </h3>
              
              <ul className="space-y-3 mb-8">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-emerald-400 text-sm font-medium">
                  Result: <span className="text-slate-300 font-normal">{industry.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;