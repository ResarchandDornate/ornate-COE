import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { OBJECTIVES } from "../data";

export default function Objectives() {
  return (
    <section id="objectives" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Objectives"
          title="Six strategic commitments"
          subtitle="Everything we build is anchored to these objectives — from sovereign R&D capability to world-class quality standards."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.no} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5">
                <span className="absolute -right-3 -top-4 font-display text-7xl font-bold text-slate-100 transition-colors group-hover:text-brand/15">
                  {o.no}
                </span>
                <div className="relative">
                  <span className="inline-flex h-9 items-center rounded-lg bg-gradient-to-r from-brand to-accent px-3 font-display text-sm font-bold text-navy">
                    {o.no}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-800">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
