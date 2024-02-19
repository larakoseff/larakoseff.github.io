export class MainEducation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        if (window.location.pathname.includes("education")) {
            this.innerHTML = `
            <main class="main-education">
        <section class="main-flex-container">
            <div class="main-item-1" id="education">
                education & skills <img src="./images/education-icon.svg" alt="education" class="menu-icons">
                </a></div>
            </div>
            <div class="main-item-2" id="education">
                <h3>Software Development program at <a href="https://www.codespace.co.za/" target="_blank">CodeSpace
                    </a>(graduated in 2024, with distinction)</h3>
                <p>HTML, CSS, JavaScript, Git, GitHub, Visual Studio Code, Wireframing, Figma, Presentation tools,
                    Advanced JavaScript, React.js, Vue.js, Alpine.js, Svelte.js, TypeScript
                </p>
                <h3>MA Heritage Studies at <a href="https://www.wits.ac.za/wsoa/" target="_blank">Wits School of Art,
                    </a>University of the Witwatersrand (graduated in 2007, with distinction)</h3>
                <p>Course work: Public Culture, Culture and Media Management, Curating Exhibitions</p>
                <h3>BA Fine Art at <a href="https://www.wits.ac.za/wsoa/" target="_blank">Wits School of Art, </a>
                    University of the Witwatersrand (graduated in 2005, with distinction)</h3>
                <ul>
                    <li>Painting and Art Criticism</li>
                    <li>Design and Drawing</li>
                </ul>
                <h3>Short courses</h3>
                <ul>
                    <li>IsiZulu, Level 1, Wits Language School, University of the Witwatersrand</li>
                    <li>Adobe Photoshop at Wits Digital School of Arts, University of the Witwatersrand</li>
                    <li>Stop-frame Animation at Wits Digital School of Arts, University of the Witwatersrand</li>
                    <li>Adobe Animate at Wits Digital School of Arts, University of the Witwatersrand</li>
                </ul>
                <h3>Computer Skills</h3>
                <ul>
                    <li>Adobe Creative Cloud: Photoshop, Illustrator, InDesign, Premiere Pro, Animate (advanced)</li>
                    <li>Microsoft Office: Microsoft Word, PowerPoint, Excel (advanced)</li>
                    <li>3D modeling: SketchUp (intermediate)</li>
                    <li>UI/UX: Figma, Adobe Xd (some experience)</li>
                    <li>Website builders: Wordpress, Cargo (advanced)</li>
                    <li>Frontend Development: React.js, JavaScript, HTML, CSS,
                        Git, Github, various JS libraries (entry-level)</li>
                </ul>
                <h3>General Skills</h3>
                <ul>
                    <li>Project Management</li>
                    <li>Exhibition Management & Curating</li>
                    <li>Event Management</li>
                    <li>Research</li>
                    <li>Writing & Editing</li>
                    <li>Artist Management</li>
                    <li>Budget Management</li>
                    <li>Inventory Management</li>
                    <li>Artwork production</li>
                    <li>Video Editing & Post-production</li>
                    <li>Video Synchronisation & Installation</li>
                    <li>Fundraising</li>
                    <li>Communications & PR</li>
                    <li>Archiving</li>
                    <li>Sales</li>
                    <li>Design (digital, print & product) & Branding</li>
                    <li>2D Animation</li>
                    <li>3D Modelling</li>
                    <li>Content creation (copy & creative)</li>
                    <li>Web development, design, UI/UX & SEO</li>
                </ul>
        </section>
        <!-- about page menu -->
        <aside class="pages-flex-container" id="page-menu">
            <div class="aside-sticky">
                <div class="page-items"><a href="about">
                        about <img src="./images/about-icon.svg" alt="about" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="experience">
                        experience <img src="./images/experience-icon.svg" alt="education" class="menu-icons">
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


customElements.define('main-education', MainEducation);