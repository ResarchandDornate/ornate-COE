import Reveal from "./Reveal";

// Shared eyebrow + title + optional subtitle block for each section.
export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
