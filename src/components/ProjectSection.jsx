// components/ProjectSection.jsx
import { Children, isValidElement, cloneElement } from "react";
import PlusIcon from "./icons/PlusIcon";
import TooltipWithMorph from "../TooltipWithMorph";

// helper for tag classes (only used if you show activeFilter pill)
const slug = (t) =>
  String(t).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function ProjectSection({
  id,
  title,
  icon: Icon,
  tooltipImage,
  isActive,
  toggleSection,
  children,
  activeFilter,     // keep for the left pill UI
  visible = true,
}) {
  if (!visible) return null;

  const isTag = activeFilter?.type === "tag";
  const tagClass = isTag ? `tag-${slug(activeFilter.value)}` : "";
  const leftPillClass = isTag
    ? `project-tag section-filter-pill ${tagClass}`
    : `project-year section-filter-pill section-filter-pill--year`;

  return (
    <section id={id} className="section">
      <div className="row">
        {activeFilter ? (
          <span className={leftPillClass} aria-label="Active filter">
            {String(activeFilter.value)}
          </span>
        ) : (
          <TooltipWithMorph tooltipImage={tooltipImage}>
            <Icon />
          </TooltipWithMorph>
        )}

        <h1 className="section-title">{title}</h1>

        <div className="plus-icon-wrapper">
          <PlusIcon
            className={`plus-icon ${isActive ? "rotated" : ""}`}
            onClick={() => toggleSection(id)}
          />
        </div>
      </div>

      <hr className="divider" />

      <div className={`under-row ${isActive ? "slide-down" : "slide-up"}`} aria-hidden={!isActive}>
        {/* Inject a resetToken only for project sections */}
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child, { resetToken: isActive ? 1 : 0 }) : child
        )}
        <hr className="divider" />
      </div>
    </section>
  );
}
