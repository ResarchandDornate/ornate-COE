import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    title: "Build the control core",
    body: "We engineer the firmware “brain” once — grid sync, MPPT, control loops and protection — the layer that holds the real value.",
  },
  {
    title: "Prove it in the field",
    body: "We validate it on a real product: our 3 kW grid-tied solar inverter, tested under live Indian grid conditions.",
  },
  {
    title: "Re-target, don't rebuild",
    body: "The same proven core is adapted to BESS, EV charging, microgrids and more — reusing ~70–80% of the engineering.",
  },
  {
    title: "Scale & compound",
    body: "Every new deployment hardens the platform, so each next product ships faster and more reliably than the last.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-[#eef4fb] py-16 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,88,12,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From one control core to many products — in four steps"
          subtitle="Build the intelligence once, prove it, then carry it everywhere. Here is the whole approach, step by step."
        />

        <div className="relative mt-14 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Gradient connector line (desktop) */}
          <span className="pointer-events-none absolute inset-x-0 top-7 hidden h-0.5 bg-linear-to-r from-brand via-accent to-brand/0 lg:block" />

          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 100} className="h-full">
              <div className="relative flex h-full flex-col items-center text-center">
                {/* Number badge sitting on the line */}
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-dark via-brand to-accent font-display text-xl font-bold text-white shadow-lg shadow-brand/30 ring-4 ring-white">
                  {i + 1}
                </span>
                <div className="relative mt-5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl sm:p-6">
                  <span className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand to-accent" />
                  <h3 className="font-display text-base font-bold text-navy-800 sm:text-lg">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
