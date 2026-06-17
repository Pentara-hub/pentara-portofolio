import Button from "../../../components/ui/Button";
import TiltCard from "../../../components/ui/TiltCard";

const BAD = [
  "AI generates code nobody reviews before it hits staging.",
  "Works in the demo. Falls over when real users show up.",
  "Deployed on a single server with no monitoring or backups.",
  "Something breaks at midnight — no one who built it is reachable.",
  "You get a GitHub repo. Not a product. Not a team. Not a plan.",
];

const GOOD = [
  "You bring the idea — we handle design, development, and launch. No chasing vendors.",
  "Every website and app tested on staging before your users ever see it.",
  "Web and mobile built for real traffic — fast, responsive, and reliable on every device.",
  "Something breaks? The engineer who built it is on the call within the hour.",
  "You get the finished product, hosting, docs, and a team that stays reachable after go-live.",
];

export default function HowWeBuild() {
  return (
    <section id="how-we-build" className="py-20 md:py-28 bg-brand/20">
      <div className="container-main">
        <p className="section-eyebrow reveal-up">How We Build</p>
        <h2 className="section-title reveal-up max-w-3xl">Two Ways to Build Software.<br /><em>We Chose the One That Lasts.</em></h2>
        <p className="mt-6 text-white/60 max-w-2xl reveal-up-delay-1">
          You shouldn't have to worry about timelines, tech stacks, or launch day. Bring us the idea — we design, build, and ship your website or mobile app fast, reliably, and without the headache.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-6 items-stretch">
          <TiltCard className="surface-card compare-bad p-8 h-full">
            <p className="text-xs font-bold tracking-widest uppercase text-red-400/80 mb-2">What we aren't</p>
            <h3 className="text-2xl font-extrabold text-white mb-1">Code<br />and Hope.</h3>
            <span className="inline-block text-xs text-red-400/60 mb-6">✕ Vibe coding</span>
            <ul className="space-y-3">
              {BAD.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/55">
                  <span className="text-red-400/60 shrink-0">{String(i + 1).padStart(2, "0")}</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm"><span className="text-white/40">What you end up with</span> <strong className="text-red-300">A risk.</strong></p>
          </TiltCard>

          <TiltCard className="surface-card compare-good p-8 h-full" intensity={14}>
            <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">What we are</p>
            <h3 className="text-2xl font-extrabold text-white mb-1">Ship It<br /><em>with Precision.</em></h3>
            <span className="inline-block text-xs text-emerald-400/70 mb-6">✓ Pentara Method</span>
            <ul className="space-y-3">
              {GOOD.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/70">
                  <span className="text-emerald-400/70 shrink-0 font-semibold">{String(i + 1).padStart(2, "0")}</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm"><span className="text-white/40">What you end up with</span> <strong className="text-emerald-300">A product that lasts.</strong></p>
          </TiltCard>
        </div>

        <p className="mt-10 text-center text-white/50 text-sm reveal-up-delay-2">
          You focus on the vision. <strong className="text-white">We handle the build, the launch, and everything in between.</strong>
        </p>
        <div className="mt-6 text-center reveal-up-delay-2">
          <Button href="#engagement-modes" variant="secondary">Explore the Framework</Button>
        </div>
      </div>
    </section>
  );
}
