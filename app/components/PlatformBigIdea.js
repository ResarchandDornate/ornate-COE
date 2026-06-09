import Reveal from "./Reveal";

const PRODUCTS = [
  { name: "Solar inverters", desc: "All scales — residential to utility", icon: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" },
  { name: "EV DC charging", desc: "Bi-directional grid-tied front-end", icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z" },
  { name: "BESS", desc: "Power conversion for storage", icon: "M4 8h13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM20 11v2" },
  { name: "Microgrids", desc: "Grid-forming & hybrid inverters", icon: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 7v4M12 11l-5 4M12 11l5 4" },
  { name: "Solid-state transformers", desc: "Power-electronics grid interface", icon: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5" },
];

// Vibrant per-product icon colours — keeps the white grid lively.
const PRODUCT_COLORS = [
  "bg-amber-100 text-amber-600",     // Solar
  "bg-violet-100 text-violet-600",   // EV
  "bg-emerald-100 text-emerald-600", // BESS
  "bg-sky-100 text-sky-600",         // Microgrids
  "bg-fuchsia-100 text-fuchsia-600", // Solid-state
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
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            The Platform · The Big Idea
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
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

        {/* The control stack — gradient card */}
        <Reveal className="mt-10 sm:mt-12">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl p-7 text-center text-white shadow-xl shadow-brand/20 sm:rounded-3xl sm:p-9">
            <div className="absolute inset-0 bg-linear-to-br from-brand-dark via-brand to-accent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
            <div className="relative">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                The Interface · One Control Stack
              </span>
              <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">
                Indigenous Power Conversion Platform
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-white/85 sm:text-sm">
                Grid Synchronization · MPPT · Dual Cascade Control loops · PWM · Protection ·
                Communications · Application layer
              </p>
            </div>
          </div>

          {/* Connector */}
          <div className="mt-6 flex flex-col items-center">
            <span className="h-6 w-px bg-slate-300" />
            <span className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Powers a portfolio of products
            </span>
          </div>
        </Reveal>

        {/* Product portfolio */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 5) * 70} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:shadow-lg hover:shadow-fuchsia-500/10">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${PRODUCT_COLORS[i]} shadow-sm transition-transform group-hover:scale-110`}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-fuchsia-300 hover:bg-fuchsia-50 sm:rounded-3xl sm:p-7">
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
