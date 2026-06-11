import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RecognisedStrip from "../components/RecognisedStrip";
import PlatformBigIdea from "../components/PlatformBigIdea";
import PlatformGlance from "../components/PlatformGlance";
import EnergyPlatform from "../components/EnergyPlatform";
import PageHero from "../components/PageHero";
import PlatformStory from "../components/PlatformStory";
import PlatformLayers from "../components/PlatformLayers";
import PlatformWhy from "../components/PlatformWhy";
import PlatformConditions from "../components/PlatformConditions";
import InnovationEngine from "../components/InnovationEngine";
import PatentBanner from "../components/PatentBanner";
import Partners from "../components/Partners";

export const metadata = {
  title: "Platform — B.K. Bhattacharyya Centre of Excellence",
  description:
    "An indigenous power-conversion technology platform — the reusable, firmware-defined control architecture inside grid-interactive power electronics, designed to travel across product classes.",
};

export default function PlatformPage() {
  return (
    <>
      <Navbar overDark />
      <main>
        {/* Merged from the former home page — the platform overview up top. */}
        <Hero />
        <RecognisedStrip />
        {/* The platform is the story — not a single product. */}
        <PlatformBigIdea />
        <PlatformGlance />
        <EnergyPlatform />

        <PageHero
          eyebrow="The Technology Platform"
          title="Building mission-critical energy infrastructure control systems"
          subtitle="An indigenous power-conversion technology platform — the reusable, firmware-defined control architecture inside grid-interactive power electronics, for an Aatmanirbhar Bharat."
        />

        {/* The platform & the stack — what we have built, and how. */}
        <PlatformStory />
        <PlatformLayers />
        <PlatformWhy />
        <PlatformConditions />
        {/* The research engine — challenges solved, frameworks built, what's next. */}
        <InnovationEngine className="bg-[#f3f7fc] py-16 sm:py-28" />

        {/* Recognition & partners — carried over from the home page. */}
        <PatentBanner />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
