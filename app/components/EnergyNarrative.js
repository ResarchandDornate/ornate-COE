import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SOLUTIONS = [
  "Solar Inverters",
  "Battery Energy Storage Systems (BESS)",
  "EV Fast Charging Stations",
  "Hybrid Energy Systems",
  "Microgrid Controllers",
  "Smart Grid Applications",
  "Future Solid-State Transformers",
];

const CAPABILITIES = [
  "Renewable energy integration",
  "Energy storage management",
  "Grid synchronization and stability",
  "Intelligent power conversion",
  "Remote monitoring and diagnostics",
  "Advanced protection and safety functions",
  "Scalable deployment — residential to utility-scale",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function EnergyNarrative() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Intro */}
        <SectionHeading
          eyebrow="The Bigger Picture"
          title="Building the intelligence behind modern energy systems"
        />
        <Reveal className="mx-auto mt-8 max-w-3xl space-y-4 text-center sm:mt-10">
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            The future of energy is not defined by hardware alone. It is driven by intelligent control
            systems that connect renewable energy, battery storage, electric vehicles, and the power
            grid into one seamless ecosystem.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Our Indigenous Power Conversion Platform is designed to be the technology foundation behind
            next-generation energy infrastructure. Built through years of research and engineering, it
            provides a unified control architecture that enables the development of multiple energy
            products from a common technology core — rather than building isolated products one at a time.
          </p>
        </Reveal>

        {/* One platform, multiple solutions */}
        <Reveal className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-navy-800 sm:text-3xl">
              One platform. <span className="text-gradient">Multiple energy solutions.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Using a shared control and communication architecture, the platform can be adapted for:
            </p>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {SOLUTIONS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-navy-800 shadow-sm transition-colors hover:border-brand/40 hover:text-brand-dark sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {s}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-slate-500 sm:text-sm">
            This approach accelerates innovation, reduces development time, and creates a consistent
            technology foundation across products.
          </p>
        </Reveal>

        {/* Designed for real-world challenges */}
        <Reveal className="mt-14 sm:mt-20">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:rounded-3xl sm:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="font-display text-2xl font-bold text-navy-800 sm:text-3xl">
                Designed for real-world energy challenges
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Modern energy systems operate in complex environments where reliability, efficiency and
                grid stability are critical. The platform is engineered to support:
              </p>
            </div>
            <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3.5">
              {CAPABILITIES.map((c) => (
                <div key={c} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 text-accent-dark">
                    <CheckIcon />
                  </span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Transition + Built in India */}
        <div className="mt-6 grid gap-5 sm:gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:rounded-3xl sm:p-8">
              <h3 className="font-display text-lg font-bold text-navy-800 sm:text-xl">
                Enabling the energy transition
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                As the world moves toward renewable energy, electrified transportation and decentralized
                generation, intelligent power conversion becomes the critical link connecting generation,
                storage and consumption — and our platform provides the control intelligence to manage
                energy efficiently, reliably and securely.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="card-gradient h-full rounded-2xl border border-slate-200 p-7 shadow-sm sm:rounded-3xl sm:p-8">
              <h3 className="font-display text-lg font-bold text-navy-800 sm:text-xl">
                Built in India. Ready for the future.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Developed and validated in India, the platform reflects the requirements of modern energy
                infrastructure while supporting the nation's vision for technological self-reliance — a
                foundation for a new generation of energy products serving industries, utilities,
                businesses and communities across the world.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Closing statement */}
        <Reveal className="mt-12 text-center sm:mt-16">
          <p className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
            Powering the future of energy infrastructure.
          </p>
          <p className="mt-1 font-display text-2xl font-bold sm:text-3xl">
            <span className="text-gradient">One platform. Endless possibilities.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
