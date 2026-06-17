import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../../data/pentaraData";
import Button from "../../../components/ui/Button";
import TiltCard from "../../../components/ui/TiltCard";

export default function ProjectsShowcase() {
  const [idx, setIdx] = useState(0);
  const p = PROJECTS[idx];

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-main">
        <p className="section-eyebrow reveal-up">Solution in Action</p>
        <h2 className="section-title reveal-up">A Glimpse of Our Projects</h2>
        <p className="mt-4 text-white/60 reveal-up-delay-1">Real websites and apps, real deadlines — from LMS platforms to mobile MVPs. You bring the idea, we deliver the product.</p>

        <TiltCard className="mt-12 surface-card overflow-hidden reveal-up-delay-2" intensity={6}>
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center min-w-0">
              <p className="text-xs font-bold tracking-widest uppercase text-white/40">{p.category} · {p.mode}</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3">{p.title}</h3>
              <p className="text-white/60 mt-4 leading-relaxed">{p.desc}</p>
              <Link to={`/case-study/${p.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all">
                Visit {p.title} <i className="fas fa-arrow-right" />
              </Link>
            </div>
            <div className="bg-white/[0.03] min-h-[280px] flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
              {p.image ? (
                <img src={p.image} alt={p.title} className="max-h-72 object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-500" />
              ) : (
                <i className={`fas ${p.icon} text-8xl text-white/15`} />
              )}
            </div>
          </div>
          <div className="px-4 sm:px-8 py-4 border-t border-white/[0.06] flex items-center justify-between bg-black/20 gap-3">
            <div className="flex gap-2">
              {PROJECTS.map((_, i) => (
                <button key={i} type="button" onClick={() => setIdx(i)} aria-label={`Project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => setIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)} className="w-10 h-10 rounded-lg border border-white/15 hover:bg-white/10 transition-colors"><i className="fas fa-chevron-left text-sm" /></button>
              <button type="button" onClick={() => setIdx((i) => (i + 1) % PROJECTS.length)} className="w-10 h-10 rounded-lg border border-white/15 hover:bg-white/10 transition-colors"><i className="fas fa-chevron-right text-sm" /></button>
            </div>
          </div>
        </TiltCard>

        <div className="mt-12 text-center surface-card p-6 sm:p-10 reveal-up-delay-3">
          <h3 className="text-2xl font-extrabold text-white">Your Product Could Be Next</h3>
          <p className="text-white/60 mt-3">You've seen the work. Tell us what you're building — we'll tell you honestly which mode fits and what the first 30 days look like.<br /><em className="text-white/80 not-italic">Free 30-minute</em> consultation. No pitch deck required.</p>
          <Button href="#contact" size="lg" className="mt-6">Your Product Could Be Next</Button>
        </div>
      </div>
    </section>
  );
}
