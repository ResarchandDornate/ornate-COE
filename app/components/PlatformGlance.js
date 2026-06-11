import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GLANCE_STATS = [
  { value: "3", label: "Years of platform engineering" },
  { value: "5", label: "Product classes architecturally supported" },
  { value: "7", label: "Control architecture layers" },
  { value: "100%", label: "In-house R&D" },
];

export default function PlatformGlance() {
  return (
    <section className="relative overflow-hidden bg-[#f3f7fc] py-16 sm:py-24">
      {/* Full-bleed mesh-gradient backdrop */}
      <div className="absolute inset-0 mesh-soft" />
      <div className="absolute inset-0 grid-bg-light opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="At a Glance"
          title="Three years. One platform. National recognition."
        />

        {/* Horizontal stat strip */}
        <Reveal className="mt-10 sm:mt-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md sm:rounded-3xl md:grid-cols-4">
            {GLANCE_STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center bg-white p-6 text-center transition-colors hover:bg-blue-50 sm:p-8">
                <div className="text-gradient font-display text-4xl font-bold sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-[13px] font-semibold leading-snug text-navy-800 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
