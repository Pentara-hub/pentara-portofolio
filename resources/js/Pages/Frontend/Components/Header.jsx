import React from "react";
import { Link, useLocation } from "react-router-dom";
import Switch from "./Switch";

const navItems = [
  { label: "Home", hash: "home" },
  { label: "Services", hash: "services" },
  { label: "Work", hash: "work" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Team", hash: "team" },
  { label: "Contact", hash: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(
    () =>
      (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark"
  );
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  // theme
  React.useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // close mobile on route/hash change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  // sticky look on scroll
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed w-full z-40 backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 shadow-sm"
          : "bg-white/60 dark:bg-slate-900/60",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/assets/images/logo.png" alt="Pentara logo" />
              </div>
              <span className="text-xl font-semibold ml-2 mt-1">Pentara</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((n) => (
                <Link
                  key={n.hash}
                  to={`/#${n.hash}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors"
                >
                  {n.label}
                </Link>
              ))}
              <Switch />
            </div>
          </div>

          {/* Mobile trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg transition-all duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((n) => (
              <Link
                key={n.hash}
                to={`/#${n.hash}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-4 ">
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 px-3 pb-4">
                <Switch />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
