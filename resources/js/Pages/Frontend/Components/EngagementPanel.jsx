import useTilt from "../../../hooks/useTilt";
import { ENGAGEMENT_MODES } from "../../../data/pentaraData";

const COLORS = {
  m1: "#00E8FF",
  m2: "#A78BFA",
  m3: "#FB923C",
  y: "#F472B6",
  p: "#60A5FA",
};

export default function EngagementPanel({ onSelect, activeId }) {
  const { ref, onMove, onLeave, onEnter } = useTilt(18, false);

  return (
    <div className="engagement-panel-wrap hidden lg:block">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onMouseEnter={onEnter}
        className="engagement-panel"
      >
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neon mb-5">Engagement Modes</p>
        <div className="space-y-1">
          {ENGAGEMENT_MODES.map((m) => {
            const color = COLORS[m.id] || "#00E8FF";
            const active = activeId === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => onSelect?.(m.id)}
                className={`mode-row w-full ${active ? "active" : ""}`}
                style={{ "--mode-color": color }}
              >
                <span className="mode-icon" style={{ background: `${color}22`, borderColor: `${color}55`, color }}>
                  {m.code}
                </span>
                <span className="flex-1 text-left">
                  <span className="block text-sm font-bold text-white">{m.label} Mode</span>
                </span>
                <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">{m.subtitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
