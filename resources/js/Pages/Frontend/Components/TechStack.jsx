import Marquee from "../../../components/ui/Marquee";

const stack = [
  "React", "Next.js", "Laravel", "Node.js", "Python", "Flutter",
  "AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "Redis",
  "TypeScript", "Vue.js", "Go", "Figma",
];

export default function TechStack() {
  return (
    <section className="py-16 border-y border-white/[0.04] bg-surface/50">
      <div className="container-main mb-6">
        <p className="section-eyebrow text-center">Core Stack</p>
        <h2 className="section-title text-center">Built With The Best</h2>
        <p className="text-center text-muted mt-3 text-sm">Modern, battle-tested technologies for exceptional performance</p>
      </div>
      <Marquee items={stack} speed={40} />
    </section>
  );
}
