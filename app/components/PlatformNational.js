import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_NATIONAL } from "../data";

function Dot({ tone }) {
  return <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone}`} />;
}

export default function PlatformNational() {
  const n = PLATFORM_NATIONAL;
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why It Matters"
          title="India's energy transition is electronics-led"
          subtitle={n.intro}
        />

        {/* The four shifts */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {n.shifts.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 120} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/10 sm:rounded-3xl sm:p-7">
                <h3 className="font-display text-base font-bold text-navy-800 sm:text-lg">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The strategic gap */}
        <Reveal className="mt-12 sm:mt-16">
          <p className="mx-auto max-w-3xl text-center font-display text-lg font-bold leading-snug text-navy-800 sm:text-2xl">
            {n.gapLine}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {/* What India does today */}
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-blue-200/70 bg-blue-50/60 p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                {n.doesNow.title}
              </span>
              <ul className="mt-5 space-y-3">
                {n.doesNow.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <Dot tone="bg-blue-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* What is still imported */}
          <Reveal delay={120} className="h-full">
            <div className="h-full rounded-2xl border border-slate-300/60 bg-slate-50 p-6 shadow-sm sm:rounded-3xl sm:p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                {n.imported.title}
              </span>
              <ul className="mt-5 space-y-3">
                {n.imported.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <Dot tone="bg-slate-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Closing statement */}
        <Reveal className="mt-6 sm:mt-8">
          <div className="rounded-2xl border border-brand/20 bg-linear-to-br from-white via-[#f7fafe] to-[#e8f1fb] p-6 text-center shadow-sm sm:rounded-3xl sm:p-8">
            <p className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-navy-800 sm:text-base">
              {n.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
