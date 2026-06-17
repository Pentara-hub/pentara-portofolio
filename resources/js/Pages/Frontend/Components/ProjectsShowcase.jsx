import { useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../../data/pentaraData";
import Button from "../../../components/ui/Button";
import { buildLoopedProjects, useProjectCarousel } from "../../../hooks/useProjectCarousel";

function ProjectCard({ project, cardRef, onSelect }) {
  return (
    <article
      ref={cardRef}
      className="project-card"
      onClick={(e) => { if (!e.target.closest("a")) onSelect(); }}
    >
      <div className="project-card-visual" style={{ background: project.gradient }}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-card-img" loading="lazy" />
        ) : (
          <div className="project-card-fallback">
            <i className={`fas ${project.icon}`} />
          </div>
        )}
        <Link
          to={`/case-study/${project.slug}`}
          aria-label={`Visit ${project.title}`}
          className="project-card-ext"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-arrow-up-right text-xs" />
        </Link>
      </div>
      <div className="project-card-overlay">
        <div className="project-card-meta">
          <span className="project-card-category">{project.category}</span>
          <span className="project-card-mode">• {project.mode}</span>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.desc}</p>
      </div>
    </article>
  );
}

export default function ProjectsShowcase() {
  const { slides: looped, headLen } = useMemo(() => buildLoopedProjects(PROJECTS), []);
  const {
    outerRef,
    trackRef,
    cardRefs,
    activeIndex,
    next,
    prev,
    goTo,
    selectCard,
  } = useProjectCarousel(PROJECTS.length, headLen);

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 reveal-up">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Solution in Action</p>
            <h2 className="section-title">A Glimpse of Our Projects</h2>
            <p className="mt-4 text-white/60">
              Real websites and apps, real deadlines — from LMS platforms to mobile MVPs. You bring the idea, we deliver the product.
            </p>
          </div>
          <div className="flex gap-2.5 shrink-0 self-end lg:self-auto">
            <button type="button" onClick={prev} aria-label="Previous project" className="project-carousel-nav">
              <i className="fas fa-chevron-left text-sm" />
            </button>
            <button type="button" onClick={next} aria-label="Next project" className="project-carousel-nav">
              <i className="fas fa-chevron-right text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={outerRef}
        className="project-carousel-outer reveal-up-delay-2"
        aria-roledescription="carousel"
        aria-label="Project showcase"
      >
        <div ref={trackRef} className="project-carousel-track">
          {looped.map((p, i) => (
            <ProjectCard
              key={p._key}
              project={p}
              cardRef={(el) => { cardRefs.current[i] = el; }}
              onSelect={() => selectCard(i)}
            />
          ))}
        </div>
      </div>

      <div className="container-main">
        <div className="project-carousel-dots reveal-up-delay-2" role="tablist" aria-label="Project navigation">
          {PROJECTS.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-label={`Project ${i + 1}`}
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={`project-carousel-dot ${i === activeIndex ? "is-active" : ""}`}
            >
              <span className="project-carousel-dot-fill" />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center surface-card p-6 sm:p-10 reveal-up-delay-3">
          <h3 className="text-2xl font-extrabold text-white">Your Product Could Be Next</h3>
          <p className="text-white/60 mt-3">
            You've seen the work. Tell us what you're building — we'll tell you honestly which mode fits and what the first 30 days look like.
            <br />
            <em className="text-white/80 not-italic">Free 30-minute</em> consultation. No pitch deck required.
          </p>
          <Button href="#contact" size="lg" className="mt-6">Your Product Could Be Next</Button>
        </div>
      </div>
    </section>
  );
}
