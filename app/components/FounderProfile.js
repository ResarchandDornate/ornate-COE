import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CREDENTIALS = [
  { stat: "27+ years", label: "Intel Principal Engineer" },
  { stat: "30+ patents", label: "Granted in semiconductor technologies" },
  { stat: "IEEE Fellow", label: "Among the youngest recognized globally" },
  { stat: "Intel Founder’s Award", label: "For outstanding technical contributions" },
];

const HIGHLIGHTS = [
  "Key member of the teams that developed Intel’s landmark 80386 and 80486 processors.",
  "Contributed to pioneering advancements in semiconductor assembly, packaging, and electrical characterization of packages.",
  "Developed “iPest” technology, improving 80486 performance with reduced power planes.",
  "Currently contributing to the development of India’s semiconductor ecosystem in alignment with the National Semiconductor Mission.",
];

export default function FounderProfile() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Founder & Director"
          title="Prof. Bidyut Kumar Bhattacharyya"
          subtitle={"The Centre’s guiding mind and namesake — an IEEE Fellow and former Intel Principal Engineer, currently serving as Technical Director & CTO at Ornate Solar."}
        />

        {/* Signature image (left) + bio & education (right) */}
        <div className="mt-10 grid items-start gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* Signature wall */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-brand/25 via-accent/15 to-transparent opacity-70 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-brand/10 sm:rounded-3xl">
                <Image
                  src="/bk-signature-wall.png"
                  alt="Bidyut Bhattacharyya Centre for Semiconductor Research — signature wall"
                  width={1799}
                  height={800}
                  className="aspect-1799/800 w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Bio + leadership + education */}
          <Reveal delay={120}>
            <div className="space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                Prof. Bhattacharyya brings over 25 years of research and industry experience in semiconductor
                technologies. He spent 27 years at Intel as a Principal Engineer, contributing to landmark
                processors such as the 80386 and 80486, and was honored with the prestigious Intel Founder’s
                Award for his contributions.
              </p>
              <p>
                Recognized as one of the youngest IEEE Fellows for his pioneering work in semiconductor
                assembly and packaging, he holds <strong className="text-navy-800">more than 30 patents</strong> in the field.
              </p>

              {/* Academic & Leadership Journey */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="font-display text-base font-bold text-navy-800">
                  Academic &amp; Leadership Journey
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  After his tenure at Intel, he served as a Professor at NIT Agartala, contributing to teaching and
                  advanced research in engineering education. He later worked at Georgia Tech, managing research and
                  development activities, further strengthening his global academic and innovation profile. He also served
                  as Vice Chancellor at IBS Hyderabad (ICFAI Foundation), where he contributed to academic
                  leadership and institutional development.
                </p>
              </div>

              {/* Academic Background */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="font-display text-base font-bold text-navy-800 mb-3">
                  Academic Background
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                      Doctorate
                    </span>
                    <p className="mt-1 font-display text-xs font-bold text-navy-800 sm:text-sm">
                      PhD — SUNY Buffalo
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                      Post-Graduate
                    </span>
                    <p className="mt-1 font-display text-xs font-bold text-navy-800 sm:text-sm">
                      MSc in Physics — IIT Kanpur
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                      Undergraduate
                    </span>
                    <p className="mt-1 font-display text-xs font-bold text-navy-800 sm:text-sm">
                      Presidency College, Kolkata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Credential tiles — full-width row */}
        <Reveal className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 sm:p-6"
              >
                <span className={`text-gradient font-display font-bold leading-tight ${
                  c.stat.length > 12 ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"
                }`}>
                  {c.stat}
                </span>
                <span className="mt-1 text-[11px] font-medium leading-snug text-slate-500 sm:text-xs">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Career highlights */}
        <Reveal className="mt-8 sm:mt-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:rounded-3xl sm:p-8">
            <h3 className="font-display text-base font-bold text-navy-800 sm:text-lg">
              Career Highlights
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
