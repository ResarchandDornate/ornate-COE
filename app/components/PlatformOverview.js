import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_OVERVIEW } from "../data";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0" stroke="currentColor" strokeWidth="2.6">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// One distinct line icon per architectural element, in display order.
const ELEMENT_ICONS = [
  // Grid synchronisation
  "M21 12a9 9 0 0 1-9 9 9 9 0 0 1-7.5-4M3 12a9 9 0 0 1 9-9 9 9 0 0 1 7.5 4M20 4v4h-4M4 20v-4h4",
  // MPPT logic (sun)
  "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5 6.5 6.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19",
  // DC-link control (capacitor / energy)
  "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  // Inner current loop (waveform)
  "M2 12h3l3-7 4 14 3-7h7",
  // Outer P/Q control (sliders)
  "M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4",
  // PWM logic (square wave)
  "M2 16h4V8h4v8h4V8h4v8h4",
  // Anti-islanding (shield)
  "M12 3 5 6v6c0 4.5 3 7 7 9 4-2 7-4.5 7-9V6l-7-3Z",
  // Protection (shield check)
  "M12 3 5 6v6c0 4.5 3 7 7 9 4-2 7-4.5 7-9V6l-7-3Z M9 12l2 2 4-4",
  // Communications (signal)
  "M5 12.5a9 9 0 0 1 14 0M8 15.5a5 5 0 0 1 8 0M12 19h.01",
  // Application layer (stack)
  "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17l9 5 9-5",
];

function ElementIcon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export default function PlatformOverview() {
  return (
    <section id="architecture" className="bg-slate-50 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Platform"
          title="An indigenous power conversion platform"
          subtitle={PLATFORM_OVERVIEW.intro}
        />

        {/* Platform attributes — a clean pill row */}
        <Reveal className="mt-9 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3">
          {PLATFORM_OVERVIEW.points.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3.5 py-2 text-xs font-medium text-navy-800 shadow-sm sm:text-[13px]"
            >
              <span className="text-brand-dark">
                <CheckIcon />
              </span>
              {p}
            </span>
          ))}
        </Reveal>

        {/* The control stack — the IP, element by element */}
        <Reveal className="mt-12 flex items-center gap-3 sm:mt-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-dark">
            The control stack
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-brand/30 to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            {PLATFORM_OVERVIEW.elements.length} layers
          </span>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {PLATFORM_OVERVIEW.elements.map(([term, desc], i) => (
            <Reveal key={term} delay={(i % 3) * 80} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:p-6">
                {/* Top accent line */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-brand-dark via-brand to-accent transition-transform duration-300 group-hover:scale-x-100" />
                {/* Faint watermark index */}
                <span className="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-bold text-slate-100 transition-colors group-hover:text-brand/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-brand/15 to-accent/10 text-brand-dark transition-colors group-hover:from-brand/25 group-hover:to-accent/15">
                    <ElementIcon d={ELEMENT_ICONS[i] ?? ELEMENT_ICONS[0]} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-800 sm:text-lg">
                    {term}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                    {desc}
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
