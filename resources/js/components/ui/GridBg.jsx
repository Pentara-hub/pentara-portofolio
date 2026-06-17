export default function AmbientBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 mesh-void" />
      <div className="absolute inset-0 dot-field opacity-40" />
    </div>
  );
}
