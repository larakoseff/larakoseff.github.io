import Section from "./Section";

export default function AboutSection({
  id = "about-me",
  title = "About me",
  icon,
  tooltipImage,
  isActive,
  toggleSection,
}) {
  return (
    <Section
      id={id}
      title={title}
      icon={icon} // pass the component (e.g. AboutIcon), not <AboutIcon />
      tooltipImage={tooltipImage}
      isActive={isActive} // boolean, as your App already does
      toggleSection={toggleSection}
    >
      <div className="about-content">
        <p>
          I am an arts professional and multidisciplinary creative with over 15
          years of experience in the cultural sector, based in Johannesburg,
          South Africa. My work spans curating, project management, design,
          research, writing, editing, communications, and more recently,
          software development with a focus on UI/UX and frontend technologies
          like React. In 2020, I co-founded INCCA (Independent Network for
          Contemporary Culture & Art), a non-profit organisation supporting
          independent cultural practice through exhibitions, research, and
          digital innovation. As a co-founding director, I lead fundraising and
          project management, and also work as an art liaison, offering project
          management and digital solutions to artists (including Helena
          Uambembe) and small creative businesses (including Something Good
          Studio), helping organise and share contemporary creative practices. I
          have collaborated with artists, curators, project spaces and
          institutions across South Africa, Brazil, Argentina, Portugal, and
          beyond.
        </p>
        <div><br /></div>
        <p>
          I’ve edited and contributed to numerous publications on art, written
          regularly for the Sunday Times South Africa. I have presented research
          at international forums including Christie’s Symposium on Women Art
          Dealers and the College Art Association’s Annual Conference in New
          York. My academic writing has been published in{" "}
          <i>
            Critical Interventions: Journal of African Art History and Visual
            Culture
          </i>{" "}
          and{" "}
          <i>Women Art Dealers: Creating Markets for Modern Art, 1940–1990</i>
          . I’ve built platforms for independent and
          emergent practices, including the UNDERLINE show at the Museum of
          African Design in Johannesburg. Prior to founding INCCA, I spent eight
          years at Goodman Gallery Johannesburg, where I held roles including
          archivist, press officer, and senior curator. I managed exhibitions,
          artists, and art fairs (Paris, New York, London, São Paulo) and was
          part of the team that developed SOUTH SOUTH — a curatorial project
          connecting the Global South — which evolved into a collaborative
          platform I worked on until the end of 2022.
        </p>
      </div>
    </Section>
  );
}
