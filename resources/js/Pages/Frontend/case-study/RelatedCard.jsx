import React from "react";
import { Layers } from "lucide-react";
import { CASES, DEFAULT_SLUG } from "./cases";

function RelatedCard({ slug }) {
  const it = CASES[slug] || CASES[DEFAULT_SLUG];
  return (
    <a
      href={`?id=${encodeURIComponent(slug)}`}
      className="block rounded-xl overflow-hidden border bg-white dark:bg-slate-900/40 dark:border-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_35px_-16px_rgba(0,0,0,0.35)]"
    >
      <div className="h-36 bg-gradient-to-r from-primary to-sky-400 grid place-items-center text-white">
        <Layers />
      </div>
      <div className="p-4">
        <div className="font-semibold">{it.title}</div>
        <div className="text-sm opacity-80">{it.subtitle}</div>
      </div>
    </a>
  );
}
export default RelatedCard;
