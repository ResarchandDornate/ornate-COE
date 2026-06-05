"use client";

import Image from "next/image";
import Counter from "./Counter";
import ParticleField from "./ParticleField";
import { STATS } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy text-white"
    >
      {/* Deep purple gradient base */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0c0720] via-[#1a0f38] to-[#2c1860]" />
      {/* Bright purple glow toward the right, echoing the network cluster */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_55%,rgba(168,85,247,0.38),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,0.22),transparent_50%)]" />

      {/* Animated constellation of dots + links */}
      <ParticleField />

      {/* Faint grid + soft floating glows */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-20" />
      <div className="animate-pulse-glow absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand/25 blur-[130px]" />
      <div className="animate-pulse-glow absolute -right-24 bottom-10 h-112 w-md rounded-full bg-accent/20 blur-[130px]" />
      <div className="animate-float absolute right-[12%] top-[22%] h-24 w-24 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div className="max-w-3xl">
          <h1 className="font-display tracking-tight text-white">
            <span className="text-gradient block whitespace-nowrap text-base font-semibold uppercase tracking-[0.18em] sm:text-2xl lg:text-3xl">
              Centre of Excellence
            </span>
            <span className="mt-2 block text-2xl font-bold leading-[1.08] sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              B.K. Bhattacharyya
            </span>
          </h1>

          <p className="mt-3 font-display text-base font-medium text-purple-200 sm:mt-4 sm:text-xl">
            Power Electronics &amp; Clean Energy Systems · at Ornate Solar
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            Researching, designing and commercializing advanced power
            electronics — inverters, solar pump controllers and clean energy
            systems — entirely through indigenous design, bridging academia and
            industry to power India&apos;s clean energy transformation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="btn-gradient rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl shadow-brand/40 hover:scale-105"
            >
              Explore our products
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Vision &amp; Mission
            </a>
          </div>
        </div>

          {/* Founder portrait card */}
          <div className="group relative mx-auto w-full max-w-sm lg:mx-0">
            {/* Soft gradient glow behind the card */}
            <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-brand/45 via-accent/25 to-transparent opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/40 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/Gemini_Generated_Image_gnm295gnm295gnm2.png"
                  alt="Bidyut Kumar Bhattacharyya"
                  width={600}
                  height={750}
                  priority
                  className="aspect-4/5 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Fade into the dark base so the name button reads clearly */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-[#0c0720] via-[#0c0720]/70 to-transparent" />
                {/* Name button */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="btn-gradient rounded-full px-4 py-3 text-center shadow-lg shadow-brand/40">
                    <span className="font-display text-sm font-bold tracking-wide text-white sm:text-base">
                      Bidyut Kumar Bhattacharyya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat counters — glassy on the dark backdrop */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl shadow-black/20 backdrop-blur-md sm:mt-20 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group bg-white/5 p-4 transition-colors hover:bg-white/10 sm:p-6"
            >
              <div className="text-gradient-light font-display text-2xl font-bold sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-semibold text-white sm:text-sm">
                {s.label}
              </div>
              <div className="text-[11px] text-purple-200/70 sm:text-xs">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
