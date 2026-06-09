import Reveal from "./Reveal";

// Shared eyebrow + title + optional subtitle block for each section.
export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span
          className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ring-1 sm:px-4 sm:text-xs ${
            light
              ? "bg-white/10 text-accent ring-white/15"
              : "bg-linear-to-r from-brand/10 to-accent/10 text-brand-dark ring-brand/10"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-xl font-bold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl ${
          light ? "text-gradient-light" : "text-gradient"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 text-sm leading-relaxed sm:mt-4 sm:text-base lg:text-lg ${
            light ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
