import { useEffect, useRef, useState } from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import PlusIcon from "./icons/PlusIcon";
import TooltipWithMorph from "../TooltipWithMorph";

export default function WebDevSection({
  activeFilter,    // { type: 'year'|'tag', value } | null
  onFilter,        // (f) => void
  onClearFilter,   // () => void
  projects,        // pre-filtered array from App
  resetToken,      // from ProjectSection (used to close all when section closes)
}) {
  const [openProject, setOpenProject] = useState(null);

  // --- refs for each project's header row so we can scroll to it
  const rowRefs = useRef({});
  const setRowRef = (id) => (el) => {
    if (el) rowRefs.current[id] = el;
    else delete rowRefs.current[id];
  };

  // Fallback to local slice if parent didn't pass pre-filtered data
  const base = Array.isArray(projects)
    ? projects
    : projectsData.filter((p) => p.section === "web");

  const matchesFilter = (p) => {
    if (!activeFilter) return true;
    if (activeFilter.type === "year") return p.year === activeFilter.value;
    const tag = String(activeFilter.value).toLowerCase();
    return (
      Array.isArray(p.tags) &&
      p.tags.some((t) => String(t).toLowerCase() === tag)
    );
  };

  const visible = Array.isArray(projects) ? base : base.filter(matchesFilter);

  // Close any open project when the parent section toggles (open/closed)
  useEffect(() => {
    setOpenProject(null);
  }, [resetToken]);

  // Close any open project when the filter changes
  useEffect(() => {
    setOpenProject(null);
  }, [activeFilter]);

  // Scroll the opened project's header row into view (top of viewport)
  useEffect(() => {
    if (!openProject) return;
    const el = rowRefs.current[openProject];
    if (!el) return;

    const prefersNoMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // Wait for any previous row to collapse + current row to expand (layout settle)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // If the page (window) scrolls:
        el.scrollIntoView({
          behavior: prefersNoMotion ? "auto" : "smooth",
          block: "start",
        });

        // If instead your content scrolls inside a container (e.g., .container with overflow),
        // comment the above and use this:
        // const scroller = document.querySelector(".container");
        // if (scroller) {
        //   const sRect = scroller.getBoundingClientRect();
        //   const eRect = el.getBoundingClientRect();
        //   const top = eRect.top - sRect.top + scroller.scrollTop - 72; // 72 matches CSS buffer
        //   scroller.scrollTo({ top, behavior: prefersNoMotion ? "auto" : "smooth" });
        // }
      });
    });
  }, [openProject]);

  const toggleProject = (id) => {
    setOpenProject((prev) => (prev === id ? null : id));
  };

  // Helper to build a safe tag class (handles spaces/odd chars)
  const tagClass = (t) =>
    `tag-${String(t)
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-")}`;

  if (!visible.length) return null;

  return (
    <>
      {visible.map((project, index) => {
        const isLast = index === visible.length - 1;
        const isOpen = openProject === project.id;
        const firstTag =
          Array.isArray(project.tags) && project.tags.length
            ? project.tags[0]
            : null;

        return (
          <div key={project.id}>
            {/* Summary row (anchor we scroll to) */}
            <div
              className="project-summary-row"
              ref={setRowRef(project.id)}
            >
              <div className="project-summary-left">
                <TooltipWithMorph
                  tooltipImage={project.tooltip}
                  className="badge-circle"
                >
                  <img src={project.badge} alt={project.title} />
                </TooltipWithMorph>

                {firstTag && (
                  <button
                    className={`project-tag ${tagClass(firstTag)}`} // filled tag (no border)
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenProject(null); // close immediately
                      onFilter && onFilter({ type: "tag", value: firstTag });
                    }}
                    aria-label={`Filter by tag ${firstTag}`}
                  >
                    {firstTag}
                  </button>
                )}
              </div>

              <h2 className="project-title">{project.title}</h2>

              <div className="project-summary-right">
                <button
                  className="project-year" // outlined year pill
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenProject(null); // close immediately
                    onFilter && onFilter({ type: "year", value: project.year });
                  }}
                  aria-label={`Filter by year ${project.year}`}
                >
                  {project.year}
                </button>

                <div className="plus-icon-wrapper">
                  <PlusIcon
                    className={`plus-icon ${isOpen ? "rotated" : ""}`}
                    onClick={() => toggleProject(project.id)}
                  />
                </div>
              </div>
            </div>

            {(isOpen || !isLast) && <hr className="under-divider" />}

            {isOpen && <ProjectCard project={project} showDivider={!isLast} />}
          </div>
        );
      })}
    </>
  );
}
