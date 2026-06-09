import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PATENTS, PATENTS_INTRO } from "../data";

function PatentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 6v6c0 4.5 3.4 7.5 8 9 4.6-1.5 8-4.5 8-9V6l-8-3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Patents() {
  return (
    <section className="bg-[#f3f7fc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Intellectual Property"
          title="Patents of Prof. B.K. Bhattacharyya"
          subtitle={PATENTS_INTRO}
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PATENTS.map((p, i) => (
            <Reveal key={p.number} delay={(i % 3) * 100} className="h-full">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl"
              >
                {/* Top accent line — brand gradient */}
                <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-dark via-brand to-accent" />

                {/* Header row — icon + patent number + status pill */}
                <div className="flex items-center justify-between gap-3 px-5 pt-6 sm:px-6">
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand-dark transition-colors group-hover:bg-brand/15">
                      <PatentIcon />
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wide text-slate-500">
                      {p.number}
                    </span>
                  </span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent ring-1 ring-accent/20">
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <h3 className="font-display text-base font-bold leading-snug text-navy-800 transition-colors group-hover:text-brand-dark sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-4 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {p.abstract}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {p.year}
                      </span>
                      <span className="text-xs font-medium text-slate-500">{p.assignee}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark transition-all group-hover:gap-2.5 group-hover:text-brand">
                      View patent
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
