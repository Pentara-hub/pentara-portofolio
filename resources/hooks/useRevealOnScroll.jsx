import { useEffect } from "react";

/**
 * Reveals elements by resuming their CSS animation when they enter the viewport.
 * Elements must already have classes like: .fade-in, .fade-in-delay-1, etc.
 *
 * @param {string} selector - CSS selector for target elements
 * @param {object} opts - options
 *  - once: reveal only once (default true)
 *  - threshold: IntersectionObserver threshold (default 0.1)
 *  - rootMargin: IO rootMargin (default "0px 0px -20% 0px")
 */
export default function useRevealOnScroll(
  selector = ".fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3",
  { once = true, threshold = 0.1, rootMargin = "0px 0px -20% 0px" } = {}
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    // Pause animations until visible (so they don't run at page load)
    els.forEach((el) => {
      el.style.animationPlayState = "paused";
      // Ensure opacity 0 before reveal if your CSS doesn't already
      // el.style.opacity = getComputedStyle(el).opacity === "" ? "0" : el.style.opacity;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          // Resume the CSS animation
          el.style.animationPlayState = "running";

          if (once) io.unobserve(el);
        });
      },
      { threshold, rootMargin }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, once, threshold, rootMargin]);
}
