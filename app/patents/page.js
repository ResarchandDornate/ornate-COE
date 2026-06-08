import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
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
        {/* Dark banner — keeps the navbar readable and holds the page title */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="absolute inset-0 bg-linear-to-br from-[#0c0720] via-[#1a0f38] to-[#2c1860]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(168,85,247,0.30),transparent_55%)]" />
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:px-8">
            <SectionHeading
              light
              eyebrow="Patents"
              title="A legacy of invention in power and packaging"
              subtitle="The patented work of the Centre's namesake, Prof. Bidyut K. Bhattacharyya — decades of foundational engineering in semiconductor packaging, power distribution and high-speed test. Click any card to open the full patent."
            />
          </div>
        </section>

        <Patents />
      </main>
      <Footer />
    </>
  );
}
