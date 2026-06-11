import Reveal from "./Reveal";

const PRODUCTS = [
  { name: "Solar inverters", desc: "All scales — residential to utility", icon: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" },
  { name: "EV DC charging", desc: "Bi-directional grid-tied front-end", icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z" },
  { name: "BESS", desc: "Power conversion for storage", icon: "M4 8h13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM20 11v2" },
  { name: "Microgrids", desc: "Grid-forming & hybrid inverters", icon: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 7v4M12 11l-5 4M12 11l5 4" },
  { name: "Solid-state transformers", desc: "Power-electronics grid interface", icon: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5" },
];

// Vivid "4D" gradient tile per product — bright fill + colour-matched glow.
const PRODUCT_COLORS = [
  "from-amber-400 to-orange-500 shadow-orange-500/40",   // Solar
  "from-blue-500 to-indigo-600 shadow-blue-500/40",      // EV DC charging
  "from-emerald-400 to-teal-500 shadow-emerald-500/40",  // BESS
  "from-sky-400 to-cyan-500 shadow-cyan-500/40",         // Microgrids
  "from-violet-500 to-fuchsia-500 shadow-violet-500/40", // Solid-state transformers
];

const STATS = [
  { value: "Differentiation", body: "hardware provides the foundation; firmware delivers 70–80% of the converter's intelligence and value." },
  { value: "1 stack", body: "re-targets across five product classes instead of five separate builds." },
  { value: "Compounding", body: "with every product created, the platform evolves — becoming stronger, smarter, and more capable." },
];

export default function PlatformBigIdea() {
  return (
    <section className="bg-[#f3f7fc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* The big idea */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            <span className="block text-navy-800">The product is the prototype.</span>
            <span className="block text-slate-400">The platform is the asset.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The key differentiation in a power converter resides in its firmware — grid synchronisation,
            control algorithms, and protection logic — not in the underlying commodity hardware. We
            developed this capability as a unified, reusable control platform that can be deployed across
            multiple products, allowing us to retarget and scale rapidly without rebuilding the control
            stack for each new design.
          </p>
        </Reveal>

        {/* Product portfolio */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 5) * 70} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10">
                <span className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br text-white shadow-lg ring-1 ring-white/40 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${PRODUCT_COLORS[i]}`}>
                  {/* glossy top highlight for the 4D look */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/45 to-transparent" />
                  {/* soft corner sheen */}
                  <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/30 blur-md" />
                  <svg viewBox="0 0 24 24" className="relative h-5 w-5 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
                </span>
                <h4 className="mt-3 font-display text-sm font-bold text-navy-800">{p.name}</h4>
                <p className="mt-1 text-[12px] leading-snug text-slate-500">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Three benefit stats */}
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={(i % 3) * 90} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 sm:rounded-3xl sm:p-7">
                <div className="text-gradient font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
