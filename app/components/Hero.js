// Application chips (left column) — short label + line icon.
const APPS = [
  { label: "Solar", d: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" },
  { label: "BESS", d: "M4 8h13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM20 11v2" },
  { label: "EV charging", d: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z" },
  { label: "Microgrids", d: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 7v4M12 11l-5 4M12 11l5 4" },
  { label: "Solid-state TF", d: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fbfaff] text-navy-800"
    >
      {/* Full-bleed vivid mesh-gradient backdrop — covers the whole hero
          edge to edge like a background image (no floating blobs) */}
      <div className="absolute inset-0 mesh-hero" />

      {/* Concept background — faint power-electronics circuit motif */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.45]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
        fill="none"
      >
        <g stroke="#9333ea" strokeWidth="1.5" opacity="0.22">
          <path d="M0 180 H320 L360 220 H560" />
          <path d="M560 220 V120 H760" />
          <path d="M1440 300 H1120 L1080 260 H880" />
          <path d="M0 620 H260 L300 580 H520" />
          <path d="M1440 660 H1180 L1140 700 H940" />
          <path d="M720 800 V640 H900" />
        </g>
        <g fill="#db2777" opacity="0.3">
          {[
            [560, 220], [760, 120], [880, 260], [520, 580], [940, 700], [900, 640], [320, 180], [1120, 300],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
          ))}
        </g>
      </svg>

      {/* Drifting grid */}
      <div className="absolute inset-0 grid-bg-light animate-grid opacity-50" />

      {/* Bottom fade so the section melts into the page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#f7f5fc]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-28 text-center sm:py-32 lg:px-8">
        {/* Live status badge */}
        <div
          className="animate-rise mb-7 inline-flex items-center gap-2 rounded-full border border-brand/20 glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-dark shadow-sm shadow-brand/5"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          DSIR-Recognised In-House R&amp;D · Made in India
        </div>

        <h1
          className="animate-rise mx-auto font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy-800 sm:text-6xl sm:leading-[1.04] lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          An indigenous power-conversion{" "}
          <span className="text-gradient">technology platform</span>
        </h1>

        <p
          className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          A hardware and firmware-defined power conversion platform developed and validated in India,
          enabling rapid deployment across solar inverters, battery energy storage systems (BESS), EV
          charging infrastructure, microgrids, and next-generation grid technologies.
        </p>

        <p
          className="animate-rise mx-auto mt-5 font-display text-lg font-bold text-navy-800 sm:text-xl"
          style={{ animationDelay: "260ms" }}
        >
          Built for Indian grids. <span className="text-gradient">Designed for global scale.</span>
        </p>

        {/* Application chips with icons */}
        <div
          className="animate-rise mt-8 flex flex-wrap justify-center gap-2.5"
          style={{ animationDelay: "340ms" }}
        >
          {APPS.map((a) => (
            <span
              key={a.label}
              className="group inline-flex items-center gap-2 rounded-full border border-white/70 glass px-3.5 py-2 text-xs font-semibold text-navy-800 shadow-sm shadow-brand/5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/10"
            >
              <span className="text-brand transition-colors group-hover:text-accent">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={a.d} />
                </svg>
              </span>
              {a.label}
            </span>
          ))}
        </div>

        <div
          className="animate-rise mt-9 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "420ms" }}
        >
          <a
            href="/platform"
            className="btn-gradient rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl shadow-brand/30 transition-transform hover:scale-105"
          >
            Explore the platform
          </a>
          <a
            href="/capability"
            className="rounded-full border border-slate-300/80 glass px-7 py-3.5 text-sm font-semibold text-navy-800 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/10"
          >
            What we can build
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-300 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
