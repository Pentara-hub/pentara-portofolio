import { useState } from "react";
import { SERVICE_CLUSTERS } from "../../../data/pentaraData";
import TiltCard from "../../../components/ui/TiltCard";

export default function WhatWeBuild() {
  const [active, setActive] = useState(SERVICE_CLUSTERS[0]);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="what-we-build" className="py-20 md:py-28 bg-brand/20">
      <div className="container-main">
        <p className="section-eyebrow reveal-up">What We Build</p>
        <h2 className="section-title reveal-up">Five Clusters.<br />One Delivery Engine.</h2>
        <p className="mt-4 text-white/60 max-w-2xl reveal-up-delay-1">
          Websites, mobile apps, and cloud when you need it — one team that owns the full journey. You share the idea, we deliver the product.
        </p>
        <p className="mt-2 text-sm text-white/30 reveal-up-delay-1">Click a cluster to explore</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 reveal-up-delay-2">
          {SERVICE_CLUSTERS.map((c) => (
            <button key={c.id} type="button" onClick={() => setActive(c)}
              onMouseEnter={() => setHovered(c.id)} onMouseLeave={() => setHovered(null)}
              className={`cluster-card ${active.id === c.id ? "active" : ""}`}>
              <p className="text-[10px] font-bold tracking-widest uppercase text-white/40">{c.label}</p>
              <p className="text-xs text-white/30 mt-1">{c.count} services</p>
              <h3 className="text-2xl font-extrabold text-white mt-4">{c.title}</h3>
              <p className="text-sm text-white/50 mt-2">{c.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                enter <i className="fas fa-arrow-right" />
              </span>
            </button>
          ))}
        </div>

        <TiltCard className="mt-8 surface-card p-8 md:p-10 reveal-up" intensity={6}>
          <div className="flex items-center gap-3 text-sm text-white/40 mb-6">
            <span>{active.title}</span>
            <span>/</span>
            <span className="text-white/70">{active.services[0]?.name}</span>
          </div>
          <h3 className="text-3xl font-extrabold text-white">{active.title}</h3>
          <p className="text-white/50 mt-2">{active.tagline}</p>
          <p className="text-xs text-white/30 mt-1">— Capabilities · {active.count}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {active.services.map((s) => (
              <div key={s.id}
                className={`p-5 rounded-xl border transition-all duration-300 cursor-default
                  ${hovered === active.id ? "border-white/20 bg-white/5 -translate-y-1" : "border-white/8 bg-white/[0.02]"}`}
                onMouseEnter={(e) => e.currentTarget.classList.add("!-translate-y-2", "!border-white/30")}
                onMouseLeave={(e) => e.currentTarget.classList.remove("!-translate-y-2", "!border-white/30")}>
                <p className="text-xs text-white/30 font-mono">{s.id}</p>
                <p className="font-bold text-white mt-1">{s.name}</p>
                <p className="text-sm text-white/50 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
