import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { NATIONAL_PROGRAMS } from "../data";

export default function PlatformPrograms() {
  return (
    <section className="bg-[#f3f7fc] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="National Alignment"
          title="Aligned with the country's major missions"
          subtitle={NATIONAL_PROGRAMS.intro}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2">
          {NATIONAL_PROGRAMS.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 90}>
              <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" stroke="currentColor" strokeWidth="2">
                    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-navy-800 sm:text-base">{p.name}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
