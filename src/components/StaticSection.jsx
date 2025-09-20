// components/StaticSection.jsx
import PlusIcon from "./icons/PlusIcon";
import TooltipWithMorph from "../TooltipWithMorph";

export default function StaticSection({
  id,
  title,
  icon: Icon,
  tooltipImage,
  isActive,
  toggleSection,
  children,
  visible = true,
}) {
  if (!visible) return null;

  return (
    <section id={id} className="section">
      <div className="row">
        <TooltipWithMorph tooltipImage={tooltipImage}>
          <Icon />
        </TooltipWithMorph>

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
        <div className="project-list">{children}</div>
        <hr className="divider" />
      </div>
    </section>
  );
}
