import { useEffect, useState, useMemo } from "react";
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
import WritingIcon from "./components/icons/WritingIcon";
import Section from "./components/Section";
import WebDevSection from "./components/WebDevSection";
import WritingDesignSection from "./components/WritingDesignSection";
import CuratingProjectsSection from "./components/CuratingProjectsSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ColophonSection from "./components/ColophonSection";
import "./index.css";
import projectsData from "./data/projectsData";

function App() {
  const totalThemes = 5;
  const [themeIndex, setThemeIndex] = useState(1);
  const [activeSection, setActiveSection] = useState(null);

  // Single active filter: { type: 'year'|'tag', value } | null
  const [filter, setFilter] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  
    const prefersNoMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (!el) return;
  
        // If you want to snap specifically to the header row:
        // const header = el.querySelector('.row') || el;
  
        el.scrollIntoView({
          behavior: prefersNoMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    });
  };
  

  const handleThemeToggle = () => {
    setThemeIndex((prev) => (prev % totalThemes) + 1);
  };

  // Read filter from URL on load (e.g. ?filter=tag:react or ?filter=year:2025)
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const raw = sp.get("filter");
    if (!raw) return;
    const [type, value] = raw.split(":");
    if (type === "tag" && value) setFilter({ type: "tag", value });
    if (type === "year" && value && !Number.isNaN(+value))
      setFilter({ type: "year", value: +value });
  }, []);

  // Write filter to URL (shareable)
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    if (filter) sp.set("filter", `${filter.type}:${filter.value}`);
    else sp.delete("filter");
    const qs = sp.toString();
    window.history.replaceState(
      null,
      "",
      qs ? `?${qs}` : window.location.pathname
    );
  }, [filter]);

  const handleFilter = (f) => {
    setActiveSection(null); // collapse any open section when a new filter is applied (optional but nice)
    setFilter(f);
  };

  const clearFilter = () => {
    setFilter(null); // remove filter
    setActiveSection(null); // collapse any open section
  };

  // ESC clears filter
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") clearFilter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Pre-filtered arrays per section
  const webList = useMemo(() => {
    const match = (p) => {
      if (!filter) return true;
      if (filter.type === "year") return p.year === filter.value;
      const tag = String(filter.value).toLowerCase();
      return (
        Array.isArray(p.tags) &&
        p.tags.map((t) => t.toLowerCase()).includes(tag)
      );
    };
    return projectsData.filter((p) => p.section === "web").filter(match);
  }, [filter]);

  const writingList = useMemo(() => {
    const match = (p) => {
      if (!filter) return true;
      if (filter.type === "year") return p.year === filter.value;
      const tag = String(filter.value).toLowerCase();
      return (
        Array.isArray(p.tags) &&
        p.tags.map((t) => t.toLowerCase()).includes(tag)
      );
    };
    return projectsData.filter((p) => p.section === "writing").filter(match);
  }, [filter]);

  const curatingList = useMemo(() => {
    const match = (p) => {
      if (!filter) return true;
      if (filter.type === "year") return p.year === filter.value;
      const tag = String(filter.value).toLowerCase();
      return (
        Array.isArray(p.tags) &&
        p.tags.map((t) => t.toLowerCase()).includes(tag)
      );
    };
    return projectsData.filter((p) => p.section === "curating").filter(match);
  }, [filter]);

  // Visibility rules
  const isFiltering = !!filter;
  const showWeb = !isFiltering || webList.length > 0;
  const showWriting = !isFiltering || writingList.length > 0;
  const showCurating = !isFiltering || curatingList.length > 0;
  const anyProjectVisible = showWeb || showWriting || showCurating;

  return (
    <div className={`wrapper theme-${themeIndex}`}>
      <main className="container">
        <header className="row">
          <TooltipWithMorph tooltipImage="/images/home.jpg">
            <EyeIcon />
          </TooltipWithMorph>
          <h1 className="name-title">Lara Koseff</h1>
          <ContrastIcon onClick={handleThemeToggle} />
        </header>

        {/* Sticky filter bar */}
        {isFiltering && (
          <div className="filter-bar" role="status" aria-live="polite">
            <span className="filter-label">Filtered by</span>
            <button className="filter-chip">
              {String(filter.value)} <span aria-hidden></span>
            </button>
            <button className="project-year filter-clear" onClick={clearFilter}>
              Clear filter
            </button>
          </div>
        )}

        {/* Hide spacer/under-row while filtering */}
        {!isFiltering && (
          <>
            <hr className="divider" />
            <div className="under-row"></div>
          </>
        )}

        {/* Hide these static sections while filtering */}
        {!isFiltering && (
          <AboutSection
            id="about-me"
            title="About Me"
            icon={AboutIcon}
            tooltipImage="/images/multiples.jpg"
            isActive={activeSection === "about-me"}
            toggleSection={toggleSection}
          />
        )}

        {/* Project sections: only render those with matches */}
        {showWeb && (
          <Section
            id="web"
            title="Web design + development"
            icon={WebIcon}
            tooltipImage="/images/ditiro.png"
            isActive={activeSection === "web"}
            toggleSection={toggleSection}
            activeFilter={filter}
            onClearFilter={clearFilter}
          >
            <WebDevSection
              projects={webList}
              activeFilter={filter}
              onFilter={handleFilter}
              onClearFilter={clearFilter}
            />
          </Section>
        )}

        {showWriting && (
          <Section
            id="writing"
            title="Writing + design"
            icon={WritingIcon}
            tooltipImage="/images/wad-tooltip.jpg"
            isActive={activeSection === "writing"}
            toggleSection={toggleSection}
            activeFilter={filter}
            onClearFilter={clearFilter}
          >
            <WritingDesignSection
              projects={writingList}
              activeFilter={filter}
              onFilter={handleFilter}
              onClearFilter={clearFilter}
            />
          </Section>
        )}

        {showCurating && (
          <Section
            id="curating"
            title="Curating + projects"
            icon={ProjectsIcon}
            tooltipImage="/images/project-image-1.jpg"
            isActive={activeSection === "curating"}
            toggleSection={toggleSection}
            activeFilter={filter}
            onClearFilter={clearFilter}
          >
            <CuratingProjectsSection
              projects={curatingList}
              activeFilter={filter}
              onFilter={handleFilter}
              onClearFilter={clearFilter}
            />
          </Section>
        )}

        {/* When filtering & no project matches */}
        {isFiltering && !anyProjectVisible && (
          <>
            <hr className="divider" />
            <div className="empty" style={{ padding: "1rem" }}>
              No projects match this filter.
              <button
                className="filter-clear"
                onClick={clearFilter}
                style={{ marginLeft: 8 }}
              >
                Clear filter
              </button>
            </div>
          </>
        )}

        {/* Hide these while filtering */}
        {!isFiltering && (
          <>
            <ExperienceSection
              id="experience"
              title="Experience"
              icon={ExperienceIcon}
              tooltipImage="/images/projects-goodman.gif"
              isActive={activeSection === "experience"}
              toggleSection={toggleSection}
            />

            <EducationSection
              id="education"
              title="Education + skills"
              icon={SkillsIcon}
              tooltipImage="/images/education.png"
              isActive={activeSection === "education"}
              toggleSection={toggleSection}
            />

            <ColophonSection
              id="colophon"
              title="Colophon"
              icon={ColophonIcon}
              tooltipImage="/images/street-lamp.jpg"
              isActive={activeSection === "colophon"}
              toggleSection={toggleSection}
            />
          </>
        )}
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
