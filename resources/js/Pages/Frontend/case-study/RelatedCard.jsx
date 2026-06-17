import { Link } from "react-router-dom";
import Badge from "../../../components/ui/Badge";
import { resolveCase } from "./cases";

const ICONS = {
  default: "fas fa-layer-group",
  aklemy: "fas fa-graduation-cap",
  misteral: "fas fa-notes-medical",
  fairwheels: "fas fa-car",
  habittracker: "fas fa-calendar-check",
  mymap: "fas fa-map-marker-alt",
  schedulepro: "fas fa-calendar-alt",
};

export default function RelatedCard({ slug, className = "" }) {
  const { data: it, slug: canonicalSlug } = resolveCase(slug);
  const tags = it?.stack || it?.tags || [];
  const icon = ICONS[canonicalSlug.toLowerCase()] || ICONS.default;

  return (
    <Link to={`/case-study/${canonicalSlug}`} className={`related-work-card group ${className}`}>
      <div className="related-work-card-icon" aria-hidden="true">
        <i className={`${icon} related-work-card-icon-glyph`} />
      </div>
      <div className="related-work-card-body">
        <h3 className="related-work-card-title">{it?.title}</h3>
        <p className="related-work-card-subtitle">{it?.subtitle}</p>
        {tags.length > 0 && (
          <div className="related-work-card-tags">
            {tags.slice(0, 3).map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
        )}
      </div>
    </Link>
  );
}
