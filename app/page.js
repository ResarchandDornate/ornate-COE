import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecognisedStrip from "./components/RecognisedStrip";
import PlatformBigIdea from "./components/PlatformBigIdea";
import InnovationEngine from "./components/InnovationEngine";
import PlatformGlance from "./components/PlatformGlance";
import EnergyPlatform from "./components/EnergyPlatform";
import PatentBanner from "./components/PatentBanner";
import Partners from "./components/Partners";
import Collaborators from "./components/Collaborators";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecognisedStrip />
        {/* The platform is the story — not a single product. */}
        <PlatformBigIdea />
        {/* Innovation engine — built to create advanced solutions faster. */}
        <InnovationEngine show={["accel", "future"]} className="bg-white py-16 sm:py-24" />
        <PlatformGlance />
        <EnergyPlatform />
        <PatentBanner />
        <Partners />
        <Collaborators />
      </main>
      <Footer />
    </>
  );
}
