import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_WHY } from "../data";

export default function PlatformWhy() {
  return (
    <section className="bg-[#faf8fe] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Direction"
          title="Why a platform, not a product line"
          subtitle="The strategic discipline that defines our engineering approach."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {PLATFORM_WHY.map((item, i) => (
            <Reveal key={item.no} delay={(i % 3) * 100}>
              <div className="card-gradient group relative h-full overflow-hidden rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 sm:p-8">
                <span className="font-display text-5xl font-bold text-slate-200 transition-colors group-hover:text-brand/25 sm:text-6xl">
                  {item.no}
                </span>
                <span className="mt-4 block h-0.5 w-10 rounded-full bg-linear-to-r from-brand-dark to-accent" />
                <h3 className="mt-5 font-display text-base font-bold text-navy-800 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
