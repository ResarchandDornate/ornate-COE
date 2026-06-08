import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_CLASSES } from "../data";

export default function PlatformClasses() {
  return (
    <section className="bg-slate-50 py-16 sm:py-28">
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
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-dark to-accent font-display text-xs font-bold text-white shadow-md shadow-brand/30">
                  {String(i + 1).padStart(2, "0")}
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
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-xl shadow-navy/20 sm:p-8">
              <div className="absolute inset-0 bg-linear-to-br from-[#0c0720] via-[#1a0f38] to-[#2c1860]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.3),transparent_55%)]" />
              <p className="relative font-display text-lg font-bold leading-snug sm:text-xl">
                The platform is built. The opportunity is national.
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
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
