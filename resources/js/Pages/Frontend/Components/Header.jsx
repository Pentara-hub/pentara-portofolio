// resources/js/Components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import Switch from "./Switch";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on window resize (e.g., when going md+)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Optional: close when clicking outside the menu
  useEffect(() => {
    const onDocClick = (e) => {
      if (!open) return;
      const m = menuRef.current;
      const b = btnRef.current;
      if (m && !m.contains(e.target) && b && !b.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  // Close when any mobile link is clicked
  const handleMobileLinkClick = () => setOpen(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-md z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="assets/images/logo.png" alt="Pentara logo" />
              <span className="text-xl font-semibold ml-2 mt-1">Pentara</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["Work", "#work"],
                ["Process", "#process"],
                ["About", "#about"],
                ["Team", "#team"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-all"
                >
                  {label}
                </a>
              ))}
              <div className="ml-4">
                <Switch />
              </div>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              ref={btnRef}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-controls="mobileMenu"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        ref={menuRef}
        className={`md:hidden bg-white dark:bg-dark shadow-lg transition-[max-height,opacity] duration-200 overflow-hidden ${
          open ? "opacity-100 max-h-[480px]" : "opacity-0 max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            ["Home", "#home"],
            ["Services", "#services"],
            ["Work", "#work"],
            ["Process", "#process"],
            ["About", "#about"],
            ["Team", "#team"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={handleMobileLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary transition-all"
            >
              {label}
            </a>
          ))}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700 px-3 pb-4">
            <Switch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
