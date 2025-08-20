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
    w < 970
      ? { h: "h-[720px]", scale: 1.1836, shift: 30, origin: "center right" }
      : w < 1024
      ? { h: "h-[720px]", scale: 1.1836, shift: 30, origin: "center right" }
      : w < 1080
      ? { h: "h-[700px]", scale: 1.1899, shift: 30.5, origin: "center right" }
      : w < 1130
      ? { h: "h-[680px]", scale: 1.1965, shift: 30, origin: "center right" }
      : w < 1170
      ? { h: "h-[680px]", scale: 1.1967, shift: 30, origin: "center right" }
      : w < 1190
      ? { h: "h-[680px]", scale: 1.1969, shift: 30, origin: "center right" }
      : w < 1220
      ? { h: "h-[680px]", scale: 1.1969, shift: 15, origin: "center right" }
      : w < 1280
      ? { h: "h-[680px]", scale: 1.1969, shift: 15, origin: "center right" }
      : {
          h: "h-[680px]",
          scale: 1.198,
          shift: 80,
          origin: "center right",
        };

  if (w < 940) return null;

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
