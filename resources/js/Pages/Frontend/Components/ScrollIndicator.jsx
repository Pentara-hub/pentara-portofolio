export default function ScrollIndicator() {
  return (
    <a href="#technologies" className="scroll-indicator" aria-label="Scroll down">
      <div className="scroll-mouse">
        <div className="scroll-wheel" />
      </div>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neon/60 mt-3">Scroll</span>
    </a>
  );
}
