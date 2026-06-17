import Button from "../../../components/ui/Button";

export default function CTABanner({ onContact }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-main text-center reveal-up">
        <h2 className="section-title">Ready to Build<br /><em>with Pentara?</em></h2>
        <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto">
          Got an idea for a website or app? Tell us about it — we'll handle design, development, launch, and everything in between.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={onContact}>Book a Free Consultation</Button>
          <Button href="#contact" variant="secondary" size="lg">Talk to Our Tech Team</Button>
        </div>
        <p className="mt-6 text-sm text-white/40">30 minutes. No sales deck — just an honest conversation about what you want to build.</p>
      </div>
    </section>
  );
}
