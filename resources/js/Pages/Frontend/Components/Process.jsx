import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";
import Button from "../../../components/ui/Button";

const steps = [
  { n: "01", title: "Discovery", desc: "We map your goals, users, and technical requirements before writing code.", icon: "fa-compass" },
  { n: "02", title: "Design", desc: "Wireframes and prototypes validated with real feedback early on.", icon: "fa-pencil-ruler" },
  { n: "03", title: "Development", desc: "Agile sprints with weekly deliverables you can test and use.", icon: "fa-code" },
  { n: "04", title: "Launch", desc: "Tested, deployed, monitored, and supported for the long run.", icon: "fa-rocket" },
];

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Our Methodology"
        title="How We Deliver"
        description="A disciplined process that keeps you informed at every step."
        action={<Button href="#contact" variant="secondary" size="sm" className="shrink-0 hidden md:inline-flex">Initialize Project</Button>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div key={s.title} className={`service-card reveal-up${i ? `-delay-${i}` : ""}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="icon-box !w-10 !h-10">
                <i className={`fas ${s.icon} text-sm`} />
              </div>
              <span className="text-4xl font-extrabold text-white/[0.06]">{s.n}</span>
            </div>
            <h3 className="text-xl font-bold text-fg mb-2">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
