import { CheckCircle2, GraduationCap, ShieldCheck, SquareCheck, BarChart3, Layers, Wand2, CreditCard, CloudDownload, Search, FileSpreadsheet, AlertTriangle } from "lucide-react";

const iconFor = (t) => {
  const s = (t || "").toLowerCase();
  if (s.includes("course")) return GraduationCap;
  if (s.includes("role") || s.includes("rbac")) return ShieldCheck;
  if (s.includes("quiz")) return SquareCheck;
  if (s.includes("analytics")) return BarChart3;
  if (s.includes("tenant") || s.includes("theming")) return Layers;
  if (s.includes("ai") || s.includes("recommend")) return Wand2;
  if (s.includes("payment") || s.includes("checkout")) return CreditCard;
  if (s.includes("offline")) return CloudDownload;
  if (s.includes("search")) return Search;
  if (s.includes("export") || s.includes("csv")) return FileSpreadsheet;
  if (s.includes("alert")) return AlertTriangle;
  return CheckCircle2;
};

export default function FeatureCard({ text }) {
  const Icon = iconFor(text);
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex items-center gap-3 hover:border-accent/20 transition-colors">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
        <Icon size={16} />
      </div>
      <span className="text-sm text-fg leading-snug">{text}</span>
    </div>
  );
}
