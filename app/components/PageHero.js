import SectionHeading from "./SectionHeading";

// Shared page-title banner — a bright, premium header band used across every
// subpage. White base + a soft blue wash and edge-faded grid, with dark text.
// Content rises in on load. Pairs with the light content below.
// Swap the per-page banner markup for: <PageHero eyebrow title subtitle />.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-[#fafbff]">
      {/* Full-bleed mesh-gradient backdrop — covers the whole band */}
      <div className="absolute inset-0 mesh-soft" />

      {/* Edge-faded grid — airy, never busy */}
      <div className="absolute inset-0 grid-bg-light opacity-60 mask-[radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* Hairline fade into the section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-[#f5f7fc]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:px-8">
        <div className="animate-rise" style={{ animationDelay: "80ms" }}>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </div>
        {children && (
          <div className="animate-rise" style={{ animationDelay: "220ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
