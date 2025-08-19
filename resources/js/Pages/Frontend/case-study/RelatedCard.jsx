import React from "react";
import { Link } from "react-router-dom";
import { CASES, DEFAULT_SLUG } from "./cases";

const GRADIENTS = {
  default: "from-blue-500 to-cyan-400",
  "eduplatform-pro": "from-blue-500 to-cyan-400",
  shopswift: "from-fuchsia-500 to-pink-500",
  datainsight: "from-emerald-500 to-teal-400",
};

const FA_ICONS = {
  default: "fas fa-layer-group",
  "eduplatform-pro": "fas fa-graduation-cap",
  shopswift: "fas fa-shopping-bag",
  datainsight: "fas fa-chart-pie",
};

export default function RelatedCard({
  slug,
  className = "",
  basePath = "/case-study",
  useQuery = false,
}) {
  const it = CASES[slug] || CASES[DEFAULT_SLUG];
  const grad = it?.gradient || GRADIENTS[slug] || GRADIENTS.default;
  const faIcon = it?.faIcon || FA_ICONS[slug] || FA_ICONS.default;
  const tags = it?.stack || it?.tags || [];

  const to = useQuery
    ? { pathname: basePath, search: `?id=${encodeURIComponent(slug)}` }
    : `${basePath}/${encodeURIComponent(slug)}`;

  return (
    <Link
      to={to}
      aria-label={`Open case study: ${it?.title || "Case Study"}`}
      className={`group block rounded-2xl overflow-hidden
                  ring-1 ring-slate-200 dark:ring-slate-800
                  bg-white/80 dark:bg-[#1E2A3B] backdrop-blur
                  hover:-translate-y-1 transition-all duration-300
                  shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)]
                  ${className}`}
    >
      {/* Header */}
      <div className={`h-40 bg-gradient-to-r ${grad} grid place-items-center`}>
        <i className={`${faIcon} text-white text-5xl`} aria-hidden="true" />
      </div>

      {/* Body */}
      <div className="p-6 bg-white dark:bg-transparent">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          {it?.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
          {it?.subtitle}
        </p>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 6).map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-md
                           bg-slate-100 text-slate-700 ring-1 ring-slate-200
                           dark:bg-blue-900/30 dark:text-blue-100 dark:ring-blue-800/40"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 inline-flex items-center gap-2 font-medium text-sky-600 dark:text-sky-400">
          <span>View case study</span>
          <i className="fas fa-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
