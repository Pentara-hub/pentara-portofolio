import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  SquareCheck,
  BarChart3,
  Layers,
  Wand2,
  CreditCard,
  CloudDownload,
  Search,
  FileSpreadsheet,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

function featureIconFor(text) {
  const t = (text || "").toLowerCase();
  if (t.includes("course")) return GraduationCap;
  if (t.includes("role") || t.includes("rbac")) return ShieldCheck;
  if (t.includes("quiz") || t.includes("proctor")) return SquareCheck;
  if (t.includes("analytics") || t.includes("progress")) return BarChart3;
  if (t.includes("multi-tenant") || t.includes("theming")) return Layers;
  if (t.includes("recommendation") || t.includes("ai")) return Wand2;
  if (t.includes("checkout") || t.includes("payment")) return CreditCard;
  if (t.includes("offline")) return CloudDownload;
  if (t.includes("search")) return Search;
  if (t.includes("export") || t.includes("csv") || t.includes("excel"))
    return FileSpreadsheet;
  if (t.includes("alert")) return AlertTriangle;
  return CheckCircle2;
}

function FeatureCard({ text }) {
  const Icon = featureIconFor(text);
  return (
    <div className="group p-4 rounded-xl border bg-white/70 dark:bg-slate-900/40 dark:border-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_35px_-16px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3">
        <div className="shrink-0 w-10 h-10 grid place-items-center rounded-lg bg-gradient-to-br from-primary/10 to-sky-300/10 text-primary">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-800 dark:text-slate-100">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
