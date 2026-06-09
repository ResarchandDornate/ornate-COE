import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INPUTS = [
  { name: "Solar PV", kind: "DC in" },
  { name: "Battery", kind: "DC in / out" },
  { name: "The grid", kind: "AC in / out" },
];
const OUTPUTS = [
  { name: "Home & grid", kind: "AC" },
  { name: "EV battery", kind: "DC" },
  { name: "Motor / pump", kind: "AC" },
];

function MiniCard({ name, kind }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
      <p className="font-display text-sm font-bold text-navy-800">{name}</p>
      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-dark">{kind}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-brand">
      {/* horizontal on desktop, down on mobile */}
      <svg viewBox="0 0 24 24" className="hidden h-7 w-7 lg:block" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 24 24" className="h-7 w-7 lg:hidden" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function EnergyConversion() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Energy Conversion"
          title="What power conversion actually does"
          subtitle="Solar panels, batteries and the grid all speak different electrical 'languages' — DC and AC, at different voltages. Our control core is the smart translator in the middle, converting and routing energy cleanly in every direction."
        />

        <Reveal className="mt-10 sm:mt-14">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr]">
            {/* Inputs */}
            <div className="space-y-3">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Sources
              </p>
              {INPUTS.map((i) => (
                <MiniCard key={i.name} {...i} />
              ))}
            </div>

            <Arrow />

            {/* Converter core */}
            <div className="relative overflow-hidden rounded-2xl p-6 text-center text-white shadow-xl shadow-brand/20 sm:rounded-3xl sm:p-8">
              <div className="absolute inset-0 bg-linear-to-br from-brand-dark via-brand to-accent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
              <div className="relative">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Indigenous control core
                </span>
                <p className="mt-2 font-display text-xl font-bold sm:text-2xl">DC ⇄ AC power conversion</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Bi-directional, software-controlled — synchronises with the grid, tracks solar power,
                  manages the battery and keeps the output clean and safe.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {["Grid sync", "MPPT", "Protection", "Bi-directional"].map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-white/25">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Arrow />

            {/* Outputs */}
            <div className="space-y-3">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Delivered to
              </p>
              {OUTPUTS.map((o) => (
                <MiniCard key={o.name} {...o} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
