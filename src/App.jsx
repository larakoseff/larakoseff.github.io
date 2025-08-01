import { useState } from "react";
import TooltipWithMorph from "./TooltipWithMorph";
import "./index.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <main className="container">
          <header className="row">
            {/* <img src="/assets/eye.svg" className="icon" alt="eye" /> */}
            <TooltipWithMorph />
            <h1>Lara Koseff</h1>
            <img src="/assets/contrast.svg"  className="icon" alt="contrast toggle" />
          </header>
          <hr className="divider" />
          <div className="row"></div>
          <hr className="divider" />
          <div className="row"></div>
          <hr className="divider" />
          <div className="row">
            <img src="/assets/about.svg"  className="icon" alt="about" />
            <div></div>
            <img src="/assets/projects.svg"  className="icon" alt="projects" />
          </div>

          <hr className="divider" />

          <div className="row">
            <img src="/assets/web.svg" className="icon" alt="web" />
            <h1>New site coming soon(ish)</h1>
            <img src="/assets/experience.svg"  className="icon" alt="experience" />
          </div>

          <hr className="divider" />

          <div className="row">
            <img src="/assets/colophon.svg"  className="icon" alt="colophon" />
            <div></div>
            <img src="/assets/skills.svg"  className="icon" alt="skills" />
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
            <a href="https://github.com/larakoseff" className="footer-icon-hover" target="blank"><img src="/assets/github.svg" className="footer-icon" alt="github" /></a>
            <a href="mailto:larakoseff@gmail.com"><img src="/assets/mail.svg" className="footer-icon" alt="email" /></a>
            <a href="https://www.linkedin.com/in/lara-koseff-37a04b7/" target="blank"><img src="/assets/linkedin.svg" className="footer-icon" alt="linkedin" /></a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
