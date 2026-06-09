import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { INDIAN_CONDITIONS } from "../data";

// One small line icon per condition, in order.
const ICONS = [
  "M4 13a8 8 0 0 1 16 0M2 13h20M12 13v5m-3 0h6", // weak grid (gauge)
  "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19", // heat (sun)
  "M3 20h18M6 20V9l6-4 6 4v11M10 20v-5h4v5", // rural feeder (building/feeder)
  "M3 12h4l2-7 4 14 2-7h6", // power quality (waveform)
  "M12 3 5 6v6c0 4.5 3 7 7 9 4-2 7-4.5 7-9V6l-7-3ZM9 12l2 2 4-4", // compliance (shield check)
  "M14.7 6.3a4 4 0 0 0-5.4 5.4l-5 5 2 2 5-5a4 4 0 0 0 5.4-5.4L13 11l-1-1 2.7-3.7Z", // serviceability (wrench)
];

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export default function PlatformConditions() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Built for India"
          title="Designed for Indian deployment realities"
          subtitle={INDIAN_CONDITIONS.intro}
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {INDIAN_CONDITIONS.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon d={ICONS[i] ?? ICONS[0]} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-800 sm:mt-5 sm:text-lg">
                  {it.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
