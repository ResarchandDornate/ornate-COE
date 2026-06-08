import Reveal from "./Reveal";
import { PLATFORM_THESIS } from "../data";

// The one-line thesis — a quiet, high-contrast statement section.
export default function PlatformThesis() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <Reveal className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
          <span className="block">{PLATFORM_THESIS.line1}</span>
          <span className="text-gradient block">{PLATFORM_THESIS.line2}</span>
        </h2>
        <span className="mx-auto mt-7 block h-1.5 w-1.5 rounded-full bg-accent" />
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400 sm:text-xs">
          {PLATFORM_THESIS.caption}
        </p>
      </Reveal>
    </section>
  );
}
