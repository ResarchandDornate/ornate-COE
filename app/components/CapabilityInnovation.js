import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Vivid "4D" gradient tiles — bright fill + colour-matched glow.
const PILLAR_COLORS = [
  "from-amber-400 to-orange-500 shadow-orange-500/40",
  "from-emerald-400 to-teal-500 shadow-emerald-500/40",
  "from-blue-500 to-indigo-600 shadow-blue-500/40",
  "from-violet-500 to-fuchsia-500 shadow-violet-500/40",
];

const PILLARS = [
  {
    tag: "Firmware-first",
    line: "The intelligence is the product — not the metal around it.",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M10 10h4v4h-4zM9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" strokeLinecap="round" />
      </>
    ),
  },
  {
    tag: "Indigenous by design",
    line: "Designed, written and validated in India, end to end.",
    icon: (
      <>
        <path d="M12 3 5 6v6c0 4.5 3.4 7.5 7 9 3.6-1.5 7-4.5 7-9V6l-7-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    tag: "One core, infinite reach",
    line: "A single control architecture across every clean-energy machine.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7 7 5.5 5.5M18.5 18.5 17 17M17 7l1.5-1.5M5.5 18.5 7 17" strokeLinecap="round" />
      </>
    ),
  },
  {
    tag: "Hardened in the field",
    line: "Every deployment stress-tests and sharpens the platform.",
    icon: (
      <>
        <path d="M3 12h4l2-7 4 14 2-7h4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

// Generated concept graphic — an innovation "idea" bulb built from circuit traces.
function CircuitBulb() {
  return (
    <svg viewBox="0 0 240 240" className="w-full max-w-xs" role="img" aria-label="Innovation — a lightbulb formed from circuit traces">
      <defs>
        <linearGradient id="bulbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Soft glow */}
      <circle cx="120" cy="100" r="74" fill="#3b82f6" opacity="0.10" className="animate-pulse-glow" />

      {/* Radiating circuit traces with end nodes */}
      <g stroke="#3b82f6" strokeWidth="2" opacity="0.5" fill="none">
        <path d="M120 26 V6" />
        <path d="M48 100 H18 M192 100 H222" />
        <path d="M64 48 L44 28 M176 48 L196 28" />
      </g>
      <g fill="#3b82f6">
        {[[120, 6], [18, 100], [222, 100], [44, 28], [196, 28]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
        ))}
      </g>

      {/* Bulb glass */}
      <circle cx="120" cy="100" r="56" fill="#ffffff" stroke="url(#bulbGrad)" strokeWidth="4" />
      <circle cx="120" cy="100" r="56" fill="url(#bulbGrad)" opacity="0.08" />

      {/* Filament — a stylised circuit path */}
      <path
        d="M100 116 V98 q0 -14 10 -14 q10 0 10 14 q0 -14 10 -14 q10 0 10 14 V116"
        fill="none"
        stroke="url(#bulbGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="120" cy="92" r="4" fill="#3b82f6" />

      {/* Base */}
      <g stroke="#0f1d33" strokeWidth="3" strokeLinecap="round">
        <path d="M104 160 H136" />
        <path d="M107 170 H133" />
        <path d="M111 180 H129" />
      </g>
      <path d="M113 188 q7 7 14 0" fill="none" stroke="#0f1d33" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function CapabilityInnovation() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-28">
      <div className="absolute inset-0 grid-bg-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Innovation at the Core"
          title="We don't ship devices — we ship the intelligence inside them"
          subtitle="Innovation here is not a feature bolted on at the end. It is the whole product: the indigenous control intelligence that turns commodity hardware into mission-critical energy infrastructure."
        />

        {/* Lead — graphic + headline tagline */}
        <div className="mt-10 grid items-center gap-8 sm:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <Reveal className="flex justify-center">
            <CircuitBulb />
          </Reveal>

          <Reveal delay={120}>
            <p className="font-display text-2xl font-bold leading-snug text-navy-800 sm:text-3xl">
              From a single proven core, an{" "}
              <span className="text-gradient">entire family of clean-energy products</span> — each one
              smarter than the last.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Where 70–80% of the engineering and almost all of the defensible IP lives, India can now
              innovate on its own terms — faster, cheaper, and sovereign.
            </p>
          </Reveal>
        </div>

        {/* Innovation taglines */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.tag} delay={(i % 4) * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/10 sm:rounded-3xl">
                <span className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${PILLAR_COLORS[i % PILLAR_COLORS.length]}`}>
                  {/* glossy top highlight for the 4D look */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/45 to-transparent" />
                  {/* soft corner sheen */}
                  <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-md" />
                  <svg viewBox="0 0 24 24" className="relative h-6 w-6 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-800 sm:text-lg">{p.tag}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{p.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
