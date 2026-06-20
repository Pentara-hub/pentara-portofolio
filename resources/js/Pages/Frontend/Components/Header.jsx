import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../components/ui/Button";

const nav = [
  { label: "Home", path: "/" },
  { label: "How We Build", path: "/#how-we-build" },
  { label: "What We Build", path: "/#what-we-build" },
  { label: "Work", path: "/#work" },
  { label: "Team", path: "/#team" },
  { label: "Contact", path: "/#contact" },
];

const DESKTOP_HEADER_HEIGHT = "6.75rem"; // announcement bar + nav (lg)
const SCROLL_THRESHOLD = 24;

function NavLink({ item, className, onNavigate }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleClick = (e) => {
    onNavigate?.();
    if (item.path === "/" && isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link to={item.path} className={className} onClick={handleClick}>
      {item.label}
    </Link>
  );
}

export default function Header({ onContact }) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("header-scrolled", scrolled);
    return () => document.documentElement.classList.remove("header-scrolled");
  }, [scrolled]);

  const closeMenu = () => setOpen(false);
  const desktopLinkClass = "px-3 xl:px-4 py-2 text-sm text-white/60 hover:text-white transition-colors hover:-translate-y-0.5 duration-200 whitespace-nowrap";
  const mobileLinkClass = "block px-4 py-3 rounded-xl text-white/70 hover:text-white font-medium text-lg";

  return (
    <>
      <div className="lg:fixed lg:top-0 lg:inset-x-0 lg:z-50 w-full">
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
          aria-hidden={scrolled}
        >
          <div className="overflow-hidden">
            <div className="bg-brand/80 border-b border-white/10 text-center py-2 px-3 text-xs">
              <span className="text-white/90">
                <strong className="text-white">Pentara</strong>
                <span className="hidden md:inline"> — Web & mobile engineering · You bring the idea, we handle the rest · </span>
                <span className="md:hidden"> — </span>
                <Link to="/#contact" className="underline hover:text-white transition-colors whitespace-nowrap">Book a free consultation →</Link>
              </span>
            </div>
          </div>
        </div>

        <header className="sticky top-0 lg:static z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/[0.06]">
          <div className="container-main">
            <div className="flex items-center justify-between h-14 sm:h-[4.5rem] gap-2 sm:gap-3">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0 group">
              <img src="/images/logo.png" alt="Pentara" className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform group-hover:scale-110" />
              <div className="min-w-0">
                <span className="font-bold text-white text-sm block leading-tight">Pentara</span>
                <span className="hidden sm:block text-[10px] text-white/50 leading-tight">Built fast. Built right. Built to last.</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 min-w-0">
              {nav.map((n) => (
                <NavLink key={n.path} item={n} className={desktopLinkClass} />
              ))}
            </nav>

            <div className="hidden lg:block shrink-0">
              <Button variant="neon" size="sm" onClick={onContact}>Book a Free Consultation</Button>
            </div>

            <button onClick={() => setOpen((o) => !o)} className="lg:hidden w-11 h-11 rounded-xl border border-white/20 flex items-center justify-center text-white shrink-0" aria-label="Menu" aria-expanded={open}>
              <i className={`fas ${open ? "fa-times" : "fa-bars"} text-sm`} />
            </button>
            </div>
          </div>
        </header>
      </div>

      {/* Reserve space for fixed desktop header */}
      <div className="hidden lg:block shrink-0" style={{ height: DESKTOP_HEADER_HEIGHT }} aria-hidden="true" />

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brand-dark/98 pt-28 px-5 pb-8 overflow-y-auto">
          <div className="space-y-2">
            {nav.map((n) => (
              <NavLink key={n.path} item={n} className={mobileLinkClass} onNavigate={closeMenu} />
            ))}
            <Button className="w-full mt-4" variant="neon" onClick={() => { closeMenu(); onContact?.(); }}>Book a Free Consultation</Button>
          </div>
        </div>
      )}
    </>
  );
}
