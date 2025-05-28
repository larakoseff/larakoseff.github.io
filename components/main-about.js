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
            <p>I am an arts professional and multidisciplinary creative with over 15 years of experience in the cultural sector, based in Johannesburg, South Africa. My career spans curating, project management, design, research, writing, editing, communications, and more recently, software development focused on  UI/UX design and frontend web technologies like React.</p>

<p>In 2020, I co-founded <a href="https://incca.org.za/" target="_blank" rel="noopener noreferrer">INCCA (Independent Network for Contemporary Culture & Art)</a>, a non-profit organisation dedicated to fostering independent cultural practice through exhibitions, research, and digital innovation. As a founding director, I provide ongoing fundraising and project management, and I also work as an art liaison offering digital solutions for artists, cultural archives, and small creative businesses, helping organise and share contemporary creative practices.</p>

<p>Throughout my career, I have collaborated with artists, curators, and cultural institutions across South Africa, Brazil, Argentina, Portugal, and beyond. I have edited and contributed to numerous publications on art, written regularly for the Sunday Times South Africa, and presented research on the art market and cultural economics at international forums such as Christie’s Symposium on Women Art Dealers and the College Art Association’s Annual Conference in New York. My academic work has been published in journals and books including <em>Critical Interventions: Journal of African Art History and Visual Culture</em> and <em>Women Art Dealers: Creating Markets for Modern Art, 1940–1990</em>.</p>

<p>I have been instrumental in building platforms that support independent and emergent practices, such as the UNDERLINE show at the Museum of African Design in Johannesburg. Before INCCA, I spent eight years at <a href="http://www.goodman-gallery.com" target="_blank" rel="noopener noreferrer">Goodman Gallery Johannesburg</a>, where I held various roles including writer, designer, archivist, press officer, and senior curator. I managed exhibitions, artists, and international art fairs (Paris, New York, London, São Paulo) and was part of the core team that created SOUTH SOUTH, a curatorial project exploring connections across the Global South, which evolved into a collaborative platform. I worked on the SOUTH SOUTH platform until the end of 2022.</p>

<p>My interest in coding and data visualisation grew during the COVID lockdown, inspired by Italian information designer <a href="https://giorgialupi.com/" target="_blank" rel="noopener noreferrer">Giorgia Lupi</a> and her concept of "data humanism." I completed a 6-month Software Development course in 2023 and continue to deepen my skills in React, D3.js, and p5.js. I currently apply these skills in creative research projects integrating data visualisation and storytelling, including a project called <a href="https://tinyletters.github.io/" target="_blank" rel="noopener noreferrer">tiny letters for mothers</a>. Additionally, as an art liaison, I use my coding skills to create custom digital archives for artists and cultural organisations.</p>

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
