import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    tag: "Government Recognition",
    title: "Recommendations from DSIR & DST",
    body: "The Centre of Excellence in Power Electronics is being established in line with recommendations from the Department of Scientific & Industrial Research (DSIR) and the Department of Science & Technology (DST) — anchoring our work in India's national innovation framework.",
    icon: "shield",
  },
  {
    tag: "Academia Collaboration",
    title: "Strategic partnerships with educational institutes",
    body: "We collaborate with universities and research institutes to co-develop standards, file patents, mentor talent, and translate research outcomes into real-world clean-energy deployment.",
    icon: "link",
  },
];

const STANDARDS = ["BIS IS 16221", "IEC 62109", "IEEE", "DSIR", "DST", "Make in India"];

function Icon({ name }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3 4 6v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V6l-8-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M9 15 15 9" strokeLinecap="round" />
      <path d="M10.5 6.5 12 5a4 4 0 0 1 6 6l-1.5 1.5M13.5 17.5 12 19a4 4 0 0 1-6-6l1.5-1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Partnerships & Recognition"
          title="Backed by national institutions"
          subtitle="Bridging academia, government and industry to bring indigenous power electronics from the lab to the field."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-dark transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon name={p.icon} />
                </div>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-brand-dark">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-800">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Standards marquee */}
        <Reveal className="mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...STANDARDS, ...STANDARDS].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-2.5 font-display text-sm font-bold text-slate-500"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
