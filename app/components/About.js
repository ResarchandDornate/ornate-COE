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
    <section id="about" className="relative bg-slate-50 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Who We Are"
          title="A centre built for indigenous power electronics"
          subtitle="The Centre of Excellence researches, designs, prototypes and commercializes advanced power electronics and clean energy systems — all engineered in-house in India."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          <Reveal delay={0}>
            <div className="card-gradient group h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl sm:p-8">
              <div className="icon-gradient flex h-12 w-12 items-center justify-center rounded-xl shadow-lg shadow-brand/30 transition-transform group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                <VisionIcon />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-800 sm:mt-6 sm:text-2xl">
                Vision
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base">{VISION}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-gradient group h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 sm:rounded-3xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-accent to-brand-dark text-white shadow-lg shadow-accent/30 transition-transform group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                <MissionIcon />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-800 sm:mt-6 sm:text-2xl">
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
