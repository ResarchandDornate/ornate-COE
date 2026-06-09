import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { UTILITY_SCALE } from "../data";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="currentColor" strokeWidth="2.4">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PlatformScale() {
  return (
    <section className="bg-slate-50 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Road to Megawatts"
          title="Scaling up to a 10 MW platform"
          subtitle={UTILITY_SCALE.intro}
        />

        {/* Topology comparison diagram */}
        <Reveal className="mt-10 sm:mt-14">
          <figure className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:rounded-3xl sm:p-4">
              <Image
                src={UTILITY_SCALE.img}
                alt={UTILITY_SCALE.imgCaption}
                width={1304}
                height={828}
                className="w-full rounded-lg"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-500">
              {UTILITY_SCALE.imgCaption}
            </figcaption>
          </figure>
        </Reveal>

        {/* Plain-language explanation of each topology */}
        <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {UTILITY_SCALE.topologies.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
                  {t.sub}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-800 sm:text-2xl">
                  {t.name}
                </h3>
                <ul className="mt-5 space-y-3">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                      <span className="mt-0.5 text-accent">
                        <CheckIcon />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Honest engineering note */}
        <Reveal className="mt-6 sm:mt-8">
          <div className="flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-5 sm:p-6">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-dark">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                <path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm">{UTILITY_SCALE.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
