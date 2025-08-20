import React from "react";
import Spline from "@splinetool/react-spline";

function useViewportWidth() {
  const [w, setW] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  React.useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

export default function Orbit({
  url = "https://prod.spline.design/DrJJInQKm8xfEi8b/scene.splinecode?v=2",
  className = "",
  // baseline height (will be overridden by breakpoint cfg below)
  height = "h-[560px]",
}) {
  const w = useViewportWidth();

  // 🔧 per-breakpoint tuning (edit these as you like)
  const cfg =
    w < 640
      ? { h: "h-[0px]", scale: 0, shift: 0, origin: "center" } // hidden on mobile if container omitted
      : w < 951
      ? { h: "h-[360px]", scale: 1.2, shift: 0, origin: "center right" }
      : w < 1024
      ? { h: "h-[520px]", scale: 1.28, shift: 40, origin: "center right" } // 👈 768–1023px (your screenshot)
      : w < 1280
      ? { h: "h-[600px]", scale: 1.25, shift: 30, origin: "center right" }
      : { h: "h-[680px]", scale: 1.4, shift: 60, origin: "center right" };

  // If you completely hide on mobile, you can also return null when w<640
  if (w < 640) return null;

  return (
    <div
      className={`relative w-full overflow-hidden ${
        cfg.h || height
      } ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${cfg.scale}) translateX(${cfg.shift}px)`,
          transformOrigin: cfg.origin,
          background: "transparent",
        }}
      >
        <Spline scene={url} />
      </div>
    </div>
  );
}
