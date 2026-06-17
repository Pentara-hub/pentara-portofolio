import { useEffect, useState } from "react";

export default function ScrollFab({ onContact }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fab-top ${show ? "visible" : ""}`} aria-label="Scroll to top">
        <i className="fas fa-arrow-up text-xs" />
      </button>
      <button type="button" onClick={onContact} className="fab-contact" aria-label="Get in touch">
        <i className="fas fa-comment-dots" />
      </button>
    </>
  );
}
