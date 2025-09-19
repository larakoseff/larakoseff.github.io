import { useState, useEffect, useRef } from "react";

export default function ProjectCard({ project, showDivider = true }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const hasImages = project?.images?.length > 0;

  // advance to next image
  const next = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  // go directly to a given index
  const goTo = (i) => {
    if (!hasImages) return;
    setIndex(i);
  };

  // optional auto-advance
  useEffect(() => {
    if (!hasImages) return;
    timeoutRef.current = setTimeout(next, 5000); // 5s per slide
    return () => clearTimeout(timeoutRef.current);
  }, [index, hasImages]);

  return (
    <>
      <div className="project-card">
        <div className={`project-content ${hasImages ? "with-carousel" : ""}`}>
          {/* LEFT: Fade Carousel */}
          {hasImages && (
            <div className="fade-carousel-wrapper">
              <div className="fade-carousel" onClick={next}>
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title || "project"} ${i + 1}`}
                    className={`fade-slide ${i === index ? "active" : ""}`}
                  />
                ))}
              </div>

              {/* dots now outside the carousel box */}
              <div className="fade-dots">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === index ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* MIDDLE: Description */}
          <div className="project-description">
            {project.description && <p>{project.description}</p>}
          </div>

          {/* RIGHT: Tech + Link */}
          <div className="project-meta">
            {project.stack?.length > 0 && (
              <div className="stack-section">
                <h4>Tech stack</h4>
                <div className="stack-tags">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`tech-pill tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.link && (
              <div className="link-section">
                <h4>Website</h4>
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="visit-pill"
                >
                  {project.link.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {showDivider && <hr className="under-divider" />}
    </>
  );
}
