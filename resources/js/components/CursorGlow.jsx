import useCursorGlow from "../hooks/useCursorGlow";

export default function CursorGlow() {
  useCursorGlow();

  return (
    <div className="cursor-glow-layer" aria-hidden="true">
      <div className="cursor-glow-primary" />
      <div className="cursor-glow-secondary" />
    </div>
  );
}
