import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Plain-language explainer — so any visitor, not just engineers, gets it quickly.
const POINTS = [
  {
    title: "We build the “brain” of solar power",
    body: "Solar panels generate DC electricity, while homes and the grid use AC power. An inverter converts this safely and efficiently. We design advanced inverters that make this conversion clean, reliable, and efficient.",
    icon: (
      <path d="M9 3h6l-1 7h4l-9 11 2-8H7l2-10Z" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    title: "We build it in India, for India",
    body: "From hardware to software, most of our technology is designed and developed in-house instead of being imported—ensuring full ownership of the technology within India.",
    icon: (
      <>
        <path d="M3 21h18M5 21V8l7-5 7 5v13" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M9 21v-6h6v6" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "One core design, many applications",
    body: "A single underlying technology powers multiple systems—from home inverters today to solar plants, EV chargers, and battery storage systems tomorrow. Build once, deploy everywhere.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: "Backed by expertise and leading institutions",
    body: "Our work is guided by deep technical expertise and collaboration with premier institutions such as the IITs and national R&D bodies, ensuring globally competitive and trusted innovation.",
    icon: (
      <>
        <path d="M12 3 4 6v6c0 4.5 3.4 7.5 8 9 4.6-1.5 8-4.5 8-9V6l-8-3Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function AboutSimple() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="In Simple Terms"
          title="What We Do — Explained Simply"
          subtitle="No technical background needed. Here’s what the Centre does and why it matters, in straightforward language."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120} className="h-full">
              <div className="group flex h-full gap-4 rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-800 transition-colors group-hover:text-brand-dark sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
