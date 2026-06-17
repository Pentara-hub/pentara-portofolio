import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../components/ui/Button";

const nav = [
  { label: "How We Build", hash: "how-we-build" },
  { label: "What We Build", hash: "what-we-build" },
  { label: "Work", hash: "work" },
  { label: "Team", hash: "team" },
  { label: "Contact", hash: "contact" },
];

export default function Header({ onContact }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="bg-brand/80 border-b border-white/10 text-center py-2 text-xs">
        <span className="text-white/90">
          <strong className="text-white">Pentara</strong> — Web & mobile engineering · You bring the idea, we handle the rest ·{" "}
          <a href="#contact" className="underline hover:text-white transition-colors">Book a free consultation →</a>
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="container-main">
          <div className="flex items-center justify-between h-[4.5rem]">
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img src="/images/logo.png" alt="Pentara" className="w-9 h-9 transition-transform group-hover:scale-110" />
              <div className="hidden sm:block">
                <span className="font-bold text-white text-sm block">Pentara</span>
                <span className="text-[10px] text-white/50">Built fast. Built right. Built to last.</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => (
                <a key={n.hash} href={`#${n.hash}`} className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors hover:-translate-y-0.5 duration-200">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button variant="neon" size="sm" onClick={onContact}>Book a Free Consultation</Button>
            </div>

            <button onClick={() => setOpen((o) => !o)} className="lg:hidden w-11 h-11 rounded-xl border border-white/20 flex items-center justify-center text-white" aria-label="Menu">
              <i className={`fas ${open ? "fa-times" : "fa-bars"} text-sm`} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brand-dark/98 pt-28 px-5">
          <div className="space-y-2">
            {nav.map((n) => (
              <a key={n.hash} href={`#${n.hash}`} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl text-white/70 hover:text-white font-medium text-lg">{n.label}</a>
            ))}
            <Button className="w-full mt-4" variant="neon" onClick={() => { setOpen(false); onContact?.(); }}>Book a Free Consultation</Button>
          </div>
        </div>
      )}
    </>
  );
}
