import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Thumbs,
  Autoplay,
  EffectFade,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

function Gallery({
  items = [],
  interval = 5000,
  objectFit = "cover", // "cover" | "contain"
  showDots = true,
  allowFullscreen = true,
}) {
  const [current, setCurrent] = useState(0);
  const [isFs, setIsFs] = useState(false);

  const [thumbs, setThumbs] = useState(null);
  const mainRef = useRef(null); // Swiper instance
  const containerRef = useRef(null);
  const thumbsBtnRefs = useRef([]);

  const [uiHover, setUiHover] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia?.("(hover: hover) and (pointer: fine)");
    const update = () => setHasHover(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  const count = items.length;
  const showArrows = !hasHover || uiHover || focusWithin; // always on for touch

  const clamp = useCallback((i) => (!count ? 0 : (i + count) % count), [count]);
  const nextIdx = useMemo(() => clamp(current + 1), [current, clamp]);
  const prevIdx = useMemo(() => clamp(current - 1), [current, clamp]);

  const item = items[clamp(current)] || null;

  const renderMedia = (it, isActive) => {
    const fitClass =
      objectFit === "contain" ? "object-contain" : "object-cover";
    const base =
      "absolute inset-0 w-full h-full transition-opacity duration-500 ease-out will-change-opacity";
    return it?.type === "video" ? (
      <iframe
        key={`v-${it.src}`}
        className={`${base} ${
          isActive ? "opacity-100" : "opacity-0"
        } rounded-2xl`}
        src={it.src}
        title={it.title || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={`i-${it.src}`}
        src={it.src}
        alt={it.alt || ""}
        className={`${base} ${fitClass} ${
          isActive ? "opacity-100" : "opacity-0"
        } select-none`}
        loading={isActive ? "eager" : "lazy"}
        fetchpriority={isActive ? "high" : "low"}
        draggable={false}
      />
    );
  };

  if (!count) {
    return (
      <div className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 grid place-items-center rounded-2xl">
        <span className="text-sm opacity-70">No media yet.</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      {/* Wrapper keeps your original style */}
      <div
        className="group relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 shadow-[0_8px_28px_-12px_rgba(2,6,23,0.25)]"
        onMouseEnter={() => {
          setUiHover(true);
          if (hasHover) mainRef.current?.autoplay?.stop();
        }}
        onMouseLeave={() => {
          setUiHover(false);
          if (hasHover) mainRef.current?.autoplay?.start();
        }}
        onFocusCapture={() => setFocusWithin(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setFocusWithin(false);
        }}
        aria-label="Gallery"
        role="region"
      >
        {/* UI legibility band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 
             bg-gradient-to-t from-black/25 via-black/10 to-transparent z-10"
        />

        {/* Slide counter chip */}
        <div className="absolute left-3 top-3 z-20 px-2 py-1 rounded-md text-[11px] font-medium bg-black/55 text-white/95">
          {current + 1} / {count}
        </div>

        {/* Controls (custom, not Swiper default buttons) */}
        <button
          onClick={() => mainRef.current?.slidePrev()}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 grid place-items-center w-10 h-10 rounded-full
              bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700
              backdrop-blur-sm transition-opacity duration-200 hover:scale-105 focus:outline-none
              ${showArrows ? "opacity-100" : "opacity-0"}`}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => mainRef.current?.slideNext()}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 grid place-items-center w-10 h-10 rounded-full
              bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700
              backdrop-blur-sm transition-opacity duration-200 hover:scale-105 focus:outline-none
              ${showArrows ? "opacity-100" : "opacity-0"}`}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>

        {allowFullscreen && (
          <button
            onClick={() => setIsFs(true)}
            className="absolute right-3 top-3 z-20 text-xs px-2 py-1 rounded-md bg-black/60 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Open fullscreen"
            title="Fullscreen"
          >
            Fullscreen
          </button>
        )}

        {/* Stage (cross-fade stack look, but actually driven by Swiper) */}
        <div className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 relative">
          {/* subtle edge vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent z-0" />

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Thumbs,
              Autoplay,
              EffectFade,
              Keyboard,
              FreeMode,
            ]}
            onBeforeInit={(swiper) => {
              mainRef.current = swiper;
            }}
            onSlideChange={(swiper) =>
              setCurrent(swiper.realIndex ?? swiper.activeIndex)
            }
            className="absolute inset-0 w-full h-full"
            // Visual behavior
            loop={items.length > 1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            keyboard={{ enabled: true }}
            // Autoplay that NEVER pauses
            autoplay={{
              delay: interval,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
              stopOnLastSlide: false,
              waitForTransition: true,
            }}
            // Hook to thumbs
            thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
          >
            {items.map((it, i) => (
              <SwiperSlide key={`s-${i}`}>
                <div className="absolute inset-0">
                  {/* render both current/prev/next look via simple render; fade handles it */}
                  {renderMedia(it, true)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Caption */}
          {item?.caption && (
            <div className="absolute bottom-0 inset-x-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm z-10">
              {item.caption}
            </div>
          )}
        </div>

        {/* Dots (custom) */}
        {showDots && count > 1 && (
          <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={`dot-${i}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => mainRef.current?.slideToLoop(i)}
                className={`relative h-2 rounded-full 
                    transition-[width,opacity,transform] duration-300 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                    ${i === current ? "w-6" : "w-2"}`}
                style={{
                  background: "#fff",
                  mixBlendMode: "difference",
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.6)",
                  opacity: i === current ? 1 : 0.9,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbs (same look, backed by Swiper thumbs) */}
      <Swiper
        onSwiper={setThumbs}
        modules={[FreeMode, Thumbs]}
        slidesPerView="auto"
        freeMode
        watchSlidesProgress
        spaceBetween={8}
        className="thumbs mt-3"
      >
        {items.map((it, idx) => (
          <SwiperSlide key={`t-${idx}`} style={{ width: 112 }}>
            <button
              ref={(el) => (thumbsBtnRefs.current[idx] = el)}
              onClick={() => mainRef.current?.slideToLoop(idx)}
              className={`relative w-28 h-16 rounded-xl overflow-hidden border transition 
                ${
                  idx === current
                    ? "ring-2 ring-primary opacity-100 border-slate-300 dark:border-slate-600"
                    : "opacity-80 hover:opacity-100 border-slate-200/70 dark:border-slate-700"
                }`}
              aria-label={`Thumbnail ${idx + 1}`}
              title={it.title || it.caption || `Media ${idx + 1}`}
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
                  src={it.thumb || it.src}
                  alt={it.alt || ""}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Minimal scrollbar styling for thumbs */}
      <style>{`
        .thumbs::-webkit-scrollbar { height: 6px; }
        .thumbs::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.45); border-radius: 999px; }
        .thumbs { scrollbar-width: thin; scrollbar-color: rgba(148,163,184,0.45) transparent; }
      `}</style>

      {/* Fullscreen Lightbox (uses current slide) */}
      {allowFullscreen && isFs && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFs(false);
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
            <div className="relative w-full max-w-6xl pointer-events-auto">
              <button
                onClick={() => mainRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Previous"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => mainRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Next"
              >
                <ChevronRight />
              </button>

              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/30">
                {item?.type === "video" ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={item.src}
                    title={item.title || "Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item?.src}
                    alt={item?.alt || ""}
                    className="absolute inset-0 w-full h-full object-contain"
                    draggable={false}
                  />
                )}
              </div>

              {item?.caption && (
                <div className="mt-3 text-center text-white/90 text-sm">
                  {item.caption}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsFs(false)}
            className="absolute right-4 top-4 z-50 p-2 rounded-md text-white/90 hover:text-white bg-white/0 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 pointer-events-auto"
            aria-label="Close fullscreen"
            title="Close (Esc)"
          >
            <X />
          </button>

          <div className="absolute left-4 top-4 z-40 px-2 py-1 rounded-md text-xs font-medium bg-white/10 text-white/90 pointer-events-none">
            {current + 1} / {count}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
