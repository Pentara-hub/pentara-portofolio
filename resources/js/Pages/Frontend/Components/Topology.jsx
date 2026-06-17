import { TEAM } from "../../../data/pentaraData";
import TiltCard from "../../../components/ui/TiltCard";

const TOPOLOGY = [
  { title: "Guilds", subtitle: "Communities of Practice", desc: "Frontend, backend, DevOps, and QA — each engineer goes deep in their craft, then brings that expertise to every project. No generalists pretending to know everything.", icon: "fa-layer-group" },
  { title: "Verticals", subtitle: "Domain Focus", desc: "EdTech, healthcare, automotive, and wellness — we've shipped in these industries and know the patterns that repeat (and the ones that will trip you up).", icon: "fa-th-large" },
  { title: "Squads", subtitle: "Delivery Teams", desc: "Small, senior, and autonomous. One squad owns your product from architecture to deploy — the same faces in every standup, not a rotating cast.", icon: "fa-users" },
];

export default function Topology() {
  return (
    <section id="team" className="py-20 md:py-28 bg-brand/20">
      <div className="container-main">
        <p className="section-eyebrow reveal-up">Topology</p>
        <h2 className="section-title reveal-up max-w-3xl">We're Not a Team.<br /><em>We're a Topology</em> Connected by Purpose.</h2>
        <p className="mt-4 text-4xl font-extrabold text-white reveal-up-delay-1">4 <span className="text-lg font-normal text-white/40">People</span></p>
        <p className="text-white/50 mt-1 reveal-up-delay-1">Four senior engineers focused on web and mobile. You bring the idea — we design, build, launch, and support. Cloud included when you need it.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-5 reveal-up-delay-2">
          {TOPOLOGY.map((t) => (
            <TiltCard key={t.title} className="surface-card p-8" intensity={8}>
              <p className="text-[10px] font-bold tracking-widest uppercase text-white/40">{t.subtitle}</p>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center my-4">
                <i className={`fas ${t.icon} text-white`} />
              </div>
              <h3 className="text-xl font-extrabold text-white">{t.title}</h3>
              <p className="text-sm text-white/55 mt-3 leading-relaxed">{t.desc}</p>
            </TiltCard>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-up-delay-3">
          {TEAM.map((m) => (
            <TiltCard key={m.name} className="surface-card p-6 text-center" intensity={10}>
              <div className="team-photo-wrap w-28 h-28 mx-auto rounded-2xl overflow-hidden border border-white/10 mb-4">
                <img src={m.img} alt={m.name} className="team-photo" />
              </div>
              <h3 className="font-bold text-white">{m.name}</h3>
              <p className="text-sm text-white/50 mt-1">{m.role}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
