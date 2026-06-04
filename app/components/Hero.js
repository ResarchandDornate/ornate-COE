"use client";

import Counter from "./Counter";
import { STATS } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy text-white"
    >
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-70" />
      {/* Radial vignette + glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,11,24,0)_0%,rgba(6,11,24,0.85)_70%)]" />
      <div className="animate-pulse-glow absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand/30 blur-[120px]" />
      <div className="animate-pulse-glow absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent/25 blur-[120px]" />
      <div className="animate-float absolute right-[12%] top-[22%] h-24 w-24 rounded-2xl border border-electric/30 bg-electric/5 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-brand backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Indigenous Design · Innovation · Excellence
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            B.K. Bhattacharyya
            <br />
            <span className="text-gradient">Centre of Excellence</span>
          </h1>

          <p className="mt-4 font-display text-lg font-medium text-slate-300 sm:text-xl">
            Power Electronics &amp; Clean Energy Systems · at Ornate Solar
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
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
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Vision &amp; Mission
            </a>
          </div>
        </div>

        {/* Stat counters */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group bg-navy-800/40 p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="font-display text-3xl font-bold text-brand sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                {s.label}
              </div>
              <div className="text-xs text-slate-400">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-brand" />
        </div>
      </div>
    </section>
  );
}
