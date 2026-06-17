export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white/70 border border-white/10 ${className}`}>
      {children}
    </span>
  );
}
