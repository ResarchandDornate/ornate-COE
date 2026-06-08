import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Objectives from "../components/Objectives";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "About — B.K. Bhattacharyya Centre of Excellence",
  description:
    "About the B.K. Bhattacharyya Centre of Excellence — our vision, mission and the strategic objectives behind our indigenous power-electronics R&D.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Dark banner — keeps the navbar readable and holds the page title */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="absolute inset-0 bg-linear-to-br from-[#0c0720] via-[#1a0f38] to-[#2c1860]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(168,85,247,0.30),transparent_55%)]" />
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:px-8">
            <SectionHeading
              light
              eyebrow="About Us"
              title="A centre built for indigenous power electronics"
              subtitle="Researching, designing, prototyping and commercializing advanced power electronics and clean energy systems — all engineered in-house in India."
            />
          </div>
        </section>

        <About />
        <Objectives />
      </main>
      <Footer />
    </>
  );
}
