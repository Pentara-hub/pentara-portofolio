import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import MainLayout from "../../Layouts/MainLayout";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import OurTeam from "./Components/OurTeam";
import Portfolio from "./Components/Portfolio";
import Process from "./Components/Process";
import Section from "./Components/Section";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

const Home = () => {
  useRevealOnScroll();
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Section />
      <Portfolio />
      <Process />
      <About />
      <OurTeam />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
};

export default Home;
