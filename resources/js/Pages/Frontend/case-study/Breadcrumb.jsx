import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ title }) {
  return (
    <nav className="mb-8 reveal-up" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-dim">
        <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
        <li><ChevronRight size={14} className="opacity-40" /></li>
        <li><Link to="/#work" className="hover:text-accent transition-colors">Work</Link></li>
        <li><ChevronRight size={14} className="opacity-40" /></li>
        <li className="text-fg truncate max-w-[200px]">{title}</li>
      </ol>
    </nav>
  );
}
