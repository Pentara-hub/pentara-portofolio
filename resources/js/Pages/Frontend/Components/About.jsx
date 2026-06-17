import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";
import Button from "../../../components/ui/Button";

const features = [
  { icon: "fa-users", title: "Senior Engineers", desc: "A tight team of specialists — no juniors on your critical path." },
  { icon: "fa-shield-alt", title: "Quality First", desc: "Rigorous testing and security practices from the first commit." },
  { icon: "fa-bolt", title: "Agile Delivery", desc: "Weekly demos, transparent communication, and fast iteration cycles." },
  { icon: "fa-headset", title: "Ongoing Support", desc: "We stay with you after launch — maintenance, scaling, and improvements." },
];

export default function About() {
  return (
    <Section id="about" className="bg-surface/30">
      <SectionHeader
        eyebrow="Why Pentara"
        title="Why Teams Choose Us"
        description="We combine technical depth with product thinking to deliver solutions that exceed expectations."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={f.title} className={`feature-card text-center reveal-up${i ? `-delay-${i}` : ""}`}>
            <div className="icon-box mx-auto mb-5">
              <i className={`fas ${f.icon}`} />
            </div>
            <h3 className="text-lg font-bold text-fg mb-2">{f.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center reveal-up-delay-2">
        <Button href="#contact" size="lg">
          Start Your Project <i className="fas fa-arrow-right text-xs" />
        </Button>
      </div>
    </Section>
  );
}
