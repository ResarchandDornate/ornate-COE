import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_STORY } from "../data";

export default function PlatformStory() {
  return (
    <section className="bg-[#f3f7fc] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Concept"
          title="We are building a platform, not a product"
          subtitle="The single idea this whole Centre is built around — explained in full."
        />

        {/* Lead paragraph */}
        <Reveal className="mx-auto mt-10 max-w-3xl sm:mt-14">
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl sm:leading-relaxed">
            {PLATFORM_STORY.lead}
          </p>
        </Reveal>

        {/* In-depth sections */}
        <div className="mx-auto mt-12 max-w-3xl space-y-12 sm:mt-16 sm:space-y-16">
          {PLATFORM_STORY.sections.map((s, i) => (
            <Reveal key={s.no}>
              <div className="border-l-2 border-brand/30 pl-5 sm:pl-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-bold text-brand-dark">{s.no}</span>
                  <h3 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
                    {s.heading}
                  </h3>
                </div>
                <div className="mt-4 space-y-4">
                  {s.paras.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Pull quote after the third section */}
              {i === 2 && (
                <div className="my-12 sm:my-16">
                  <p className="text-center font-display text-2xl font-bold leading-snug sm:text-4xl">
                    <span className="text-gradient">“{PLATFORM_STORY.pullQuote}”</span>
                  </p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
