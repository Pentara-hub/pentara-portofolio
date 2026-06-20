import { useEffect } from "react";

export default function useCursorGlow() {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e) => {
      const { clientX, clientY } = e;
      root.style.setProperty("--glow-x", `${clientX}px`);
      root.style.setProperty("--glow-y", `${clientY}px`);
      root.style.setProperty("--glow-x2", `${clientX}px`);
      root.style.setProperty("--glow-y2", `${clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
}
