import { useRef, useCallback } from "react";

export default function useTilt(intensity = 14, lift = true) {
  const ref = useRef(null);
  const frame = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = -y * intensity;
      const ry = x * intensity;
      const liftY = lift ? -8 : 0;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(${liftY}px) scale(1.02)`;
      el.style.setProperty("--glow-x", `${50 + x * 40}%`);
      el.style.setProperty("--glow-y", `${50 + y * 40}%`);
    });
  }, [intensity, lift]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    el.style.setProperty("--glow-x", "50%");
    el.style.setProperty("--glow-y", "50%");
    setTimeout(() => { if (el) el.style.transition = ""; }, 600);
  }, []);

  const onEnter = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transition = "transform 0.1s ease-out";
  }, []);

  return { ref, onMove, onLeave, onEnter };
}
