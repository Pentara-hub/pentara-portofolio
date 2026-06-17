import { useState } from "react";
import { ENGAGEMENT_MODES } from "../../../data/pentaraData";
import TiltCard from "../../../components/ui/TiltCard";
import Button from "../../../components/ui/Button";

const QUIZ = {
  start: { q: "Where are you starting from?", options: [
    { label: "An idea or napkin sketch", val: "idea" },
    { label: "A spec ready to build", val: "spec" },
    { label: "A working product in production", val: "prod" },
    { label: "A high-stakes technical decision", val: "decision" },
  ]},
  timeline: { q: "What's your timeline?", options: [
    { label: "Fast — days to a few weeks", val: "fast" },
    { label: "A few months — a full build", val: "months" },
    { label: "Ongoing — long-term partnership", val: "ongoing" },
  ]},
};

function getFit(start, timeline) {
  if (start === "idea") return timeline === "fast" ? "y" : "m1";
  if (start === "spec") return timeline === "fast" ? "m1" : "m2";
  if (start === "prod") return timeline === "ongoing" ? "m3" : "m3";
  return timeline === "fast" ? "p" : "m2";
}

export default function EngagementModes({ activeId, onSelect }) {
  const [idx, setIdx] = useState(0);
  const [quizStep, setQuizStep] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const mode = ENGAGEMENT_MODES.find((m) => m.id === (activeId || ENGAGEMENT_MODES[idx].id)) || ENGAGEMENT_MODES[idx];

  const selectMode = (i) => {
    setIdx(i);
    onSelect?.(ENGAGEMENT_MODES[i].id);
  };

  const fitId = quizStep === "result" ? getFit(quizAnswers.start, quizAnswers.timeline) : null;
  const fitMode = fitId ? ENGAGEMENT_MODES.find((m) => m.id === fitId) : null;

  return (
    <section id="engagement-modes" className="py-20 md:py-28">
      <div className="container-main min-w-0">
        <p className="section-eyebrow reveal-up">Engagement Modes</p>
        <h2 className="section-title reveal-up">Pick Your Mode.</h2>
        <p className="mt-4 text-white/60 max-w-2xl reveal-up-delay-1">
          Every mode is a real engagement model — with a timeline, a team, and a track record. Tell us where you are, and we'll match you to how we actually work.
        </p>

        <div className="mt-10 scroll-row scroll-row--lg-wrap reveal-up-delay-2" role="tablist">
          {ENGAGEMENT_MODES.map((m, i) => (
            <button key={m.id} role="tab" aria-selected={mode.id === m.id} onClick={() => selectMode(i)}
              className={`mode-pill shrink-0 w-[9.5rem] lg:shrink lg:flex-1 lg:min-w-[8.5rem] lg:w-auto ${mode.id === m.id ? "active" : ""}`}>
              <span className="font-extrabold text-white">{m.code}</span>
              <span className="text-xs text-white/70">{m.label}</span>
              <span className="text-[10px] text-white/40">{m.timeline}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-white/40">
          <span>{idx + 1} / {ENGAGEMENT_MODES.length}</span>
          <div className="flex gap-2">
            <button type="button" disabled={idx === 0} onClick={() => selectMode(idx - 1)} className="w-10 h-10 rounded-lg border border-white/15 disabled:opacity-30 hover:bg-white/10 transition-colors"><i className="fas fa-chevron-left" /></button>
            <button type="button" disabled={idx === ENGAGEMENT_MODES.length - 1} onClick={() => selectMode(idx + 1)} className="w-10 h-10 rounded-lg border border-white/15 disabled:opacity-30 hover:bg-white/10 transition-colors"><i className="fas fa-chevron-right" /></button>
          </div>
        </div>

        <TiltCard className="mt-6 surface-card p-6 sm:p-8 md:p-12 reveal-up" intensity={8}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">{mode.title}</h3>
          <p className="mt-4 text-white/60 leading-relaxed max-w-2xl">{mode.desc}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {mode.tags.map((t) => <span key={t} className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold text-white hover:scale-105 transition-transform">{t}</span>)}
          </div>
          <p className="mt-8 text-sm text-white/50"><strong className="text-white/70">Real projects, not hypotheticals —</strong> {mode.proof}</p>
        </TiltCard>

        {!quizStep && (
          <div className="mt-10 text-center surface-card p-6 sm:p-8 reveal-up-delay-2">
            <p className="text-white/60">Still not sure? <strong className="text-white">Answer 2 quick questions</strong> and we'll point you to the right team.</p>
            <Button className="mt-4" onClick={() => setQuizStep("start")}>Take the 2-min quiz →</Button>
          </div>
        )}

        {quizStep && quizStep !== "result" && (
          <div className="mt-10 surface-card p-8 reveal-up">
            <h3 className="text-xl font-bold text-white mb-6">{QUIZ[quizStep].q}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {QUIZ[quizStep].options.map((o) => (
                <button key={o.val} type="button" onClick={() => {
                  const next = { ...quizAnswers, [quizStep]: o.val };
                  setQuizAnswers(next);
                  if (quizStep === "start") setQuizStep("timeline");
                  else setQuizStep("result");
                }} className="p-4 rounded-xl border border-white/10 text-left text-white/80 hover:border-white/30 hover:bg-white/5 hover:-translate-y-1 transition-all">
                  {o.label}
                </button>
              ))}
            </div>
            {quizStep === "timeline" && <button type="button" onClick={() => setQuizStep("start")} className="mt-4 text-sm text-white/40 hover:text-white">← Back</button>}
          </div>
        )}

        {quizStep === "result" && fitMode && (
          <div className="mt-10 surface-card p-8 reveal-up border-white/20">
            <h3 className="text-xl font-bold text-white">Your fit: <span className="text-white/70">{fitMode.code} {fitMode.label}</span></h3>
            <p className="text-white/60 mt-2">{fitMode.subtitle} · {fitMode.timeline}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button onClick={() => { const i = ENGAGEMENT_MODES.findIndex((m) => m.id === fitMode.id); selectMode(i); setQuizStep(null); }}>Show me this mode →</Button>
              <Button variant="secondary" onClick={() => { setQuizStep(null); setQuizAnswers({}); }}>Restart quiz</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
