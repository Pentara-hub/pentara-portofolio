import React from "react";
import Spline from "@splinetool/react-spline";

export default function Orbit({
  url = "https://prod.spline.design/DrJJInQKm8xfEi8b/scene.splinecode?v=2",
  className = "",
}) {
  return (
    <div className={`relative w-full h-full min-h-[360px] overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          transform: "scale(1.15) translateX(8%)",
          transformOrigin: "center center",
        }}
      >
        <Spline scene={url} />
      </div>
    </div>
  );
}
