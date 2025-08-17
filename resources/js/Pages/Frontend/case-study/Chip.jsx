function Chip({ children }) {
  return (
    <span className="text-[0.75rem] px-2 py-1 rounded-full border bg-white/10 text-slate-200 border-white/20">
      {children}
    </span>
  );
}
export default Chip;
