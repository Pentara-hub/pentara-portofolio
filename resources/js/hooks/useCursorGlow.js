import { useEffect } from "react";

export default function useCursorGlow() {
  useEffect(() => {
    let raf;
    let x = 50;
    let y = 50;
    let x2 = 50;
    let y2 = 50;
    let tx = 50;
    let ty = 50;

    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
    };

    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      x2 += (tx - x2) * 0.04;
      y2 += (ty - y2) * 0.04;

      const root = document.documentElement;
      root.style.setProperty("--glow-x", `${x}%`);
      root.style.setProperty("--glow-y", `${y}%`);
      root.style.setProperty("--glow-x2", `${x2}%`);
      root.style.setProperty("--glow-y2", `${y2}%`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
