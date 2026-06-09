import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CREDENTIALS = [
  { stat: "27 yrs", label: "Intel Principal Engineer" },
  { stat: "30+", label: "Patents granted" },
  { stat: "IEEE", label: "Fellow — one of the youngest" },
  { stat: "Intel", label: "Founder's Award recipient" },
];

const HIGHLIGHTS = [
  "Key member of the teams that developed Intel's landmark 80386 and 80486 processors.",
  "Pioneering work in semiconductor assembly and packaging, and electrical characterisation of packages.",
  "Developed “iPest” technology, improving 80486 performance with reduced power planes.",
  "Today, helping build India's semiconductor ecosystem in support of the National Semiconductor Mission.",
];

export default function FounderProfile() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Founder & Director"
          title="Prof. Bidyut Kumar Bhattacharyya"
          subtitle="The Centre's namesake and guiding mind — an IEEE Fellow and former Intel Principal Engineer, now Technical Director & CTO at Ornate Solar."
        />

        {/* Signature image (left) + bio & education (right) */}
        <div className="mt-10 grid items-center gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12">
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

          {/* Bio + education (two boxes) */}
          <Reveal delay={120}>
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                Prof. Bidyut Kumar Bhattacharyya leads the Centre as Technical Director &amp; CTO at
                Ornate Solar. An <strong className="text-navy-800">IEEE Fellow</strong> with over 25
                years of research experience, he spent <strong className="text-navy-800">27 years at
                Intel as a Principal Engineer</strong> — a key contributor to the landmark 80386 and
                80486 processors and a recipient of the prestigious Intel Founder's Award.
              </p>
              <p>
                Recognised as one of the youngest IEEE Fellows for his pioneering work in
                semiconductor assembly and packaging, he holds{" "}
                <strong className="text-navy-800">more than 30 patents</strong>. He earned his PhD
                from the State University of New York and his MSc in Physics from IIT Kanpur.
              </p>

              {/* Education — two boxes */}
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                    Doctorate
                  </span>
                  <p className="mt-1 font-display text-sm font-bold text-navy-800">
                    PhD — State University of New York
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
                    Post-graduate
                  </span>
                  <p className="mt-1 font-display text-sm font-bold text-navy-800">
                    MSc in Physics — IIT Kanpur
                  </p>
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
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-fuchsia-300 hover:shadow-lg hover:shadow-fuchsia-500/10 sm:p-6"
              >
                <span className="text-gradient font-display text-2xl font-bold sm:text-3xl">
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
              Career highlights
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
