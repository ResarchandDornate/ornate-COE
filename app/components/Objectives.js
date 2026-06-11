import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { OBJECTIVES } from "../data";

// Rotating vivid "4D" gradient tiles for the number badges — bright fill + colour-matched glow.
const BADGE_COLORS = [
  "from-amber-400 to-orange-500 shadow-orange-500/40",
  "from-emerald-400 to-teal-500 shadow-emerald-500/40",
  "from-blue-500 to-indigo-600 shadow-blue-500/40",
  "from-violet-500 to-fuchsia-500 shadow-violet-500/40",
  "from-sky-400 to-cyan-500 shadow-cyan-500/40",
  "from-rose-400 to-pink-500 shadow-rose-500/40",
];

export default function Objectives() {
  return (
    <section id="objectives" className="bg-[#f3f7fc] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          title="Our strategic commitments"
          subtitle="Everything we build is anchored to these objectives — from sovereign R&D capability to world-class quality standards."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.no} delay={(i % 3) * 100}>
              <div className="card-gradient group relative h-full overflow-hidden rounded-2xl border border-slate-200 p-5 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 sm:p-7">
                <span className="absolute -right-3 -top-4 font-display text-6xl font-bold text-slate-100 transition-colors group-hover:text-brand/15 sm:text-7xl">
                  {o.no}
                </span>
                <div className="relative">
                  <span className={`relative inline-flex h-8 items-center overflow-hidden rounded-lg bg-linear-to-br ${BADGE_COLORS[i % BADGE_COLORS.length]} px-2.5 font-display text-xs font-bold text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-9 sm:px-3 sm:text-sm`}>
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/45 to-transparent" />
                    <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-md" />
                    <span className="relative drop-shadow-sm">{o.no}</span>
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-navy-800 sm:mt-4 sm:text-lg">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {o.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
