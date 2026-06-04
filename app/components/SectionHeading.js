import Reveal from "./Reveal";

// Shared eyebrow + title + optional subtitle block for each section.
export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-dark sm:px-4 sm:text-xs">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-xl font-bold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 text-sm leading-relaxed sm:mt-4 sm:text-base lg:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
