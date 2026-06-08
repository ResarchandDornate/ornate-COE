import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import PlatformThesis from "./components/PlatformThesis";
import PlatformOverview from "./components/PlatformOverview";
import PlatformHardware from "./components/PlatformHardware";
import PatentBanner from "./components/PatentBanner";
import Roadmap from "./components/Roadmap";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <PlatformThesis />
        <PlatformOverview />
        <PlatformHardware />
        <PatentBanner />
        <Roadmap />
        <Gallery />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
