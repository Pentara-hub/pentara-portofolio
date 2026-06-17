import Marquee from "../../../components/ui/Marquee";
import { TECH_STACK } from "../../../data/pentaraData";

export default function Partners() {
  return (
    <section id="technologies" className="tech-marquee-section py-14 border-y border-neon/10 relative overflow-hidden">
      <div className="tech-marquee-glow" aria-hidden="true" />
      <div className="container-main mb-8 text-center relative z-10">
        <p className="section-eyebrow text-neon">Our Technologies</p>
        <h2 className="section-title">
          <span className="neon-text">15+</span> Technologies We Master
        </h2>
        <p className="text-white/50 text-sm mt-2">React, Flutter, Laravel, Next.js, and the modern stack behind every website and app we ship</p>
      </div>
      <Marquee items={TECH_STACK} speed={30} variant="neon" />
      <Marquee items={[...TECH_STACK].reverse()} speed={38} variant="neon" reverse />
    </section>
  );
}
