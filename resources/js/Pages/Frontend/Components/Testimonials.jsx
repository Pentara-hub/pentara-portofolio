import { useState } from "react";
import { TESTIMONIALS } from "../../../data/pentaraData";
import TiltCard from "../../../components/ui/TiltCard";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand/20">
      <div className="container-main">
        <p className="section-eyebrow reveal-up">What Clients Say</p>
        <h2 className="section-title reveal-up">They Hired Us to Ship.<br /><em>Here's What Happened.</em></h2>

        <div className="mt-6 flex items-center gap-4 reveal-up-delay-1">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-white font-bold">5.0</span>
          <span className="text-white/40 text-sm">Across EdTech, SaaS, and enterprise builds</span>
        </div>

        <TiltCard className="mt-10 surface-card p-10 md:p-14 reveal-up-delay-2" intensity={5}>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">"{t.quote}"</p>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">{t.role}</p>
              <p className="text-sm text-white/50">{t.company}</p>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-10 h-10 rounded-lg border border-white/15 hover:bg-white/10 transition-all hover:-translate-x-0.5"><i className="fas fa-chevron-left" /></button>
              <button type="button" onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)} className="w-10 h-10 rounded-lg border border-white/15 hover:bg-white/10 transition-all hover:translate-x-0.5"><i className="fas fa-chevron-right" /></button>
            </div>
          </div>
        </TiltCard>

        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} type="button" onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/30"}`} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
