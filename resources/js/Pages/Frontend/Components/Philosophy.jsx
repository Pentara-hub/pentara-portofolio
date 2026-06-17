import { useState } from "react";
import TiltCard from "../../../components/ui/TiltCard";

const CHARS = {
  automation: {
    label: "AI & Automation",
    icon: "fa-robot",
    desc: "It scaffolds APIs, writes test suites, and drafts integrations while we sleep. What it doesn't do: decide what your users actually need, or sign off on what goes to production.",
    traits: ["Boilerplate", "Test coverage", "Speed", "Repetition"],
  },
  engineers: {
    label: "Certified Engineers",
    icon: "fa-user-tie",
    desc: "Senior engineers who review every output, design for real users, and own the call on what ships. The part of building a website or app that still requires someone who gives a damn.",
    traits: ["Judgment", "UX taste", "Quality", "Accountability"],
  },
};

const MULTIPLIERS = [
  { a: "Your idea", b: "Our delivery", desc: "You bring the vision. We handle design, development, launch, and support." },
  { a: "Fast builds", b: "Real quality", desc: "MVPs in weeks, production apps in months — nothing ships half-finished." },
  { a: "Small team", b: "Direct access", desc: "No account managers. You talk to the people building your product." },
];

export default function Philosophy() {
  const [active, setActive] = useState("engineers");
  const c = CHARS[active];

  return (
    <section id="philosophy" className="py-20 md:py-28">
      <div className="container-main">
        <p className="section-eyebrow reveal-up">The Philosophy</p>
        <h2 className="section-title reveal-up max-w-3xl">You Bring the Idea.<br />We Handle the Rest.</h2>
        <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl reveal-up-delay-1">
          Building a website or mobile app shouldn't mean managing developers, chasing deadlines, or worrying about launch day. That's our job.
        </p>
        <p className="mt-4 text-white/50 max-w-2xl reveal-up-delay-1">
          We use AI to move faster on the repetitive work — then our engineers apply real judgment on design, quality, and what your users will actually experience.
        </p>

        <p className="mt-10 text-sm text-white/40 reveal-up-delay-2">Select a role to discover their part.</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-up-delay-2">
          {Object.entries(CHARS).map(([key, ch]) => (
            <button key={key} type="button" onClick={() => setActive(key)} className={`char-btn w-full surface-card p-5 sm:p-6 text-left ${active === key ? "active" : ""}`}>
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <i className={`fas ${ch.icon} text-2xl text-white`} />
              </div>
              <p className="font-bold text-white text-lg">{ch.label}</p>
            </button>
          ))}
        </div>

        <TiltCard className="mt-8 surface-card p-8 reveal-up-delay-3">
          <p className="text-white/70 leading-relaxed text-lg">{c.desc}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {c.traits.map((t) => (
              <span key={t} className="px-4 py-2 rounded-lg bg-white/10 text-sm font-semibold text-white transition-transform hover:scale-105">{t}</span>
            ))}
          </div>
        </TiltCard>

        <ul className="mt-10 grid sm:grid-cols-3 gap-4 reveal-up-delay-3">
          {MULTIPLIERS.map((m) => (
            <li key={m.a} className="surface-card p-5 hover:-translate-y-1 transition-transform">
              <p className="font-bold text-white">{m.a} <span className="text-white/30">×</span> {m.b}</p>
              <p className="text-sm text-white/50 mt-1">{m.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
