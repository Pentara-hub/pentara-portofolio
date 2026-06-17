import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import FeatureCard from "./FeatureCard";
import Gallery from "./Gallery";
import RelatedCard from "./RelatedCard";
import Button from "../../../components/ui/Button";
import Badge from "../../../components/ui/Badge";
import { Check, Send } from "lucide-react";
import { CASES, DEFAULT_SLUG } from "./cases";

export default function CaseStudyPage() {
  const { id } = useParams();
  const slug = (id || DEFAULT_SLUG).toLowerCase();
  const cs = CASES[slug] || CASES[DEFAULT_SLUG];

  return (
    <div className="triangle-bg text-white/70 min-h-screen">
      <header className="pt-32 pb-16 border-b border-white/[0.08]">
        <div className="container-main">
          <Breadcrumb title={cs.title} />
          <div className="reveal-up max-w-3xl">
            <p className="section-eyebrow">Case Study</p>
            <h1 className="section-title">{cs.title}</h1>
            <p className="mt-4 text-lg text-white/60">{cs.subtitle}</p>
            {(cs.stack || cs.tags)?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">{(cs.stack || cs.tags).map((t) => <Badge key={t}>{t}</Badge>)}</div>
            )}
          </div>
          <div className="mt-10 rounded-2xl border border-white/[0.08] overflow-hidden reveal-up-delay-1 surface-card">
            <Gallery items={cs.gallery || []} autoplay={false} />
          </div>
        </div>
      </header>

      <main className="pb-32">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-8">
            <article className="lg:col-span-8 space-y-6">
              <div className="surface-card p-8 reveal-up">
                <h2 className="text-xl font-bold text-white mb-4">Overview</h2>
                <p className="text-white/60 leading-relaxed">{cs.overview}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {(cs.goals || []).map((g, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-white/60"><Check className="text-white shrink-0 mt-0.5" size={16} />{g}</li>
                  ))}
                </ul>
              </div>
              <div className="surface-card p-8 reveal-up-delay-1">
                <h2 className="text-xl font-bold text-white mb-5">Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(cs.features || []).length ? cs.features.map((f) => <FeatureCard key={f} text={f} />) : <p className="text-white/40 text-sm">Coming soon.</p>}
                </div>
              </div>
            </article>
            <aside className="lg:col-span-4">
              <div className="sticky top-24 reveal-up-delay-2">
                <div className="surface-card p-7 border-white/20">
                  <h3 className="text-lg font-bold text-white">Similar project?</h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">Tell us what you're building.</p>
                  <Button href="/#contact" size="md" className="mt-5 w-full"><Send size={15} /> Get a Proposal</Button>
                </div>
              </div>
            </aside>
          </div>
          {(cs.related || []).length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-bold text-white mb-6 reveal-up">More Work</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {cs.related.map((sl, i) => <RelatedCard key={sl} slug={sl} className={i ? `reveal-up-delay-${i}` : "reveal-up"} />)}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
