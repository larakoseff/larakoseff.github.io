export class Oops extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        if (window.location.pathname.includes("404.html")) {
            this.innerHTML = `
         <main class="main-oops">
        <section class="main-flex-container">
            <div class="main-item-1" id="about">
                oops <img src="./images/error-page.svg" alt="error" class="about-icon">
            </div>
            <div class="main-item-2" id="error">
                <p>The page you're looking for does not exist.</p>
            </div>
        </section>
        <!-- about page menu -->
        <aside class="pages-flex-container" id="page-menu">
            <div class="aside-sticky">
                <div class="page-items"><a href="./education.html">
                        education <img src="./images/education-icon.svg" alt="education" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="./experience.html">
                        experience <img src="./images/experience-icon.svg" alt="experience" class="menu-icons">
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


customElements.define('main-oops', MainOops);