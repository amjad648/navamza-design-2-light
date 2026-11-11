import { CheckCircle2, Award, Users, Terminal } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Precision Engineering",
      desc: "Zero-bloat architecture. Every mobile screen and web endpoint is profiled for maximum speed, security, and battery efficiency.",
    },
    {
      title: "Product-First DNA",
      desc: "We build like startup founders: prioritizing rapid MVP iterations, user telemetry, and scalable design tokens over technical debt.",
    },
    {
      title: "Unified Ecosystems",
      desc: "Seamless synchronization between iOS, Android, and web backends through type-safe APIs and shared business logic.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 border-t border-brand-grey-200/80 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-brand-blue-700 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-600"></span>
            About Navamza
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-grey-900 tracking-tight leading-tight">
            Architecting the Next Era of Digital Products
          </h2>
          <p className="mt-4 text-base text-brand-grey-600 leading-relaxed">
            Founded as an independent technology lab, <strong className="text-brand-grey-900 font-semibold">Navamza</strong> bridges deep engineering rigor with world-class product design. We help forward-thinking teams transform conceptual ideas into production-grade mobile and web applications.
          </p>
        </div>

        {/* 3 Modern Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-grey-50 border border-brand-grey-200 hover:border-brand-blue-300 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-blue-100/70 text-brand-blue-700 flex items-center justify-center font-bold text-sm mb-5 group-hover:scale-105 transition-transform">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-brand-grey-900 mb-2">{item.title}</h3>
              <p className="text-sm text-brand-grey-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Studio Highlights Strip */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-grey-50 via-white to-brand-blue-50/50 border border-brand-grey-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-brand-blue-600 font-mono">100%</div>
            <div className="text-xs font-semibold text-brand-grey-500 mt-1 uppercase tracking-wider">Cloud Native</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-grey-900 font-mono">&lt; 50ms</div>
            <div className="text-xs font-semibold text-brand-grey-500 mt-1 uppercase tracking-wider">Response Speed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-blue-600 font-mono">2</div>
            <div className="text-xs font-semibold text-brand-grey-500 mt-1 uppercase tracking-wider">Major App Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-brand-grey-900 font-mono">24/7</div>
            <div className="text-xs font-semibold text-brand-grey-500 mt-1 uppercase tracking-wider">System Reliability</div>
          </div>
        </div>

      </div>
    </section>
  );
}
