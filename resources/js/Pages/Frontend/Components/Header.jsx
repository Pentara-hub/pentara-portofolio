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
      <div className="bg-brand/80 border-b border-white/10 text-center py-2 px-3 text-xs">
        <span className="text-white/90">
          <strong className="text-white">Pentara</strong>
          <span className="hidden md:inline"> — Web & mobile engineering · You bring the idea, we handle the rest · </span>
          <span className="md:hidden"> — </span>
          <a href="#contact" className="underline hover:text-white transition-colors whitespace-nowrap">Book a free consultation →</a>
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="container-main">
          <div className="flex items-center justify-between h-14 sm:h-[4.5rem] gap-3">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0 group">
              <img src="/images/logo.png" alt="Pentara" className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform group-hover:scale-110" />
              <div className="min-w-0">
                <span className="font-bold text-white text-sm block leading-tight">Pentara</span>
                <span className="hidden sm:block text-[10px] text-white/50 leading-tight">Built fast. Built right. Built to last.</span>
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
