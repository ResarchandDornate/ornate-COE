import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { INVERTER_BUILD } from "../data";

function OwnerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" strokeLinecap="round" />
    </svg>
  );
}

export default function PlatformEngineering() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Engineered In-House"
          title="What went into the 3 kW inverter"
          subtitle={INVERTER_BUILD.intro}
        />

        {/* Milestone banner */}
        <Reveal className="mt-8 sm:mt-10">
          <div className="rounded-2xl border border-brand/20 bg-linear-to-br from-white via-[#f7fafe] to-[#e8f1fb] p-6 shadow-sm sm:rounded-3xl sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand shadow-md shadow-brand/30">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
                  Milestone
                </span>
                <p className="mt-1 font-display text-lg font-bold leading-snug text-navy-800 sm:text-xl">
                  {INVERTER_BUILD.milestone}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Performance metrics */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
          {INVERTER_BUILD.metrics.map((m, i) => (
            <Reveal key={m.label} delay={(i % 4) * 80}>
              <div className="h-full rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 text-center shadow-sm">
                <div className="text-gradient font-display text-2xl font-bold sm:text-3xl">{m.value}</div>
                <div className="mt-1 text-xs font-semibold text-navy-800 sm:text-sm">{m.label}</div>
                <div className="mt-0.5 text-[11px] leading-snug text-slate-500">{m.note}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Subsystem grid */}
        <Reveal className="mt-12 flex items-center gap-3 sm:mt-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-dark">
            Designed &amp; built in-house
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-brand/30 to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            except chips &amp; magnetics
          </span>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {INVERTER_BUILD.build.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:p-6">
                <h3 className="font-display text-base font-bold text-navy-800 transition-colors group-hover:text-brand-dark sm:text-lg">
                  {b.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{b.body}</p>
                {b.owner && (
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-brand-dark">
                    <OwnerIcon />
                    {b.owner}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
