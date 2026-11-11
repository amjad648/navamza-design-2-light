import { Smartphone, Globe, Cloud, Layout, CheckCircle } from "lucide-react";

export default function Services() {
  const bentoServices = [
    {
      title: "Mobile App Development",
      category: "iOS & Android Ecosystems",
      desc: "Architecting high-performance native and cross-platform apps built with sub-second launch times, offline-first data sync, and platform-specific gestures.",
      tech: ["Swift", "Kotlin", "Flutter", "React Native", "PWA"],
      icon: Smartphone,
      accent: "from-blue-600 to-sky-500",
      featured: true,
    },
    {
      title: "Modern Web Engineering",
      category: "Full-Stack SaaS & Portals",
      desc: "Interactive, search-engine-optimized web platforms built with Next.js, React, and modular serverless backends engineered for Core Web Vitals.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL"],
      icon: Globe,
      accent: "from-blue-700 to-indigo-600",
      featured: true,
    },
    {
      title: "Cloud & DevOps Infrastructure",
      category: "Automation & Security",
      desc: "Automated continuous delivery pipelines, Docker/Kubernetes container orchestration, and multi-region cloud deployments with 99.98% SLA.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      icon: Cloud,
      accent: "from-slate-800 to-blue-900",
      featured: false,
    },
    {
      title: "Product Design & UI/UX Systems",
      category: "Design Token Architecture",
      desc: "User research, high-fidelity wireframing, and multi-brand design systems in Figma that translate effortlessly into code components.",
      tech: ["Figma", "Design Tokens", "Wireframing", "WCAG AA"],
      icon: Layout,
      accent: "from-sky-600 to-blue-500",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 border-t border-brand-grey-200/80 bg-brand-grey-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-brand-blue-700 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-600"></span>
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-grey-900 tracking-tight">
              Comprehensive IT &amp; Engineering Services
            </h2>
            <p className="mt-3 text-base text-brand-grey-600">
              End-to-end digital product design, systems architecture, and technical execution.
            </p>
          </div>
          <div className="text-xs font-mono text-brand-grey-500 hidden md:block">
            NAVAMZA // SERVICES CATALOG
          </div>
        </div>

        {/* 2026 Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bentoServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="card-modern rounded-2xl p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-600 group-hover:scale-105 group-hover:bg-brand-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-brand-blue-700 bg-brand-blue-50/80 border border-brand-blue-100 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-grey-900 mb-3 group-hover:text-brand-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-brand-grey-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-6 border-t border-brand-grey-100 flex flex-wrap gap-2">
                  {service.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-brand-grey-600 bg-brand-grey-100/70 border border-brand-grey-200 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
