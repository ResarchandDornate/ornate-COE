import Reveal from "./Reveal";
import { VISION, MISSION, VM_APPLICATIONS } from "../data";

// Small line icon per application area, in order.
const APP_ICONS = [
  "M9 3h6l-1 7h4l-9 11 2-8H7l2-10Z", // solar inverter (bolt)
  "M4 8h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM21 11v2M7 11v2M10 11v2M13 11v2", // battery (BESS)
  "M7 3h7l-1 7h3l-8 11 2-8H8l-1-10ZM5 21h6", // EV charging (plug/bolt)
  "M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 5v6M12 11l-5 5M12 11l5 5", // microgrid (network)
  "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17l9 5 9-5", // SST (layers)
];

// Vivid "4D" gradient tile per application — bright fill + colour-matched glow.
const APP_TILES = [
  "from-amber-400 to-orange-500 shadow-orange-500/40",   // Solar
  "from-emerald-400 to-teal-500 shadow-emerald-500/40",  // BESS
  "from-blue-500 to-indigo-600 shadow-blue-500/40",      // EV DC
  "from-violet-500 to-fuchsia-500 shadow-violet-500/40", // Microgrids
  "from-sky-400 to-cyan-500 shadow-cyan-500/40",         // SST
];

function AppIcon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* The platform's scope — one control core, five applications */}
        <Reveal className="mb-8 sm:mb-10">
          <div className="rounded-2xl border border-brand/20 bg-linear-to-br from-white via-[#f7fafe] to-[#e8f1fb] p-6 shadow-sm sm:rounded-3xl sm:p-8">
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
                One indigenous power-conversion platform
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-navy-800 sm:text-2xl">
                One reusable control core — five applications
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                Our work is not a single product. The same indigenous control architecture powers an
                entire family of clean-energy power electronics.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {VM_APPLICATIONS.map((a, i) => (
                <div
                  key={a.name}
                  className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
                >
                  <span
                    className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                      APP_TILES[i] ?? APP_TILES[0]
                    }`}
                  >
                    {/* glossy top highlight for the 4D look */}
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/45 to-transparent" />
                    {/* soft corner sheen */}
                    <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-md" />
                    <span className="relative drop-shadow-sm">
                      <AppIcon d={APP_ICONS[i] ?? APP_ICONS[0]} />
                    </span>
                  </span>
                  <span className="mt-3 font-display text-[13px] font-bold leading-snug text-navy-800 sm:text-sm">
                    {a.name}
                  </span>
                  <span className="mt-1 text-[11px] leading-snug text-slate-500">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission */}
        <Reveal className="mb-7 text-center sm:mb-9">
          <span className="inline-block rounded-full bg-navy-800/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-700 ring-1 ring-navy-800/10">
            Our Purpose
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl">
            Vision &amp; Mission
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {/* Vision */}
          <Reveal delay={0}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-600/40 hover:shadow-2xl hover:shadow-navy-800/10 sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-navy-700 to-navy-600" />
              <span className="pointer-events-none absolute -right-3 -top-5 select-none font-display text-8xl font-bold text-slate-100">
                01
              </span>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-navy-700 to-navy-800 text-white shadow-lg shadow-navy-800/25 transition-transform duration-300 group-hover:scale-110">
                    <VisionIcon />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-600">
                    Vision
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-navy-800 sm:text-3xl">
                  Where we are headed
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-[15px]">{VISION}</p>
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={120}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-600/40 hover:shadow-2xl hover:shadow-navy-800/10 sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-navy-600 to-navy-700" />
              <span className="pointer-events-none absolute -right-3 -top-5 select-none font-display text-8xl font-bold text-slate-100">
                02
              </span>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-navy-600 to-navy-800 text-white shadow-lg shadow-navy-800/25 transition-transform duration-300 group-hover:scale-110">
                    <MissionIcon />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-600">
                    Mission
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-navy-800 sm:text-3xl">
                  How we get there
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-[15px]">{MISSION}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
