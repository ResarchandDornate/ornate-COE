import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Built here, owned here",
    body: "The decision-making firmware the grid actually depends on is designed and validated in India — not licensed from abroad.",
    icon: (
      <>
        <path d="M12 3 5 6v6c0 4.5 3.4 7.5 7 9 3.6-1.5 7-4.5 7-9V6l-7-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Designed to be reused",
    body: "Prove it once on a solar inverter, then carry the same proven core into storage, EV charging and microgrids — instead of starting over each time.",
    icon: (
      <>
        <path d="M4 9a8 8 0 0 1 13-3l3 3M20 15a8 8 0 0 1-13 3l-3-3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 4v5h-5M4 20v-5h5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Sharper with every unit",
    body: "Each new deployment tests the platform against new conditions — and every fix makes every future product more reliable.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function HomeConcept() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
      <div className="absolute inset-0 bg-linear-to-br from-[#0d1a2e] via-[#102a45] to-[#c2410c]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(234,88,12,0.32),transparent_55%)]" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            The Concept
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl">
            Most companies sell the box.{" "}
            <span className="text-gradient-light">We build the brain inside it.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            That one decision — to own the control intelligence rather than the casing — is what turns
            a single validated product into a platform behind dozens.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 120} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 sm:rounded-3xl sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent ring-1 ring-white/15">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300 sm:text-sm">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
