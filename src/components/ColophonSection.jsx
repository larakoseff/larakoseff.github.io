import StaticSection from "./StaticSection";

export default function ColophonSection({
  id = "colophon",
  title = "colophon",
  icon,
  tooltipImage,
  isActive,
  toggleSection,
}) {
  return (
    <StaticSection
      id={id}
      title={title}
      icon={icon}
      tooltipImage={tooltipImage}
      isActive={isActive}
      toggleSection={toggleSection}
    >
      <div className="experience-content">
        <p>
          This website was designed and developed by Lara Koseff using React,
          Vite, custom CSS, and Framer Motion. It is hosted on GitHub Pages as a
          living archive of projects, writing, and collaborations. For inquiries
          or collaborations, please contact:{" "}
          <a href="mailto:larakoseff@gmail.com">larakoseff@gmail.com</a>.
        </p>
      </div>
    </StaticSection>
  );
}
