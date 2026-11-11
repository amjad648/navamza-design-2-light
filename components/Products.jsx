import { Sparkles, Terminal, Activity, RefreshCw } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Navamza Flow",
      tagline: "Sprint & Release Orchestration for Mobile & Web",
      desc: "An intelligent deployment engine connecting mobile app store submission pipelines with cloud staging environments.",
      status: "PRIVATE BETA",
      statusBadge: "bg-blue-50 text-blue-700 border-blue-200",
      version: "v0.9.4-beta",
      target: "Mobile & DevOps Teams",
      icon: Terminal,
      highlight: "Automated TestFlight & Play Console distribution",
    },
    {
      title: "PulseMetrics SDK",
      tagline: "Real-Time Telemetry & Mobile Crash Diagnostics",
      desc: "A sub-10KB client-side SDK capturing user-journey crashes, memory bottlenecks, and frame drops across Flutter and React Native.",
      status: "IN DEVELOPMENT",
      statusBadge: "bg-slate-100 text-slate-700 border-slate-200",
      version: "Target Q2 2027",
      target: "App Engineers",
      icon: Activity,
      highlight: "Zero CPU overhead performance tracking",
    },
    {
      title: "OmniSync Cloud",
      tagline: "Ultra-Low Latency Cross-Platform State Engine",
      desc: "Distributed WebSocket and gRPC state synchronization facilitating offline-first persistence for collaborative mobile and web apps.",
      status: "R&D INCUBATING",
      statusBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      version: "Architecture v0.3",
      target: "Enterprise Platforms",
      icon: RefreshCw,
      highlight: "Conflict-free replicated data types (CRDTs)",
    },
  ];

  return (
    <section id="products" className="py-24 px-6 border-t border-brand-grey-200/80 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-brand-blue-700 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Navamza Labs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-grey-900 tracking-tight">
            Proprietary Products in Development
          </h2>
          <p className="mt-3 text-base text-brand-grey-600">
            Internal software tools and developer utilities incubated directly within our product lab.
          </p>
        </div>

        {/* 3 Modern Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="card-modern rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Status Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${p.statusBadge}`}>
                    {p.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-grey-900 mb-1 group-hover:text-brand-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-blue-600 mb-3">
                    {p.tagline}
                  </div>
                  <p className="text-sm text-brand-grey-600 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* Technical Highlight Box */}
                <div className="mt-4 pt-4 border-t border-brand-grey-100 space-y-2">
                  <div className="text-[11px] text-brand-grey-500 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500"></span>
                    <span>{p.highlight}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-mono text-brand-grey-400 pt-2 border-t border-brand-grey-100/60">
                    <span>{p.target}</span>
                    <span className="text-brand-grey-700 font-semibold">{p.version}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
