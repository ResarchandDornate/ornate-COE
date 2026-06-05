import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ROADMAP } from "../data";

const TONE = {
  done: "bg-accent text-white",
  progress: "bg-brand text-navy",
  planned: "bg-slate-300 text-slate-700",
};

const DOT = {
  done: "bg-accent ring-accent/30",
  progress: "bg-brand ring-brand/30",
  planned: "bg-slate-400 ring-slate-300/40",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-slate-50 py-16 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Development Roadmap"
          title="From proof-of-concept to commercialization"
          subtitle="A phased model — building capability and complexity progressively across four milestones."
        />

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-4 top-2 h-full w-0.5 bg-linear-to-b from-accent via-brand to-slate-300 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {ROADMAP.map((item, i) => (
              <Reveal key={item.phase} delay={(i % 2) * 80}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 sm:flex-row sm:items-center sm:pl-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* dot */}
                  <span
                    className={`absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ${DOT[item.tone]} sm:left-1/2`}
                  />

                  <div className="sm:w-1/2 sm:px-8">
                    <div
                      className={`card-gradient rounded-2xl border border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 ${
                        i % 2 === 0 ? "sm:text-right" : "sm:text-left"
                      }`}
                    >
                      <div
                        className={`mb-3 inline-flex items-center gap-2 ${
                          i % 2 === 0 ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="font-display text-sm font-bold text-navy-800">
                          {item.phase}
                        </span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${TONE[item.tone]}`}>
                          {item.state}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-navy-800 sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
