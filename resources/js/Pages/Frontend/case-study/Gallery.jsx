import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

function Gallery({ items = [], autoplay = false, interval = 6000 }) {
  const [current, setCurrent] = useState(0);
  const galleryRef = useRef(null);
  const count = items.length;

  const clamp = useCallback(
    (i) => {
      if (!count) return 0;
      return (i + count) % count;
    },
    [count]
  );

  const go = useCallback(
    (i) => setCurrent((c) => clamp(typeof i === "number" ? i : c + i)),
    [clamp]
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(current - 1);
      if (e.key === "ArrowRight") go(current + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  // Touch swipe
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    let startX = null;
    const ts = (e) => (startX = e.changedTouches[0].screenX);
    const te = (e) => {
      if (startX == null) return;
      const dx = e.changedTouches[0].screenX - startX;
      if (Math.abs(dx) > 40) dx > 0 ? go(current - 1) : go(current + 1);
      startX = null;
    };
    el.addEventListener("touchstart", ts, { passive: true });
    el.addEventListener("touchend", te, { passive: true });
    return () => {
      el.removeEventListener("touchstart", ts);
      el.removeEventListener("touchend", te);
    };
  }, [current, go]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || count < 2) return;
    const id = setInterval(() => go(current + 1), interval);
    return () => clearInterval(id);
  }, [autoplay, count, current, go, interval]);

  if (!count) {
    return (
      <div className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 grid place-items-center rounded-2xl">
        <span className="text-sm opacity-70">No media yet.</span>
      </div>
    );
  }

  const item = items[clamp(current)];

  return (
    <div className="w-full">
      <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40">
        <button
          onClick={() => go(current - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 hover:scale-105 transition"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 hover:scale-105 transition"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>

        <div
          ref={galleryRef}
          className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 grid place-items-center"
        >
          {item.type === "video" ? (
            <iframe
              className="w-full h-full"
              src={item.src}
              title={item.title || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt || ""}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Thumbs */}
      <div className="thumbs mt-3 flex gap-2 overflow-x-auto pb-1">
        {items.map((it, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`relative shrink-0 rounded-lg overflow-hidden border w-28 h-16 transition ${
              idx === current
                ? "ring-2 ring-primary opacity-100 border-slate-300 dark:border-slate-600"
                : "opacity-70 border-slate-200/70 dark:border-slate-700"
            }`}
          >
            {it.type === "video" ? (
              <div className="w-full h-full bg-slate-200 dark:bg-slate-700 grid place-items-center">
                <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-black/60 text-white">
                  <Play size={14} />
                </span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={it.src}
                alt={it.alt || ""}
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {/* Minimal scrollbar styling for thumbs */}
      <style>{`
        .thumbs::-webkit-scrollbar { height: 6px; }
        .thumbs::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.45); border-radius: 999px; }
        .thumbs { scrollbar-width: thin; scrollbar-color: rgba(148,163,184,0.45) transparent; }
      `}</style>
    </div>
  );
}

export default Gallery;
