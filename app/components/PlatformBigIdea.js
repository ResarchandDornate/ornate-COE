import Reveal from "./Reveal";

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

        {/* Three benefit stats */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
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
