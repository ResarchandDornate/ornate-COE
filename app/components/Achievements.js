import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ACHIEVEMENTS } from "../data";

const TONE = {
  done: "bg-accent text-white",
  progress: "bg-brand text-navy",
  planned: "bg-slate-300 text-slate-700",
};

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Branded fallback shown until a real photo is supplied.
function Placeholder({ label }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#eef4fb] to-[#e1ecfb]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,88,12,0.10),transparent_55%)]" />
      <div className="absolute inset-0 grid-bg-light opacity-70" />
      <div className="relative flex flex-col items-center px-4 text-center">
        <span className="text-brand">
          <BadgeIcon />
        </span>
        <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-dark">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="bg-[#f3f7fc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Milestones"
          title="What we have built so far"
          subtitle="Indigenous power-electronics engineering — from a field-validated first product to government recognition, each milestone built end to end in-house."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl">
                <div className="relative aspect-4/3 overflow-hidden">
                  {a.placeholder ? (
                    <Placeholder label={a.placeholderLabel} />
                  ) : (
                    <Image
                      src={a.img}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <span
                    className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm ${TONE[a.tone]}`}
                  >
                    {a.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-base font-bold text-navy-800 sm:text-lg">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {a.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
