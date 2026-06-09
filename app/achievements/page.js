import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Achievements from "../components/Achievements";
import InnovationEngine from "../components/InnovationEngine";

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
        <PageHero
          eyebrow="Achievements"
          title="Three years of indigenous engineering, in milestones"
          subtitle="A validated first product, national recognition, and a reusable platform beneath it — the work the Centre has built end to end, in pictures."
        />

        <Achievements />
        {/* The hard problems we solved and the reusable IP we built doing it. */}
        <InnovationEngine
          show={["challenges", "frameworks"]}
          className="bg-white py-16 sm:py-24"
        />
      </main>
      <Footer />
    </>
  );
}
