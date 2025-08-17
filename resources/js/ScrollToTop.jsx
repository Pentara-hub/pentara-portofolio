import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ offset = 0 }) {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element with an offset (for fixed header)
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    // Otherwise, just go to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key, offset]);

  return null;
}
