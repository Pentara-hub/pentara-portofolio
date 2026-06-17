import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";

const industries = [
  { icon: "fa-graduation-cap", title: "Education", desc: "LMS platforms with structured learning paths." },
  { icon: "fa-shopping-cart", title: "Commerce", desc: "Storefronts and marketplaces built to convert." },
  { icon: "fa-building", title: "Enterprise", desc: "Internal tools and brand experiences at scale." },
  { icon: "fa-chart-line", title: "Analytics", desc: "Dashboards and real-time data products." },
];

export default function UseCases() {
  return (
    <Section className="border-t border-white/[0.06]">
      <SectionHeader eyebrow="Industries" title="Where we work" description="Tailored systems across different verticals." align="center" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, i) => (
          <div key={item.title} className={`card p-7 text-center reveal-up${i ? `-delay-${i}` : ""}`}>
            <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center mx-auto mb-4">
              <i className={`fas ${item.icon} text-muted text-sm`} />
            </div>
            <h3 className="font-medium text-fg mb-1.5">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
