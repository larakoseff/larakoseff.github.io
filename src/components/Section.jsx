import PlusIcon from "./icons/PlusIcon";
import TooltipWithMorph from "../TooltipWithMorph";

// helper up top (or inline)
const slug = (t) =>
  String(t)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function Section({
  id,
  title,
  icon: Icon,
  tooltipImage,
  isActive,
  toggleSection,
  children,
  activeFilter,
  onClearFilter,
  visible = true,
}) {
  if (!visible) return null;

  const isTag = activeFilter?.type === "tag";
  const tagClass = isTag ? `tag-${slug(activeFilter.value)}` : "";

  // tag filter -> filled tag pill; year filter -> outlined year pill
  const leftPillClass = isTag
    ? `project-tag section-filter-pill ${tagClass}`
    : `project-year section-filter-pill section-filter-pill--year`;

  return (
    <>
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
      <div className={`under-row ${isActive ? "slide-down" : "slide-up"}`}>
        <div className="project-list">{children}</div>
        <hr className="divider" />
      </div>
    </>
  );
}
