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
import "./index.css";

function App() {
  const totalThemes = 5;
  const [themeIndex, setThemeIndex] = useState(1); // start from 1

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
