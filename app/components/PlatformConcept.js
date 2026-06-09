import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Radial "one core → many products" concept diagram.
const NODES = [
  { x: 460, y: 70, label: "Solar" },
  { x: 650, y: 208, label: "BESS" },
  { x: 578, y: 432, label: "EV DC" },
  { x: 342, y: 432, label: "Microgrid" },
  { x: 270, y: 208, label: "SST" },
];
const CX = 460;
const CY = 270;

// Application classes — icon + full description.
const APPS = [
  {
    name: "Solar inverters",
    icon: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19",
    desc: "From residential rooftops to utility-scale solar farms. The first product anchors the residential class, and the same control core scales up through commercial and large string inverters.",
  },
  {
    name: "Battery storage (BESS)",
    icon: "M4 8h13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM20 11v2",
    desc: "Bi-directional, inverter-class power conversion for battery systems — the proven control core extended with a battery interface and state-of-charge–aware logic for round-the-clock supply.",
  },
  {
    name: "EV DC fast charging",
    icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z",
    desc: "The grid-facing front end is, in effect, a bi-directional inverter — so grid-sync and current control are reused, with an isolated DC output stage added to charge the vehicle safely.",
  },
  {
    name: "Microgrids & hybrid",
    icon: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 7v4M12 11l-5 4M12 11l5 4",
    desc: "Solar inverters with grid-forming control and a battery interface — switching seamlessly between grid-tied and islanded (off-grid) operation for rural, defence and backup use.",
  },
  {
    name: "Solid-state transformers",
    icon: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5",
    desc: "A power-electronics replacement for the conventional transformer — sharing the bi-directional core and extended with high-frequency isolation for next-generation grid modernisation.",
  },
];

export default function PlatformConcept() {
  return (
    <section className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Big Idea"
          title="One control core. Many products."
          subtitle="We are not building one device. We are building the reusable, software-defined control core — and re-targeting it across an entire family of clean-energy power electronics."
        />

        {/* Concept diagram — scales with the viewBox */}
        <Reveal className="mt-10 sm:mt-14">
          <svg viewBox="0 0 920 540" className="mx-auto w-full max-w-3xl" role="img" aria-label="One indigenous control core powering five product classes">
            <defs>
              <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c2410c" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Connecting lines */}
            {NODES.map((n) => (
              <line key={`l-${n.label}`} x1={CX} y1={CY} x2={n.x} y2={n.y} stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 6" opacity="0.6" />
            ))}

            {/* Outer application nodes */}
            {NODES.map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="54" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
                <circle cx={n.x} cy={n.y} r="54" fill="#ea580c" opacity="0.06" />
                <text x={n.x} y={n.y + 5} textAnchor="middle" className="font-display" fontSize="17" fontWeight="700" fill="#0f1d33">
                  {n.label}
                </text>
              </g>
            ))}

            {/* Central core */}
            <circle cx={CX} cy={CY} r="86" fill="url(#coreGrad)" />
            <circle cx={CX} cy={CY} r="86" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <text x={CX} y={CY - 8} textAnchor="middle" className="font-display" fontSize="20" fontWeight="800" fill="#ffffff">
              CONTROL
            </text>
            <text x={CX} y={CY + 16} textAnchor="middle" className="font-display" fontSize="20" fontWeight="800" fill="#ffffff">
              CORE
            </text>
            <text x={CX} y={CY + 40} textAnchor="middle" fontSize="11" letterSpacing="1.5" fill="#e6f2ff">
              FIRMWARE-DEFINED
            </text>
          </svg>
        </Reveal>

        {/* Application cards — icon + full description */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {APPS.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand shadow-md shadow-brand/30 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={a.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-800 sm:mt-5 sm:text-lg">
                  {a.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
