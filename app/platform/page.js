import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import PlatformThesis from "../components/PlatformThesis";
import PlatformOverview from "../components/PlatformOverview";
import PlatformHardware from "../components/PlatformHardware";
import PlatformWhy from "../components/PlatformWhy";
import PlatformClasses from "../components/PlatformClasses";

export const metadata = {
  title: "Platform — B.K. Bhattacharyya Centre of Excellence",
  description:
    "An indigenous power-conversion technology platform — the reusable, firmware-defined control architecture inside grid-interactive power electronics, extensible across solar inverters, BESS, EV charging, microgrid converters and solid state transformers.",
};

export default function PlatformPage() {
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
              eyebrow="The Technology Platform"
              title="Building mission-critical energy infrastructure control systems"
              subtitle="An indigenous power conversion technology platform — control-systems IP usable across solar inverters, BESS, EV charging, microgrid converters and solid state transformers, for an Aatmanirbhar Bharat."
            />
          </div>
        </section>

        <PlatformThesis />
        <PlatformOverview />
        <PlatformHardware />
        <PlatformWhy />
        <PlatformClasses />
      </main>
      <Footer />
    </>
  );
}
