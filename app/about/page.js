import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import About from "../components/About";
import AboutSimple from "../components/AboutSimple";
import FounderProfile from "../components/FounderProfile";
import CentreVideo from "../components/CentreVideo";
import Collaborators from "../components/Collaborators";
import Objectives from "../components/Objectives";
import Roadmap from "../components/Roadmap";

export const metadata = {
  title: "Centre of Excellence — B.K. Bhattacharyya Centre of Excellence",
  description:
    "The B.K. Bhattacharyya Centre of Excellence in Power Electronics & Clean Energy Systems at Ornate Solar — our vision, mission and the indigenous R&D behind a reusable power-conversion platform.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — text + professor image, clean background */}
        <section className="bg-white pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <Reveal>
                <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark sm:text-xs">
                  Centre of Excellence
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
                  Professor B.K. <span className="text-gradient">Bhattacharyya</span>
                </h1>
                <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-slate-500 sm:text-base">
                  Power Electronics &amp; Clean Energy Systems · at Ornate Solar
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700">
                  Researching, designing and commercialising advanced power electronics —
                  inverters, solar pump controllers and clean energy systems — entirely through
                  indigenous design, bridging academia and industry to power India&apos;s clean
                  energy transformation.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href="/platform"
                    className="btn-gradient rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-brand/30 transition-transform hover:scale-105"
                  >
                    Explore the platform
                  </a>
                  <a
                    href="/team"
                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-navy-800 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-slate-50"
                  >
                    Meet the team
                  </a>
                </div>
              </Reveal>

              {/* Image */}
              <Reveal delay={120}>
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-brand/10">
                    <Image
                      src="/Gemini_Generated_Image_gnm295gnm295gnm2.png"
                      alt="Professor Bidyut Kumar Bhattacharyya"
                      width={600}
                      height={750}
                      priority
                      sizes="(max-width: 1024px) 24rem, 24rem"
                      className="aspect-4/5 w-full object-cover object-top"
                    />
                  </div>
                  <p className="text-gradient mt-5 text-center font-display text-lg font-bold tracking-wide">
                    Professor Bidyut Kumar
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <About />
        <AboutSimple />
        <Objectives />
        <Roadmap />
        <FounderProfile />
        <CentreVideo />
        <Collaborators />
      </main>
      <Footer />
    </>
  );
}
