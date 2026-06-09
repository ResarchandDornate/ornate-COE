import Reveal from "./Reveal";

const BUILD_FOR = [
  { name: "Solar Inverters", icon: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" },
  { name: "Battery Energy Storage (BESS)", icon: "M4 8h13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM20 11v2" },
  { name: "EV Fast Charging Infrastructure", icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z" },
  { name: "Hybrid & Microgrid Solutions", icon: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 7v4M12 11l-5 4M12 11l5 4" },
  { name: "Smart Grid Applications", icon: "M7 7h10v10H7zM10 10h4v4h-4zM9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" },
  { name: "Solid-State Transformers", icon: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5" },
];

export default function EnergyVision() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-28">
      <div className="absolute inset-0 bg-linear-to-br from-[#0d1a2e] via-[#102a45] to-[#c2410c]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,88,12,0.30),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(244,63,94,0.22),transparent_55%)]" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Vision */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Our Vision
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
            Creating India&apos;s <span className="text-gradient-light">Energy Control Layer</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-lg">
            Developing the embedded intelligence that powers renewable generation, energy storage,
            electric mobility, and grid modernization.
          </p>
        </Reveal>

        {/* The intelligence behind energy */}
        <Reveal className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:rounded-3xl sm:p-9">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              The Intelligence Behind Energy
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              Our indigenous control architecture combines advanced firmware, grid synchronization,
              power management, protection systems, and communication protocols into a single unified
              platform — designed for the full breadth of modern energy applications.
            </p>
          </div>
        </Reveal>

        {/* We build technology for */}
        <Reveal className="mt-12 sm:mt-16">
          <p className="text-center font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            We build technology for
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {BUILD_FOR.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 80}>
                <div className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-accent/40 hover:bg-white/10 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-accent ring-1 ring-white/15">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d={b.icon} />
                    </svg>
                  </span>
                  <span className="font-display text-[13px] font-bold leading-snug text-white sm:text-sm">
                    {b.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
