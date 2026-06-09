import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Contact — B.K. Bhattacharyya Centre of Excellence",
  description:
    "Get in touch with the B.K. Bhattacharyya Centre of Excellence for collaborations, internships, research partnerships or product enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Let's build clean energy together"
          subtitle="For collaborations, internships, research partnerships or product enquiries — reach out to the Centre of Excellence."
        />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
