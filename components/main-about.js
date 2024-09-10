export class MainAbout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (window.location.pathname.includes("about")) {
      this.innerHTML = `
         <main class="main-about">
        <section class="main-flex-container">
            <div class="main-item-1" id="about">
                about me <img src="./images/about-icon.svg" alt="about" class="about-icon">
            </div>
            <div class="main-item-2" id="about">
                <p>I'm a versatile creative, writer and developer interested in the intersection of art, culture, data and tech. My skill set is highly diverse, ranging from project management, research and curating to writing, editing, design and communications, and more recently: coding, frontend web development, as well as UI/UX engineering.</p>
                <p>
                    I have over 15 years of experience working in the cultural
                    sector, for galleries, publishing companies and museums. In 2020
                    I co-founded <a href="https://incca.org.za/" target="_blank">INCCA (Independent Network for
                        Contemporary Culture
                        & Art)</a> with Londi Modiko and Nthabiseng Mokoena, a non-profit
                    company that aims to foster independent cultural practice. INCCA
                    grew out of numerous projects supporting independent creatives,
                    including the <a href="https://underlineprojects.art/" target="_blank">UNDERLINE show</a> in 2019.
                    From 2010-2018, I worked at <a href="http://www.goodman-gallery.com" target="_blank">Goodman
                        Gallery</a>
                    Johannesburg, primarily in a curatorial, communications and editorial capacity and as a liaison for
                    over 15 artists. I was part
                    of the core team who established and managed SOUTH SOUTH, a
                    curatorial project that evolved into a collaborative platform in
                    2020. I most recently worked on the platform as a project
                    coordinator.
                </p>
                <p>
                    I decided to explore coding after my experience of
                    working on numerous online platforms leading up to and during
                    COVID lockdown. During this time I developed a deep interest in
                    data visualisation and analytics, which was heavily influenced
                    by my discovery of Italian information designer <a href="https://giorgialupi.com/"
                        target="_blank">Giorgia Lupi</a> and her concept of "data humanism". Building
                    on this interest, I completed a 6-month Software Development
                    bootcamp in 2023, and am currently deepening my skills in React
                    and exploring libraries such as D3.js and p5.js.

                </p>
            </div>
        </section>
        <!-- about page menu -->
        <aside class="pages-flex-container" id="page-menu">
            <div class="aside-sticky">
                <div class="page-items"><a href="education">
                        education <img src="./images/education-icon.svg" alt="education" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="experience">
                        experience <img src="./images/experience-icon.svg" alt="experience" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="projects">
                        projects <img src="./images/projects-icon.svg" alt="projects" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="https://larakoseff.github.io/">
                        home <img src="./images/home-icon.svg" alt="home" class="menu-icons">
                    </a></div>
            </div>
            <aside>
            </main>
        `;
    }
  }
}

customElements.define("main-about", MainAbout);
