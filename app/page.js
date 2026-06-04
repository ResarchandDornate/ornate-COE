import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Objectives from "./components/Objectives";
import Products from "./components/Products";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Products />
        <Roadmap />
        <Team />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
