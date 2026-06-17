import Button from "../../../components/ui/Button";
import { ENGAGEMENT_MODES } from "../../../data/pentaraData";
import EngagementPanel from "./EngagementPanel";
import ScrollIndicator from "./ScrollIndicator";

const COLORS = { m1: "#00E8FF", m2: "#A78BFA", m3: "#FB923C", y: "#F472B6", p: "#60A5FA" };

export default function Hero({ onModeClick, activeMode }) {
  const handleMode = (id) => {
    onModeClick?.(id);
    document.getElementById("engagement-modes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section relative min-h-[92vh] flex flex-col">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-main flex-1 flex flex-col justify-center py-12 sm:py-16 md:py-20 relative z-10 min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-w-0">
          <div className="reveal-up min-w-0">
            <span className="badge-pill mb-6 sm:mb-8"><span className="relative z-[1]">AI-First Engineering</span></span>
            <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-white break-words">
              Built Fast.<br />
              Built Right.<br />
              <span className="text-white/45">That's Pentara.</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl reveal-up-delay-1">
              Websites and mobile apps — designed, built, and launched fast. You bring the idea, we handle everything else. Cloud solutions included when you need them. No stress, no surprises.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 reveal-up-delay-2">
              <Button href="#engagement-modes" size="lg" variant="neon" className="w-full sm:w-auto justify-center">Pick Your Mode</Button>
              <Button href="#philosophy" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">Our Philosophy</Button>
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 md:gap-16 reveal-up-delay-3">
              {[["Web & Mobile", "Our Focus"], ["15+", "Products Delivered"], ["4–8 wks", "Idea to Live"]].map(([v, l]) => (
                <div key={l} className="stat-bracket min-w-0">
                  <span className="bracket-tr" aria-hidden="true" />
                  <span className="bracket-bl" aria-hidden="true" />
                  <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white px-1 sm:px-2 neon-text break-words">{v}</p>
                  <p className="text-[10px] sm:text-xs text-white/40 mt-2 uppercase tracking-widest leading-snug">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-up-delay-2 relative">
            <EngagementPanel onSelect={handleMode} activeId={activeMode} />
          </div>
        </div>

        {/* Mobile mode pills */}
        <div className="mt-12 lg:hidden reveal-up-delay-3 min-w-0">
          <p className="section-eyebrow mb-4 text-neon">Engagement Modes</p>
          <div className="scroll-row">
            {ENGAGEMENT_MODES.map((m) => (
              <button key={m.id} type="button" onClick={() => handleMode(m.id)} className="mode-pill shrink-0 w-[9.5rem]"
                style={{ "--mode-color": COLORS[m.id] }}>
                <span className="text-lg font-extrabold" style={{ color: COLORS[m.id] }}>{m.code}</span>
                <span className="text-sm font-semibold text-white mt-1">{m.label}</span>
                <span className="text-xs text-white/40 mt-0.5">{m.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}
