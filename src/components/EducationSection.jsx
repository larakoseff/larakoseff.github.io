import Section from "./Section";

export default function EducationSection({
  id = "education",
  title = "education",
  icon,
  tooltipImage,
  isActive,
  toggleSection,
}) {
  return (
    <Section
      id={id}
      title={title}
      icon={icon}
      tooltipImage={tooltipImage}
      isActive={isActive}
      toggleSection={toggleSection}
    >
      <div>
        <div className="experience-content">
          <strong>
            MA Heritage Studies, Arts and Culture Management | University of the
            Witwatersrand (with distinction)
          </strong>
          <p>
            Course work: Public Culture, Culture and Media Management, Curating
            Exhibitions
          </p>
        </div>
        <hr className="under-divider" />
        <div className="experience-content">
          <strong>
            BA Fine Art | University of the Witwatersrand (with distinction)
          </strong>
          <p>
            Painting, Design and Drawing, Art Criticism University of the
            Witwatersrand
          </p>
        </div>
        <hr className="under-divider" />

        <div className="experience-content">
          <strong>
            Software Development Program (6-month certificate) | CodeSpace Academy (with distinction)
          </strong>
          <p>
            HTML, CSS, JavaScript, Git, GitHub, Visual Studio Code, Wireframing,
            Figma, Presentation tools, Advanced JavaScript, React.js, Vue.js,
            Alpine.js, Svelte.js, TypeScript
          </p>
        </div>
      </div>
    </Section>
  );
}
