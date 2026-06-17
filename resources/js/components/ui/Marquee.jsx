export default function Marquee({ items, speed = 35, variant = "default", reverse = false }) {
  const doubled = [...items, ...items];
  const cls = variant === "neon" ? "tech-chip" : "text-sm font-bold text-white/30 whitespace-nowrap uppercase tracking-wider";
  return (
    <div className={`marquee-fade overflow-hidden py-3 group/marquee ${reverse ? "mt-2" : ""}`}>
      <div
        className={`flex gap-6 w-max group-hover/marquee:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          variant === "neon" ? (
            <span key={`${item}-${i}`} className={cls}>{item}</span>
          ) : (
            <span key={`${item}-${i}`} className={`${cls} hover:text-white/60 transition-colors`}>{item}</span>
          )
        ))}
      </div>
    </div>
  );
}
