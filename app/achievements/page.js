import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import Achievements from "../components/Achievements";

export const metadata = {
  title: "Achievements — B.K. Bhattacharyya Centre of Excellence",
  description:
    "Milestones from the B.K. Bhattacharyya Centre of Excellence — a field-validated 3 kW indigenous solar inverter, DSIR R&D recognition, a 6 kW HERIC prototype, an indigenous control platform and more.",
};

export default function AchievementsPage() {
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
              eyebrow="Achievements"
              title="Three years of indigenous engineering, in milestones"
              subtitle="A validated first product, national recognition, and a reusable platform beneath it — the work the Centre has built end to end, in pictures."
            />
          </div>
        </section>

        <Achievements />
      </main>
      <Footer />
    </>
  );
}
