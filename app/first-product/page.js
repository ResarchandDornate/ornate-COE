import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Products from "../components/Products";
import PlatformHardware from "../components/PlatformHardware";
import PlatformEngineering from "../components/PlatformEngineering";

export const metadata = {
  title: "First Product — 3 kW Grid-Tied Inverter | B.K. Bhattacharyya Centre of Excellence",
  description:
    "The first product built on the indigenous control platform — a field-validated 3 kW grid-tied solar inverter, its hardware, and the in-house engineering behind it.",
};

export default function FirstProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="The First Product · Proof of the Platform"
          title="The 3 kW grid-tied solar inverter"
          subtitle="The first instantiation of the platform — field-validated under Indian grid conditions. It exercises the full control architecture end to end, and proves the platform is real."
        />

        <Products />
        <PlatformHardware />
        <PlatformEngineering />
      </main>
      <Footer />
    </>
  );
}
