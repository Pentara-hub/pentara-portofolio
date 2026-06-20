import { useCallback, useEffect, useRef, useState } from "react";

const TRANSITION_MS = 700;
const DRAG_THRESHOLD = 6;
const SNAP_RATIO = 0.18;

/**
 * Trianglz-style project carousel: translateX track, center-focused card,
 * pointer drag, cloned slides for seamless looping.
 */
export function useProjectCarousel(count, headLen = count - 1) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const middleStart = headLen;
  const trackIndexRef = useRef(middleStart);
  const ignoreClickRef = useRef(false);

  const [trackIndex, setTrackIndex] = useState(middleStart);
  const [activeIndex, setActiveIndex] = useState(0);
  const animating = useRef(false);
  const drag = useRef({
    active: false,
    moved: false,
    pointerId: null,
    startX: 0,
    startOffset: 0,
    delta: 0,
  });

  useEffect(() => {
    trackIndexRef.current = trackIndex;
  }, [trackIndex]);

  const getCardStep = useCallback(() => {
    const card = cardRefs.current.find(Boolean);
    if (!card) return 0;
    const style = window.getComputedStyle(card);
    return card.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  }, []);

  const getTranslateX = useCallback((index) => {
    const outer = outerRef.current;
    const step = getCardStep();
    if (!outer || !step) return 0;
    return outer.offsetWidth / 2 - step / 2 - index * step;
  }, [getCardStep]);

  const logicalIndex = useCallback((index) => {
    return ((index - middleStart) % count + count) % count;
  }, [count, middleStart]);

  const applyPosition = useCallback((index, animate, updateDots = true) => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = animate
      ? `transform ${TRANSITION_MS}ms cubic-bezier(0.35, 0, 0.15, 1)`
      : "none";
    track.style.transform = `translateX(${getTranslateX(index)}px)`;

    cardRefs.current.forEach((card, i) => {
      if (card) card.classList.toggle("is-active", i === index);
    });

    if (updateDots) setActiveIndex(logicalIndex(index));
  }, [getTranslateX, logicalIndex]);

  const goToTrackIndex = useCallback((index, animate = true) => {
    if (animating.current && animate) return;
    if (animate) animating.current = true;
    trackIndexRef.current = index;
    setTrackIndex(index);
    applyPosition(index, animate);
  }, [applyPosition]);

  const next = useCallback(() => goToTrackIndex(trackIndexRef.current + 1), [goToTrackIndex]);
  const prev = useCallback(() => goToTrackIndex(trackIndexRef.current - 1), [goToTrackIndex]);

  const goTo = useCallback((logical) => {
    goToTrackIndex(middleStart + logical);
  }, [middleStart, goToTrackIndex]);

  const selectCard = useCallback((index) => {
    if (ignoreClickRef.current) return;
    if (index === trackIndexRef.current) return;
    goToTrackIndex(index);
  }, [goToTrackIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onEnd = () => {
      animating.current = false;
      const current = trackIndexRef.current;
      let nextIndex = current;

      if (current >= middleStart + count) {
        nextIndex = current - count;
      } else if (current < middleStart) {
        nextIndex = middleStart + count + (count - 1 - current);
      }

      if (nextIndex !== current) {
        trackIndexRef.current = nextIndex;
        setTrackIndex(nextIndex);
        applyPosition(nextIndex, false, false);
      }
      setActiveIndex(logicalIndex(nextIndex));
    };

    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [count, middleStart, applyPosition, logicalIndex]);

  useEffect(() => {
    trackIndexRef.current = middleStart;
    setTrackIndex(middleStart);
    setActiveIndex(0);
    applyPosition(middleStart, false);
  }, [count, middleStart, applyPosition]);

  useEffect(() => {
    const onResize = () => applyPosition(trackIndexRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyPosition]);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const onDown = (e) => {
      if (e.button !== 0) return;
      ignoreClickRef.current = false;
      drag.current = {
        active: true,
        moved: false,
        pointerId: e.pointerId,
        startX: e.clientX,
        startOffset: getTranslateX(trackIndexRef.current),
        delta: 0,
      };
    };

    const onMove = (e) => {
      if (!drag.current.active) return;
      const delta = e.clientX - drag.current.startX;
      if (!drag.current.moved) {
        if (Math.abs(delta) < DRAG_THRESHOLD) return;
        drag.current.moved = true;
        ignoreClickRef.current = true;
        animating.current = false;
        if (trackRef.current) trackRef.current.style.transition = "none";
        try { outer.setPointerCapture(e.pointerId); } catch { /* noop */ }
      }
      drag.current.delta = delta;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${drag.current.startOffset + delta}px)`;
      }
    };

    const onUp = () => {
      if (!drag.current.active) return;
      const { moved, delta, pointerId } = drag.current;
      drag.current.active = false;
      if (pointerId !== null) {
        try { outer.releasePointerCapture(pointerId); } catch { /* noop */ }
      }
      if (!moved) return;

      const step = getCardStep();
      let shift = -Math.round(delta / step);
      if (shift === 0 && Math.abs(delta) > step * SNAP_RATIO) {
        shift = delta < 0 ? 1 : -1;
      }
      const current = trackIndexRef.current;
      if (shift !== 0) goToTrackIndex(current + shift);
      else applyPosition(current, true);

      window.setTimeout(() => { ignoreClickRef.current = false; }, 0);
    };

    outer.addEventListener("pointerdown", onDown);
    outer.addEventListener("pointermove", onMove);
    outer.addEventListener("pointerup", onUp);
    outer.addEventListener("pointercancel", onUp);
    return () => {
      outer.removeEventListener("pointerdown", onDown);
      outer.removeEventListener("pointermove", onMove);
      outer.removeEventListener("pointerup", onUp);
      outer.removeEventListener("pointercancel", onUp);
    };
  }, [getTranslateX, getCardStep, goToTrackIndex, applyPosition]);

  return {
    outerRef,
    trackRef,
    cardRefs,
    activeIndex,
    next,
    prev,
    goTo,
    selectCard,
    suppressClickRef: ignoreClickRef,
  };
}

export function buildLoopedProjects(projects) {
  // Prepend items after the first so the slide before middle[0] is the last project (wrap-around).
  const head = projects.slice(1).map((p, i) => ({ ...p, _key: `pre-${p.slug}-${i}` }));
  const middle = projects.map((p, i) => ({ ...p, _key: `mid-${p.slug}-${i}` }));
  const tail = projects.map((p, i) => ({ ...p, _key: `post-${p.slug}-${i}` }));
  return { slides: [...head, ...middle, ...tail], headLen: head.length };
}
