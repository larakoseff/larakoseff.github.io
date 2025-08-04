import { useState } from "react";
import TooltipWithMorph from "./TooltipWithMorph";
import AboutIcon from "./components/icons/AboutIcon";
import ContrastIcon from "./components/icons/ContrastIcon";
import EyeIcon from "./components/icons/EyeIcon";
import GitHubIcon from "./components/icons/GitHubIcon";
import MailIcon from "./components/icons/MailIcon";
import LinkedinIcon from "./components/icons/LinkedInIcon";
import ColophonIcon from "./components/icons/ColophonIcon";
import ProjectsIcon from "./components/icons/ProjectsIcon";
import ExperienceIcon from "./components/icons/ExperienceIcon";
import SkillsIcon from "./components/icons/SkillsIcon";
import WebIcon from "./components/icons/WebIcon";
import PlusIcon from "./components/icons/PlusIcon";
import WritingIcon from "./components/icons/WritingIcon";
import "./index.css";

function App() {
  const totalThemes = 5;
  const [themeIndex, setThemeIndex] = useState(1); // start from 1
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleThemeToggle = () => {
    setThemeIndex((prev) => (prev % totalThemes) + 1);
  };

  return (
    <div className={`wrapper theme-${themeIndex}`}>
      <main className="container">
        <header className="row">
          <TooltipWithMorph tooltipImage="/images/home.jpg">
            <EyeIcon />
          </TooltipWithMorph>
          <h1>Lara Koseff</h1>
          <ContrastIcon onClick={handleThemeToggle} />
        </header>
        <hr className="divider" />
        <div className="under-row"></div>

        {/* <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <AboutIcon />
          </TooltipWithMorph>
          <h1>About me</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "about" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("about")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "about" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>
              I am an arts professional and multidisciplinary creative with over
              15 years of experience in the cultural sector, based in
              Johannesburg, South Africa. My work spans curating, project
              management, design, research, writing, editing, communications,
              and more recently, software development with a focus on UI/UX and
              frontend technologies like React. In 2020, I co-founded INCCA
              (Independent Network for Contemporary Culture & Art), a non-profit
              organisation supporting independent cultural practice through
              exhibitions, research, and digital innovation. As a co-founding
              director, I lead fundraising and project management, and also work
              as an art liaison, offering digital solutions for artists,
              archives, and small creative businesses. I have collaborated with
              artists, curators, and institutions across South Africa, Brazil,
              Argentina, Portugal, and beyond. I’ve edited and contributed to
              numerous publications on art, written regularly for the Sunday
              Times South Africa.
            </p>
            <p>
              I have presented research at international forums including
              Christie’s Symposium on Women Art Dealers and the College Art
              Association’s Annual Conference in New York. My academic writing
              has been published in Critical Interventions: Journal of African
              Art History and Visual Culture and Women Art Dealers: Creating
              Markets for Modern Art, 1940–1990. I’ve been instrumental in
              building platforms for independent and emergent practices,
              including the UNDERLINE show at the Museum of African Design in
              Johannesburg. Prior to founding INCCA, I spent eight years at
              Goodman Gallery Johannesburg, where I held roles including writer,
              designer, archivist, press officer, and senior curator. I managed
              exhibitions, artists, and international art fairs (Paris, New
              York, London, São Paulo) and was part of the team that developed
              SOUTH SOUTH — a curatorial project connecting the Global South —
              which evolved into a collaborative platform I worked on until the
              end of 2022.
            </p>
          </div>
          <hr className="divider" />
        </div>

        <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <WebIcon />
          </TooltipWithMorph>
          <h1>Web design + development</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "web" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("web")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "web" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>This is the web content.</p>
          </div>
          <hr className="divider" />
        </div>

        <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <WritingIcon />
          </TooltipWithMorph>
          <h1>Writing + design</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "writing" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("writing")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "writing" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>This is the writing content.</p>
          </div>
          <hr className="divider" />
        </div>

        <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <ProjectsIcon />
          </TooltipWithMorph>
          <h1>Curating + Projects</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "projects" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("projects")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "projects" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>This is the curating + projects content.</p>
          </div>
          <hr className="divider" />
        </div>

        <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <ExperienceIcon />
          </TooltipWithMorph>
          <h1>Experience</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "experience" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("experience")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "experience" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>This is the experience content.</p>
          </div>
          <hr className="divider" />
        </div>

        <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <SkillsIcon />
          </TooltipWithMorph>
          <h1>Education + skills</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "skills" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("skills")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "skills" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>This is the education + skills content.</p>
          </div>
          <hr className="divider" />
        </div>

         <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <ColophonIcon />
          </TooltipWithMorph>
          <h1>Colophon</h1>
          <div className="plus-icon-wrapper">
            <PlusIcon
              className={`plus-icon ${
                activeSection === "colophon" ? "rotated" : ""
              }`}
              onClick={() => toggleSection("colophon")}
            />
          </div>
        </div>
        <hr className="divider" />
        <div
          className={`under-row ${
            activeSection === "colophon" ? "slide-down" : "slide-up"
          }`}
        >
          <div className="about-content">
            <p>This is the colophon content.</p>
          </div>
          <hr className="divider" />
        </div> */}

        {/* Under construction  */}

        <div className="row"></div>
        <hr className="divider" />
        <div className="row"></div>
        <hr className="divider" />
        <div className="row">
          <TooltipWithMorph tooltipImage="/images/blah.jpg">
            <AboutIcon />
          </TooltipWithMorph>
          <div></div>
          <TooltipWithMorph tooltipImage="/images/project-image-1.jpg">
            <ProjectsIcon />
          </TooltipWithMorph>
        </div>
        <hr className="divider" />
        <div className="row">
          <TooltipWithMorph tooltipImage="/images/ditiro.png">
            <WebIcon />
          </TooltipWithMorph>
          <h1>New site coming soon(ish)</h1>

          <TooltipWithMorph tooltipImage="/images/ditiro-exhibition.jpg">
            <ExperienceIcon />
          </TooltipWithMorph>
        </div>
        <hr className="divider" />
        <div className="row">
          <TooltipWithMorph tooltipImage="/images/colophon.jpg">
            <ColophonIcon />
          </TooltipWithMorph>
          <div></div>
          <TooltipWithMorph tooltipImage="/images/skills.jpg">
            <SkillsIcon />
          </TooltipWithMorph>
        </div>
        <hr className="divider" />
        <div className="row"></div>
        <hr className="divider" />
        <div className="row"></div>
      </main>

      <footer className="footer">
        <p>
          Lara Koseff | art liaison | designer | writer | creative developer
        </p>
        <div className="footer-icons">
          <a href="https://github.com/larakoseff" target="blank">
            <GitHubIcon />
          </a>
          <a href="mailto:larakoseff@gmail.com">
            <MailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/lara-koseff-37a04b7/"
            target="blank"
          >
            <LinkedinIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
