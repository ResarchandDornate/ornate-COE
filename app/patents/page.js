import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Patents from "../components/Patents";

export const metadata = {
  title: "Patents — B.K. Bhattacharyya Centre of Excellence",
  description:
    "The granted patents of Prof. Bidyut K. Bhattacharyya — foundational IP in semiconductor packaging, power distribution and high-speed test, largely assigned to Intel Corporation. Click any card to open the full patent.",
};

export default function PatentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Patents"
          title="A legacy of invention in power and packaging"
          subtitle="The patented work of the Centre's namesake, Prof. Bidyut K. Bhattacharyya — decades of foundational engineering in semiconductor packaging, power distribution and high-speed test. Click any card to open the full patent."
        />

        {/* The inventor — Prof. B.K. Bhattacharyya */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
              <Reveal className="mx-auto w-full max-w-xs">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-brand/30 via-accent/20 to-transparent opacity-80 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-brand/15">
                    <Image
                      src="/Gemini_Generated_Image_gnm295gnm295gnm2.png"
                      alt="Professor Bidyut Kumar Bhattacharyya"
                      width={600}
                      height={750}
                      className="aspect-4/5 w-full rounded-2xl object-cover object-top"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
                  The Inventor
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy-800 sm:text-3xl">
                  Prof. Bidyut Kumar Bhattacharyya
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  The patents below are the work of the Centre's namesake — an{" "}
                  <strong className="text-navy-800">IEEE Fellow</strong> and former{" "}
                  <strong className="text-navy-800">Intel Principal Engineer</strong> of 27 years. A
                  key contributor to Intel's landmark 80386 and 80486 processors and a recipient of
                  the Intel Founder's Award, he was recognised as one of the youngest IEEE Fellows for
                  his pioneering work in semiconductor assembly and packaging.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  He holds <strong className="text-navy-800">more than 30 patents</strong> in
                  semiconductor packaging, power distribution and high-speed test — the foundational
                  intellectual property catalogued here. He earned his PhD from the State University
                  of New York and his MSc in Physics from IIT Kanpur.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {["IEEE Fellow", "27 yrs at Intel", "30+ patents", "Intel Founder's Award"].map((t) => (
                    <span key={t} className="rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand-dark">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Patents />
      </main>
      <Footer />
    </>
  );
}
