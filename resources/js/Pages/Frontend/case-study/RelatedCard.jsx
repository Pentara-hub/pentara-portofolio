import { Link } from "react-router-dom";
import Badge from "../../../components/ui/Badge";
import { CASES, DEFAULT_SLUG } from "./cases";

const ICONS = { default: "fas fa-layer-group", Aklemy: "fas fa-graduation-cap", misteral: "fas fa-notes-medical", fairwheels: "fas fa-car", habittracker: "fas fa-calendar-check", mymap: "fas fa-map-marker-alt" };

export default function RelatedCard({ slug, className = "" }) {
  const it = CASES[slug] || CASES[DEFAULT_SLUG];
  const tags = it?.stack || it?.tags || [];
  return (
    <Link to={`/case-study/${slug}`} className={`project-card group block ${className}`}>
      <div className="h-32 bg-white/[0.03] flex items-center justify-center border-b border-white/[0.06]">
        <i className={`${ICONS[slug] || ICONS.default} text-accent/40 text-3xl group-hover:text-accent/70 transition-colors`} />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-fg">{it?.title}</h3>
        <p className="text-sm text-muted mt-1 line-clamp-2">{it?.subtitle}</p>
        {tags.length > 0 && <div className="mt-3 flex flex-wrap gap-1.5">{tags.slice(0, 3).map((t) => <Badge key={t}>{t}</Badge>)}</div>}
      </div>
    </Link>
  );
}
