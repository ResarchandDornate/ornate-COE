import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { VISION, MISSION } from "../data";

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
    <section id="about" className="relative bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="A centre built for indigenous power electronics"
          subtitle="The Centre of Excellence researches, designs, prototypes and commercializes advanced power electronics and clean energy systems — all engineered in-house in India."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0}>
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand-dark transition-colors group-hover:bg-brand group-hover:text-navy">
                <VisionIcon />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-800">
                Vision
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{VISION}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-dark transition-colors group-hover:bg-accent group-hover:text-white">
                <MissionIcon />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-800">
                Mission
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{MISSION}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
