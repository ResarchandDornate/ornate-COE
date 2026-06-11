import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_CLASSES } from "../data";

// Rotating vivid "4D" gradient tiles for the number badges — bright fill + colour-matched glow.
const BADGE_COLORS = [
  "from-amber-400 to-orange-500 shadow-orange-500/40",
  "from-emerald-400 to-teal-500 shadow-emerald-500/40",
  "from-blue-500 to-indigo-600 shadow-blue-500/40",
  "from-violet-500 to-fuchsia-500 shadow-violet-500/40",
  "from-sky-400 to-cyan-500 shadow-cyan-500/40",
  "from-rose-400 to-pink-500 shadow-rose-500/40",
];

export default function PlatformClasses() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Scalability"
          title="Five product classes the platform supports"
          subtitle="Each is a distinct national-priority application. Each requires application-specific engineering on top of the shared control core."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PLATFORM_CLASSES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 100}>
              <div className="card-gradient group flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 sm:p-7">
                <span className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br ${BADGE_COLORS[i % BADGE_COLORS.length]} font-display text-xs font-bold text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/45 to-transparent" />
                  <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-md" />
                  <span className="relative drop-shadow-sm">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-800 sm:text-lg">
                  {c.name}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {c.why}
                </p>
                <div className="mt-auto pt-4">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-brand-dark">
                    National relevance
                  </span>
                  <p className="mt-1 text-[13px] font-medium leading-relaxed text-slate-700">
                    {c.relevance}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Closing note card — mirrors the PDF's "scoping with precision" candour */}
          <Reveal delay={200}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl p-7 text-white shadow-xl shadow-brand/20 sm:rounded-3xl sm:p-8">
              <div className="absolute inset-0 bg-linear-to-br from-brand-dark via-brand to-accent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
              <p className="relative font-display text-lg font-bold leading-snug sm:text-xl">
                The platform is built. The opportunity is national.
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-white/85">
                Today the 3 kW inverter is the one product developed to readiness.
                Extension to the other classes is architecturally supported — each
                with its own application engineering, validation and certification.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
