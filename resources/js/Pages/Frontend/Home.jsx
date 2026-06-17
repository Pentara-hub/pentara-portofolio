import { useState } from "react";
import useRevealOnScroll from "../../../hooks/useRevealOnScroll";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Philosophy from "./Components/Philosophy";
import HowWeBuild from "./Components/HowWeBuild";
import EngagementModes from "./Components/EngagementModes";
import WhatWeBuild from "./Components/WhatWeBuild";
import ProjectsShowcase from "./Components/ProjectsShowcase";
import Testimonials from "./Components/Testimonials";
import CTABanner from "./Components/CTABanner";
import Topology from "./Components/Topology";
import Contact from "./Components/Contact";

export default function Home({ onContact, onModeSelect, activeMode }) {
  useRevealOnScroll();
  return (
    <>
      <Hero activeMode={activeMode} onModeClick={(id) => { onModeSelect?.(id); document.getElementById("engagement-modes")?.scrollIntoView({ behavior: "smooth" }); }} />
      <Partners />
      <Philosophy />
      <HowWeBuild />
      <EngagementModes activeId={activeMode} onSelect={onModeSelect} />
      <WhatWeBuild />
      <ProjectsShowcase />
      <Testimonials />
      <CTABanner onContact={onContact} />
      <Topology />
      <Contact />
    </>
  );
}
