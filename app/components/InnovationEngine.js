import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { INNOVATION_ENGINE } from "../data";

const TILE_COLORS = [
  "bg-violet-100 text-violet-600",
  "bg-sky-100 text-sky-600",
  "bg-fuchsia-100 text-fuchsia-600",
  "bg-emerald-100 text-emerald-600",
  "bg-amber-100 text-amber-600",
  "bg-rose-100 text-rose-600",
];

// The research-driven "innovation engine" narrative — a platform built to create
// advanced solutions faster. Renders any subset of its four blocks via `show`,
// so Home, Platform and Achievements can each surface the parts that fit.
//   accel      — why development is accelerated (the reuse advantage)
//   challenges — the hard problems solved, and how
//   frameworks — the reusable building blocks already built
//   future     — what the foundation lets us build next
export default function InnovationEngine({
  show = ["accel", "challenges", "frameworks", "future"],
  heading = true,
  className = "bg-white py-16 sm:py-24",
}) {
  const { eyebrow, title, subtitle, accelerators, challenges, frameworks, future } =
    INNOVATION_ENGINE;
  const has = (key) => show.includes(key);

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {heading && (
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        )}

        {/* Why we build faster — the reuse advantage */}
        {has("accel") && (
          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
            {accelerators.map((a, i) => (
              <Reveal key={a.label} delay={(i % 3) * 90} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-[#f3f7fc] p-6 shadow-sm transition-colors hover:border-fuchsia-300 hover:bg-fuchsia-50 sm:rounded-3xl sm:p-7">
                  <div className="text-gradient font-display text-2xl font-bold sm:text-3xl">
                    {a.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-dark">
                    {a.label}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* The challenges we solved — and how */}
        {has("challenges") && (
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-navy-800 sm:text-xl">
                The challenges we solved
              </h3>
              <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                Building a safe, efficient, grid-compliant converter is hard. These
                are some of the problems our R&D solved — and now ships as reusable IP.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {challenges.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 90} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:shadow-lg hover:shadow-fuchsia-500/10 sm:rounded-3xl">
                    <h4 className="font-display text-base font-bold text-navy-800">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                      <span className="font-semibold text-slate-700">Challenge — </span>
                      {c.problem}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                      <span className="font-semibold text-accent">Solved — </span>
                      {c.solved}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* The frameworks we built — the reusable core */}
        {has("frameworks") && (
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-navy-800 sm:text-xl">
                The core technologies we built
              </h3>
              <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                Reusable, validated building blocks — the firmware-defined foundation
                every product on the platform draws from.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {frameworks.map((f, i) => (
                <Reveal key={f.name} delay={(i % 3) * 80} className="h-full">
                  <div className="group flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-[#f3f7fc] p-5 shadow-sm transition-all hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:shadow-lg hover:shadow-fuchsia-500/10">
                    <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${TILE_COLORS[i % TILE_COLORS.length]} shadow-sm transition-transform group-hover:scale-110`}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16M4 12h16M4 17h10" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy-800">{f.name}</h4>
                      <p className="mt-1 text-[12px] leading-snug text-slate-500">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* What we can build next — future solutions on top */}
        {has("future") && (
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-navy-800 sm:text-xl">
                What we can build next
              </h3>
              <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                The same foundation extends into the next generation of power-electronics
                products — each reusing the proven core, each needing far less new engineering.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {future.map((f, i) => (
                <Reveal key={f.name} delay={(i % 3) * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-dashed border-brand/30 bg-white p-5">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                      Roadmap
                    </span>
                    <h4 className="mt-2 font-display text-sm font-bold text-navy-800">{f.name}</h4>
                    <p className="mt-1 text-[12px] leading-snug text-slate-500">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
