import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const getOffset = () => {
      if (window.innerWidth >= 1024) {
        return document.documentElement.classList.contains("header-scrolled") ? 72 : 108;
      }
      return 80;
    };

    const scrollToHash = () => {
      if (!hash) return false;
      const el = document.getElementById(hash.slice(1));
      if (!el) return false;
      const y = el.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    };

    if (hash) {
      if (scrollToHash()) return undefined;

      const delays = [0, 50, 150, 350];
      const timers = delays.map((ms) =>
        window.setTimeout(() => scrollToHash(), ms),
      );
      return () => timers.forEach(clearTimeout);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return undefined;
  }, [pathname, hash, key]);

  return null;
}
