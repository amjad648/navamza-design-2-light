import { Smartphone, Globe, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          {/* Subtle Modern Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-blue-200 bg-brand-blue-50/80 text-brand-blue-800 text-xs font-semibold mb-6 shadow-soft-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue-600"></span>
            <span>Navamza Product Studio</span>
            <span className="text-brand-blue-400">•</span>
            <span className="text-brand-grey-500 font-normal">Next-Gen IT Engineering</span>
          </div>

          {/* Clean Display Headline (Blue & Grey) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-grey-900 leading-[1.35]">
            Engineering Intelligent Products for{" "}
            <span className="whitespace-nowrap">
            <span className="text-brand-blue-600 underline decoration-brand-blue-200 decoration-wavy underline-offset-8">
              Mobile
            </span>{" "}
            &amp;{" "}
            <span className="text-brand-blue-600">
              Web
            </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-brand-grey-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Navamza is an agile product lab and digital services consultancy. We design, architect, and deploy high-concurrency mobile apps and cloud-native web platforms.
          </p>

          {/* Feature Badges Strip (No CTA button) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-brand-grey-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-grey-200 shadow-soft-sm">
              <Smartphone className="w-3.5 h-3.5 text-brand-blue-600" /> iOS &amp; Android Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-grey-200 shadow-soft-sm">
              <Globe className="w-3.5 h-3.5 text-brand-blue-600" /> Full-Stack React &amp; Next.js
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-grey-200 shadow-soft-sm">
              <Zap className="w-3.5 h-3.5 text-brand-blue-600" /> Sub-50ms Edge Latency
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-grey-200 shadow-soft-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-600" /> 99.98% Cloud SLA
            </span>
          </div>

        </div>

        {/* 2026 UNIQUE HERO VISUAL: Dual Platform Showcase (Mobile + Web Cloud) */}
        <div className="relative mt-10 rounded-2xl bg-white border border-brand-grey-200 shadow-soft-lg p-4 sm:p-8 overflow-hidden">
          
          {/* Subtle grid accent inside mockup frame */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0"></div>

          {/* Top Mockup Header Bar */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-brand-grey-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
              <span className="ml-3 text-xs font-mono font-medium text-brand-grey-400">navamza.engine // runtime: v2.4.0</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-brand-grey-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Dual Platform Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Mobile App Architecture Card */}
            <div className="lg:col-span-5 bg-brand-grey-50 rounded-xl p-5 border border-brand-grey-200/90 shadow-soft-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    NV
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-grey-900">Navamza Mobile Client</div>
                    <div className="text-[10px] text-brand-grey-500 font-mono">Cross-Platform Swift / Flutter</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-brand-blue-700 bg-brand-blue-100/80 px-2 py-0.5 rounded-full">
                  60 FPS
                </span>
              </div>

              {/* Simulated Mobile Visual UI */}
              <div className="bg-white rounded-lg p-4 border border-brand-grey-200 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-grey-500">Active Mobile Sessions</span>
                  <span className="font-mono font-bold text-brand-grey-900">42,850 req/s</span>
                </div>
                <div className="w-full bg-brand-grey-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-blue-600 h-full rounded-full w-4/5"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 bg-brand-grey-50 rounded border border-brand-grey-100">
                    <div className="text-[10px] text-brand-grey-500">iOS</div>
                    <div className="text-xs font-bold text-brand-blue-700">Native</div>
                  </div>
                  <div className="p-2 bg-brand-grey-50 rounded border border-brand-grey-100">
                    <div className="text-[10px] text-brand-grey-500">Android</div>
                    <div className="text-xs font-bold text-brand-blue-700">Kotlin</div>
                  </div>
                  <div className="p-2 bg-brand-grey-50 rounded border border-brand-grey-100">
                    <div className="text-[10px] text-brand-grey-500">Sync</div>
                    <div className="text-xs font-bold text-emerald-600">&lt; 18ms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Web Platform Cloud Console Card */}
            <div className="lg:col-span-7 bg-brand-grey-900 text-white rounded-xl p-5 shadow-soft-sm font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-grey-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-blue-400" />
                  <span className="text-brand-grey-300 font-semibold">Web Orchestration Core</span>
                </div>
                <span className="text-[10px] text-brand-blue-300 bg-brand-blue-900/60 px-2 py-0.5 rounded border border-brand-blue-800">
                  HTTP/3 • Edge Node
                </span>
              </div>

              {/* Terminal Logs & Metrics */}
              <div className="space-y-2 text-[11px] leading-relaxed">
                <div className="flex items-center justify-between text-brand-grey-400">
                  <span>[09:41:20] Next.js Edge Runtime:</span>
                  <span className="text-emerald-400 font-semibold">READY (100% Cache Hit)</span>
                </div>
                <div className="flex items-center justify-between text-brand-grey-400">
                  <span>[09:41:21] GraphQL Gateway:</span>
                  <span className="text-brand-blue-300">Synchronized 14 Microservices</span>
                </div>
                <div className="flex items-center justify-between text-brand-grey-400">
                  <span>[09:41:22] Core Web Vitals:</span>
                  <span className="text-emerald-400 font-semibold">LCP: 0.8s • CLS: 0.00 • FID: 12ms</span>
                </div>
              </div>

              {/* Status Chips */}
              <div className="mt-4 pt-3 border-t border-brand-grey-800 flex items-center justify-between text-[10px] text-brand-grey-400">
                <span>Cluster: us-west-1a</span>
                <span className="text-brand-blue-400">navamza.com/api/v1/health</span>
                <span className="text-emerald-400">OK 200</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
