import Reveal from "./Reveal";

const APPLICATIONS = [
  {
    name: "Solar Inverters",
    desc: "Residential, commercial, industrial and utility-scale solar — with advanced power conversion and grid integration.",
  },
  {
    name: "Battery Energy Storage (BESS)",
    desc: "Efficient energy storage, peak-load management, grid support and renewable integration.",
  },
  {
    name: "EV Charging Infrastructure",
    desc: "The technology foundation for scalable, intelligent electric-vehicle charging.",
  },
  {
    name: "Microgrids & Hybrid Systems",
    desc: "Resilient systems integrating solar, batteries, generators and the grid for uninterrupted supply.",
  },
  {
    name: "Future Grid Technologies",
    desc: "A pathway toward solid-state transformers and smart-grid infrastructure.",
  },
];

const BENEFITS = [
  "Faster product development through a shared technology foundation",
  "Reduced engineering duplication across product categories",
  "Scalable architecture for future energy applications",
  "Designed and validated for Indian grid and environmental conditions",
  "Supports renewable, storage and electric-mobility initiatives",
  "Strengthens technology self-reliance and local innovation",
];

const PRIORITIES = [
  "Renewable energy expansion",
  "Battery energy storage",
  "EV charging infrastructure",
  "Grid modernization",
  "Aatmanirbhar Bharat",
];

function Kicker({ children }) {
  return (
    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
      {children}
    </span>
  );
}

export default function EnergyPlatform() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* Intro */}
        <Reveal>
          <Kicker>Indigenous Power Conversion Platform</Kicker>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-800 sm:text-4xl">
            Enabling the next generation of energy infrastructure
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              As the energy industry transitions toward renewable generation, storage, electric mobility
              and smart grids, the demand for intelligent and reliable power-conversion technology keeps
              growing.
            </p>
            <p>
              Our platform provides a scalable foundation for developing a wide range of energy products
              from a common control architecture — enabling faster development, improved reliability and
              greater technology independence across multiple energy sectors.
            </p>
          </div>
        </Reveal>

        {/* What we have built */}
        <Reveal className="mt-12 sm:mt-16">
          <div className="border-l-2 border-brand/40 pl-6">
            <Kicker>What we have built</Kicker>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy-800 sm:text-lg">
              Over three years, we have developed and validated an indigenous power-conversion platform
              for Indian operating conditions — already proven through a field-tested{" "}
              <strong className="font-bold">3&nbsp;kW grid-tied solar inverter</strong>, and
              architecturally extensible to many more applications.
            </p>
          </div>
        </Reveal>

        {/* Applications — minimal editorial list */}
        <Reveal className="mt-16 sm:mt-20">
          <Kicker>Applications we enable</Kicker>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {APPLICATIONS.map((a, i) => (
              <div key={a.name} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 py-6 sm:grid-cols-[3rem_18rem_1fr] sm:gap-x-8 sm:py-7">
                <span className="font-mono text-sm font-semibold text-brand/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold text-navy-800 sm:text-xl">{a.name}</h3>
                <p className="col-span-2 text-sm leading-relaxed text-slate-600 sm:col-span-1 sm:text-[15px]">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Why it matters */}
        <Reveal className="mt-16 sm:mt-20">
          <div className="grid gap-6 sm:grid-cols-[18rem_1fr] sm:gap-10">
            <div>
              <Kicker>Why it matters</Kicker>
              <h3 className="mt-3 font-display text-2xl font-bold text-navy-800">
                Hardware is made here. The intelligence often isn&apos;t.
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Today&apos;s energy systems are increasingly governed by software and intelligent power
              electronics. Hardware manufacturing is growing domestically — but the critical control
              technologies that govern energy conversion, storage and distribution are often imported.
              Our platform closes that gap with indigenous technology deployable across many applications.
            </p>
          </div>
        </Reveal>

        {/* Business benefits */}
        <Reveal className="mt-16 sm:mt-20">
          <Kicker>Business benefits</Kicker>
          <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 border-t border-slate-200 pt-4 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Supporting India's energy future */}
        <Reveal className="mt-16 sm:mt-20">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:rounded-3xl sm:p-9">
            <Kicker>Supporting India&apos;s energy future</Kicker>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The platform aligns with national priorities — contributing to a more resilient, efficient
              and future-ready energy ecosystem through indigenous control technology.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {PRIORITIES.map((p) => (
                <span key={p} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-dark ring-1 ring-slate-200">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Closing statement */}
        <Reveal className="mt-20 text-center sm:mt-28">
          <p className="font-display text-2xl font-bold leading-tight text-navy-800 sm:text-4xl">
            One platform. Multiple energy solutions.
          </p>
          <p className="mt-1 font-display text-2xl font-bold leading-tight sm:text-4xl">
            <span className="text-gradient">Built for India&apos;s energy future.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
