import useTilt from "../../hooks/useTilt";

export default function TiltCard({ children, className = "", intensity = 10 }) {
  const { ref, onMove, onLeave } = useTilt(intensity);
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
