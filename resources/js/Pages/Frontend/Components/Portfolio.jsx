import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

const projects = [
  {
    slug: "Aklemy",
    title: "Aklemy",
    label: "Web, Mobile & LMS",
    desc: "Enterprise learning platform with smart quizzes, analytics, and AI chatbot support.",
    image: "/images/projects/lms/home.png",
    products: 5,
    tags: ["React", "Laravel", "AWS"],
  },
  {
    slug: "fairwheels",
    title: "FairWheels",
    label: "Web & AI",
    desc: "AI-powered automotive commerce with price prediction and vehicle comparison.",
    image: null,
    icon: "fa-car",
    products: 2,
    tags: ["React", "Laravel"],
    live: true,
  },
  {
    slug: "misteral",
    title: "Misteral",
    label: "Web & Brand",
    desc: "Pharmaceutical brand platform with product catalog and news publishing.",
    image: "/images/projects/misteral/home.png",
    products: 3,
    tags: ["Vue", "Python"],
  },
];

export default function Portfolio() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Click any project to explore the full case study."
        action={<Button href="#work" variant="secondary" size="sm" className="shrink-0 hidden md:inline-flex">View All Projects</Button>}
      />

      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p, delay }) {
  const inner = (
    <div className={`surface-card overflow-hidden reveal-up${delay ? `-delay-${delay}` : ""}`}>
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
          <Badge variant="count">{p.products} Products</Badge>
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-accent mt-4">{p.label}</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-fg mt-2">{p.title}</h3>
          <p className="text-muted mt-4 leading-relaxed">{p.desc}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
          {p.live && <Badge variant="progress" className="mt-4 w-fit">In Progress</Badge>}
        </div>
        <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] min-h-[280px] md:min-h-[360px] flex items-center justify-center order-1 md:order-2 overflow-hidden">
          {p.image ? (
            <img src={p.image} alt={p.title} className="max-h-[320px] w-auto object-contain drop-shadow-2xl" />
          ) : (
            <i className={`fas ${p.icon} text-7xl text-accent/30`} />
          )}
        </div>
      </div>
      <div className="px-8 py-4 border-t border-white/[0.06] flex items-center justify-between bg-black/20">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dim">Explore Case Study</span>
        <span className="arrow-btn"><i className="fas fa-arrow-right text-xs" /></span>
      </div>
    </div>
  );

  return <Link to={`/case-study/${p.slug}`} className="block group">{inner}</Link>;
}
