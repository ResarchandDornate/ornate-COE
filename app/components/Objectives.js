import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { OBJECTIVES } from "../data";

// Rotating vibrant accent palette for the number badges.
const BADGE_COLORS = [
  "bg-violet-100 text-violet-700",
  "bg-sky-100 text-sky-700",
  "bg-fuchsia-100 text-fuchsia-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
];

export default function Objectives() {
  return (
    <section id="objectives" className="bg-[#f3f7fc] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Objectives"
          title="Six strategic commitments"
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
                  <span className={`inline-flex h-8 items-center rounded-lg ${BADGE_COLORS[i % BADGE_COLORS.length]} px-2.5 font-display text-xs font-bold shadow-sm sm:h-9 sm:px-3 sm:text-sm`}>
                    {o.no}
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
