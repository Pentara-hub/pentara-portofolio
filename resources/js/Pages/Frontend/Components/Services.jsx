import { Link } from "react-router-dom";
import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";
import Button from "../../../components/ui/Button";

const services = [
  { icon: "fa-code", title: "Web Development", desc: "Scalable web applications with modern frameworks and clean architecture." },
  { icon: "fa-cloud", title: "Cloud & DevOps", desc: "AWS infrastructure, CI/CD pipelines, and systems built for uptime." },
  { icon: "fa-mobile-alt", title: "Mobile Development", desc: "Cross-platform apps that feel native on every device." },
  { icon: "fa-pencil-ruler", title: "UI/UX Design", desc: "Interfaces that are intuitive, beautiful, and conversion-focused." },
  { icon: "fa-shopping-cart", title: "E-Commerce", desc: "Online stores and marketplaces engineered to drive revenue." },
  { icon: "fa-check-circle", title: "Quality Assurance", desc: "Rigorous testing so every release meets the highest standard." },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What We Do"
        title="Our Services"
        description="End-to-end capabilities to take your product from concept to launch."
        action={<Button href="#contact" variant="secondary" size="sm" className="shrink-0 hidden md:inline-flex">Explore All Capabilities</Button>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Link key={s.title} to="#contact" className={`service-card group reveal-up${i ? `-delay-${Math.min(i, 3)}` : ""}`}>
            <div className="icon-box mb-8">
              <i className={`fas ${s.icon}`} />
            </div>
            <h3 className="text-2xl font-bold text-fg mb-3">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed flex-1">{s.desc}</p>
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dim">Available</span>
              <span className="arrow-btn group-hover:bg-accent group-hover:text-base group-hover:border-accent">
                <i className="fas fa-arrow-right text-xs" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
