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
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand shadow-md shadow-brand/30 transition-transform duration-300 group-hover:scale-110">
                    <AppIcon d={APP_ICONS[i] ?? APP_ICONS[0]} />
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

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <Reveal delay={0}>
            <div className="card-gradient group h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/20 sm:rounded-3xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand shadow-lg shadow-brand/30 transition-all duration-300 group-hover:scale-110 group-hover:from-brand-dark group-hover:to-brand sm:h-14 sm:w-14 sm:rounded-2xl">
                <VisionIcon />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-800 transition-colors group-hover:text-brand-dark sm:mt-6 sm:text-2xl">
                Vision
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base">{VISION}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-gradient group h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/20 sm:rounded-3xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-dark shadow-lg shadow-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:from-brand-dark group-hover:to-accent sm:h-14 sm:w-14 sm:rounded-2xl">
                <MissionIcon />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-800 transition-colors group-hover:text-accent-dark sm:mt-6 sm:text-2xl">
                Mission
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base">{MISSION}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
