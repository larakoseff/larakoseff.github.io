export class MainExperience extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        if (window.location.pathname.includes("experience")) {
            this.innerHTML = `
                <main class="main-experience">
        <section class="main-flex-container">
            <div class="main-item-1" div id="experience">
                experience <img src="./images/experience-icon-white.svg" alt="experience" class="menu-icons">
                </a></div>
            </div>
            <div class="main-item-2" id="experience">
                <h3>Co-Founder & Project Manager at <a href="http://www.incca.org.za" target="_blank">INCCA
                    </a>(2020-present)</h3>
                <ul>
                    <li>Project Management</li>
                    <li>Exhibition Management & Curating</li>
                    <li>Event Management</li>
                    <li>Fundraising</li>
                    <li>Budget Management</li>
                    <li>Writing & Editing</li>
                    <li>Communications & PR</li>
                    <li>Design (digital, print & product) & Branding</li>
                    <li>2D animation</li>
                    <li>3D Modeling</li>
                    <li>Content creation (copy & creative)</li>
                    <li>Web development, design, UI/UX & SEO</li>
                </ul>
                <h3>Project Manager/Coordinator at <a href="https://south-south.art/" target="_blank">SOUTH SOUTH
                    </a>(2020-2022, with 1 year parenting break)</h3>
                <ul>
                    <li>Project Management</li>
                    <li>Exhibition Management</li>
                    <li>Event Management</li>
                    <li>Budget Management</li>
                    <li>Fundraising</li>
                    <li>Writing & Editing</li>
                    <li>Communications & PR</li>
                    <li>Design (digital & print) & Branding</li>
                    <li>2D animation</li>
                    <li>Content creation (copy & creative)</li>
                    <li>Web development, design, UI/UX & SEO</li>
                </ul>
                <h3>Independent arts professional (2018-present)</h3>
                <ul>
                    <li>Project Management</li>
                    <li>Exhibition Management & Curating</li>
                    <li>Event Management</li>
                    <li>Research</li>
                    <li>Writing & Editing</li>
                    <li>Artist Management</li>
                    <li>Fundraising</li>
                    <li>Communications & PR</li>
                    <li>Design (digital, print & product) & Branding</li>
                    <li>2D animation</li>
                    <li>3D Modeling</li>
                    <li>Content creation (copy & creative)</li>
                    <li>Web development, design, UI/UX & SEO</li>
                </ul>
                <h3>Senior Curator at <a href="http://www.goodman-gallery.com" target="_blank">Goodman Gallery
                    </a>(2010-2018)</h3>
                <ul>
                    <li>Project Management</li>
                    <li>Exhibition Management & Curating</li>
                    <li>Event Management</li>
                    <li>Budget Management</li>
                    <li>Research</li>
                    <li>Writing & Editing</li>
                    <li>Artist Management</li>
                    <li>Inventory Management</li>
                    <li>Artwork production</li>
                    <li>Communications & PR</li>
                    <li>Archiving</li>
                    <li>Sales</li>
                    <li>Design (digital, print & product) & Branding</li>
                    <li>2D animation</li>
                    <li>3D Modeling</li>
                    <li>Content creation (copy & creative)</li>
                    <li>Web development, design, UI/UX & SEO</li>
                </ul>
        </section>
        <!-- about page menu -->
        <aside class="pages-flex-container" id="page-menu">
            <div class="aside-sticky">
                <div class="page-items"><a href="./about.html">
                        about <img src="./images/about-icon.svg" alt="about" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="./education.html">
                        education <img src="./images/education-icon.svg" alt="education" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="./projects.html">
                        projects <img src="./images/projects-icon.svg" alt="projects" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="./index.html">
                        home <img src="./images/home-icon.svg" alt="home" class="menu-icons">
                    </a></div>
            </div>
            <aside>
    </main>
        `;
        }
    }
}


customElements.define('main-experience', MainExperience);