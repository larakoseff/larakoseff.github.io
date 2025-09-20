import StaticSection from "./StaticSection";

export default function ExperienceSection({
  id = "experience",
  title = "experience",
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
      <div>
        <div className="experience-content">
          <strong>
            October 2022 - present | Art liaison | designer | writer | creative
            developer | INCCA Co-founder
          </strong>
          <br />
          <br />
          <p>
            {" "}
            With Londi Modiko and Nthabiseng Mokoena, I co-founded INCCA
            (Independent Network for Contemporary Culture & Art), a non-profit
            company that fosters independent cultural practice. As a founding
            director, I provide ongoing fundraising and project management, and
            I also work as an art liaison offering project management and
            digital solutions for artists (including Helena Uambembe) and small
            creative businesses (including Something Good Studio), helping
            organise and share contemporary creative practices.
          </p>
        </div>
        <hr className="under-divider" />
        <div className="experience-content">
          <strong>
            September 2020 - October 2022 (with 1 year maternity break) |
            Goodman Gallery, Johannesburg | SOUTH SOUTH project manager/project
            coordinator/consultant
          </strong>
          <br />
          <br />
          <p>
            In 2020 I rejoined Goodman Gallery to oversee the evolution of the
            SOUTH SOUTH project, which – in collaboration with galleries in
            Brazil, Mexico City, Uganda, Nigeria, India, Tokyo and New York City
            – was established as an online community, an anthology, an archive
            and a resource focussed on the Global South. Prior to a year-long
            maternity hiatus I worked on the platform as a project manager,
            rejoining as project coordinator in early 2022 and whenever needed,
            consult on the initiative. My work on SOUTH SOUTH has included
            liaising with galleries, curators, collectors and artists,
            overseeing the brand, website development and content and roll out
            and marketing of a regular programme, including curating special
            video projects in São Paulo and Johannesburg.
          </p>
        </div>
        <hr className="under-divider" />
        <div className="experience-content">
          <strong>
            April 2018-September 2020 Independent Curator, Designer & Writer
          </strong>
          <br />
          <br />
          <p>
            n 2018 I embarked on an independent career and built various
            platforms, both online and offline, that supported independent
            creatives including offset culture and the UNDERLINE show, which was
            received to much acclaim and led to myself and co-founder Londi
            Modiko to being featured on the Apollo 40 Under 40 Africa list in
            2020.
          </p>
        </div>
        <hr className="under-divider" />
        <div className="experience-content">
          <strong>
            April 2010 - March 2018 | Goodman Gallery, Johannesburg | Senior
            Curator/PR Officer/Designer/Archivist
          </strong>
          <br />
          <br />
          <p>
            I worked at Goodman Gallery Johannesburg, initially joining as the
            gallery’s first in-house archivist. In this role, I established
            systems and methodologies for archiving a wide range of materials
            spanning the gallery’s 50-year history. In addition to this I was
            initially employed as an in-house writer and designer, and over time
            I took on broader responsibilities primarily in a curatorial and PR
            capacity and as a liaison for numerous artists. I served as the
            Latin America liaison and was closely involved in the inception of
            SOUTH SOUTH, a curatorial initiative exploring connections within
            and constructions of the Global South. My general duties included
            managing and curating exhibitions; overseeing artist relationships
            (both existing and new); writing press releases; managing
            communications and brand representation; liaising with the press;
            maintaining website content; writing, editing, and designing
            in-house materials such as catalogues, books, sales documents, and
            online publications; compiling the monthly newsletter and creating
            social media content; conceptualising and writing speeches, all art
            fair applications; managing and attending art fairs (including Paris
            Photo, Frieze New York and London, SP-Arte); expanding networks with
            writers, curators, collectors, and museum professionals; hosting
            museum delegations and designing tailored itineraries with studio
            visits and special presentations; and conducting research on new
            artists.
          </p>
        </div>
      </div>
    </StaticSection>
  );
}
