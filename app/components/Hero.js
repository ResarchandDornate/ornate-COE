"use client";

import Counter from "./Counter";
import { STATS } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fbfaf8] text-navy-800"
    >
      {/* Animated light grid backdrop */}
      <div className="absolute inset-0 grid-bg-light animate-grid opacity-70" />
      {/* Soft radial fade to blend the grid into the surface + glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#fbfaf8_82%)]" />
      <div className="animate-pulse-glow absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />
      <div className="animate-pulse-glow absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
      <div className="animate-float absolute right-[12%] top-[22%] h-24 w-24 rounded-2xl border border-brand/25 bg-brand/5 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium tracking-wide text-brand-dark shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Indigenous Design · Innovation · Excellence
          </span>

          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-navy-800 sm:mt-6 sm:text-6xl sm:leading-[1.05] lg:text-7xl">
            B.K. Bhattacharyya
            <br />
            <span className="text-gradient">Centre of Excellence</span>
          </h1>

          <p className="mt-3 font-display text-base font-medium text-slate-600 sm:mt-4 sm:text-xl">
            Power Electronics &amp; Clean Energy Systems · at Ornate Solar
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Researching, designing and commercializing advanced power
            electronics — inverters, solar pump controllers and clean energy
            systems — entirely through indigenous design, bridging academia and
            industry to power India&apos;s clean energy transformation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-navy shadow-xl shadow-brand/30 transition-transform hover:scale-105"
            >
              Explore our products
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-slate-100"
            >
              Vision &amp; Mission
            </a>
          </div>
        </div>

        {/* Stat counters */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:mt-20 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group bg-white p-4 transition-colors hover:bg-slate-50 sm:p-6"
            >
              <div className="font-display text-2xl font-bold text-brand-dark sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-semibold text-navy-800 sm:text-sm">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-500 sm:text-xs">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-300 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-brand" />
        </div>
      </div>
    </section>
  );
}
