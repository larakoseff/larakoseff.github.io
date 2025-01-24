export class MainProjects extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        if (window.location.pathname.includes("projects")) {
            this.innerHTML = `
            <main class="main-projects">
        <section class="main-flex-container">
            <div class="main-item-1" id="projects"> projects <img src="./images/projects-icon.svg" alt="projects"
                    class="menu-icons"></a></div>
            <div class="main-item-2" id="projects">
                <h3>Independent art projects</h3>
                In 2018 I embarked on an independent career and built various platforms, both online and offline,
                that supported independent and emergent practice, including <a
                    href="https://bubblegumclub.co.za/art/offsetculture-art-launches-poster-series-pictorial-nerve/"
                    target="_blank">offset culture</a> and the <a href="https://underlineshow.co.za/"
                    target="_blank">UNDERLINE show</a>, which was received to much acclaim and led to myself and
                co-founder Londi Modiko to being featured on the <a
                    href="https://www.apollo-magazine.com/lara-koseff-and-londi-modiko-apollo-40-under-40-africa-the-business/"
                    target="_blank">Apollo 40 Under 40
                    Africa</a> list in 2020. During this time curatorial projects include LOST LOVER at <a
                    href="https://www.lanchonetelanchonete.com/" target="_blank">Lanchonete Lanchonete</a>, in Rio
                de Janeiro, Brazil and <a href="https://www.rampa.pt/event/lost-lover/" target="_blank">RAMPA</a> in
                Porto, Portugal and <i>I don’t understand what you’re talking about, but I know what you mean</i>, with
                <a href="https://www.instagram.com/borghi.paula/" target="_blank">Paula Borghi</a> at Goodman Gallery in
                Cape Town and <a href="https://www.flickr.com/photos/arteba/albums/72157690607216133/"
                    target="_blank">arteba's CARDINAL section in collaboration with Pasto Galeria</a> in Buenos Aires in
                2019. In 2020, with Modiko and
                Nthabiseng Mokoena, I co-founded <a href="https://incca.org.za/" target="_blank">INCCA (Independent
                    Network for Contemporary Culture & Art)</a>, a non-profit company that aims to foster
                independent cultural practice. I continue to work on INCCA projects and offer design, content, digital
                communication and project management for the platform on an ongoing basis.
            </div>
            <div><a href="https://incca.org.za/Feature-The-fibre-art-of-Ditiro-Mashigo" target="_blank"><img
                        src="./images/ditiro-mashigo.jpg" alt="project image" class="project-image"></a></div>

            <div class="main-item-2" id="projects">
                <h3>Product Design, Web & Coding projects</h3>
                I completed a 6-month Frontend Development
                bootcamp in 2023 at <a href="https://www.codespace.co.za/" target="_blank">CodeSpace</a>, and am
                currently deepening my skills in UI/UX engineering, 2D motion design, as well as <a href="https://react.dev/" target="_blank>">React</a>
                and exploring libraries such as <a href="https://d3js.org/" target="_blank">D3.js</a> and <a
                    href="https://p5js.org/" target="_blank">p5.js</a>. As part of the bootcamp, we started with the
                basics, creating games and animations in <a href="https://scratch.mit.edu/projects/861818624/"
                    target="_blank"> Scratch</a>, a coding community and language designed for children. We then learnt wire-framing, HTML and CSS, as well as deep diving
                into JavaScript and touching on React. Since completing the bootcamp, I have managed product design and front-end development projects including a brand merger and website redesign for <a href="https://somethinggoodstudio.com/" target="_blank>">Something Good Studio</a>, as well as taking on an ambitious custom data visualisation project called <a href="https://tinyletters.github.io/#/" target="blank">tiny letters for mothers</a>. Prior to this, I used website builders
                such as WordPress and Cargo to design and create sites for my own initiatives such as <a
                    href="https://underlineshow.co.za/" target="_blank">UNDERLINE projects</a> and <a
                    href="https://incca.org.za/" target="_blank">INCCA</a>, as well as for others, including <a
                    href="https://panicplatform.net/" target="_blank">Pan African Network of Independent
                    Contemporaneity</a> and <a href="https://macrobioticeating.co.za/" target="_blank">Macrobiotic
                    Eating</a>. In addition I managed the online presence, as well as the digital maintenance and evolution for <a href="http://www.goodman-gallery.com" target="_blank">Goodman Gallery</a>, and eventually their <a href="https://south-south.art/" target="_blank">SOUTH SOUTH</a> project over the course of almost a decade.   
            </div>
            <div>
                <a href="https://tinyletters.github.io/" target="_blank">
                    <video src="./images/tiny-letters.mp4" autoplay loop class="project-image">
                        This browser does not support HTML video.
                    </video></a>
            </div>
            <div class="scratch-frame"><iframe src="https://scratch.mit.edu/projects/861818624/embed"
                    allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen
                    class="project-image"></iframe></div>
            </div>
            <div>
                <a href="https://underlineshow.co.za/" target="_blank">
                    <video src="./images/underline.mp4" autoplay loop class="project-image">
                        This browser does not support HTML video.
                    </video></a>
            </div>

            <div class="main-item-2" id="projects">
                <h3>Selected writing and publications</h3>
                I have edited, compiled and contributed to numerous
                publications on art and together with Londi Modiko have written regularly for
                publications such as the <i>Sunday Times</i> in South Africa about the
                local art industry. I have also researched and presented academic
                papers concerning the art market and cultural economics at the
                <a href="https://www.christies.com/about-us/press-archive/details?PressReleaseID=9342"
                    target="_blank">Christie’s Symposium on Women Art Dealers (1940-1990)</a> in 2019
                and the College Art Association’s (CAA) 103rd Annual Conference
                in 2015, both in New York City. My paper presented at the CAA
                conference on the economic viability of new media art in South
                Africa was published in <a href="https://www.tandfonline.com/doi/abs/10.1080/19301944.2016.1205383"
                    target="_blank"> Critical Interventions: Journal of
                    African Art History and Visual Culture</a> in 2016 and the paper
                presented at Christie’s was published by Bloomsbury in a book
                dedicated to the Symposium in 2024, titled <a
                    href="https://www.bloomsbury.com/uk/women-art-dealers-9781350292451/" target="_blank">Women Art
                    Dealers:
                    Creating Markets for Modern Art, 1940–1990</a>.
            </div>
            <div><img src="./images/Writing.gif" alt="writing gif" class="project-image"></div>

            <div class="main-item-2" id="projects">
                <h3>SOUTH SOUTH</h3>
                In 2020 I rejoined <a href="http://www.goodman-gallery.com" target="_blank">Goodman Gallery</a> to
                oversee the evolution of the <a href="https://south-south.art/" target="_blank">SOUTH SOUTH</a> project,
                which – in collaboration with galleries in Brazil, Mexico City, Uganda, India, Tokyo and New York City -
                was established as an online community, an anthology, an archive and a resource focussed on the Global
                South. Prior to a year-long maternity hiatus I worked on the platform as a project manager, rejoining as
                project coordinator in early 2022 , and intermittently consult on the initiative. My work on SOUTH SOUTH
                has included liaising with galleries, curators, collectors and artists, overseeing the website
                development and content and roll out and marketing of a regular programme, including special projects in
                São Paulo and Johannesburg.
            </div>
            <div><a href="https://south-south.art/veza-new-media-focus/" target="_blank"><img
                        src="./images/project-image-1.jpg" alt="SOUTH SOUTH" class="project-image"></a></div>
            <div class="main-item-2" id="projects">
                <h3>Visual Art Merchandise Design</h3>
                Since 2018 I have worked with <a href="http://www.goodman-gallery.com" target="_blank">Goodman
                    Gallery</a> on a project basis as the production manager for a range of products including <a
                    href="https://shop-goodman-gallery.com/collections/bags" target="_blank">tote
                    bags</a>, as well as <a href="https://shop-goodman-gallery.com/collections/artist-blankets"
                    target="_blank">woven
                    textiles</a> made in collaboration with Zydia Botes from <a
                    href="https://www.somethinggoodstudio.com/" target="_blank">Something Good Studio</a> to raise funds
                for charities
                such as the Witkoppen Health and
                Welfare Clinic. These products have featured the work of artists such as William Kentridge, Ghada Amer & Reza Farkhondeh,
                Cassi Nomada, Nolan Oswald Dennis, and Hank Willis Thomas, amongst others.
            </div>
            <div><a href="https://shop-goodman-gallery.com/collections/bags" target="_blank"><img
                        src="./images/projects-products.jpg" alt="GG tote bag" class="project-image"></a></div>
            <div><a href="https://shop-goodman-gallery.com/collections/artist-blankets" target="_blank"><img
                        src="./images/GG-blanket.jpg" alt="GG blanket" class="project-image"></a></div>
            <div class="main-item-2" id="projects">
                <h3>Goodman Gallery</h3>
                From 2010-2018, I worked at <a href="http://www.goodman-gallery.com" target="_blank">Goodman Gallery</a>
                Johannesburg, primarily in a curatorial, communications and editorial capacity and as a liaison for over
                15 artists.
                Here I was, as Latin America liaison, involved in the inception of SOUTH SOUTH, a curatorial initiative
                exploring connections within and constructions of the Global South. My experience at Goodman ranged
                extensively and included: managing and curating exhibitions, events and other projects; managing artist
                relationships, production and inventory; writing,
                editing and designing various material from press releases to catalogues and books; managing the gallery
                brand, communications, aspects of the website and archive;
                conceptualising and writing all art fair applications;
                managing and attending art fairs (Paris Photo; Frieze New York and London; SP-Arte); developing and
                expanding networks with writers, curators, collectors and museum professionals; hosting museum
                delegations and designing itineraries including studio visits and special presentations; research on and
                developing relationships with new
                artists.
            </div>
            <div><img src="./images/GG.gif" alt="project image" class="project-image"></div>
            </div>
        </section>


        <!-- about page menu -->
        <aside class="pages-flex-container" id="page-menu">
            <div class="aside-sticky">
                <div class="page-items"><a href="about">
                        about <img src="./images/about-icon.svg" alt="about" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="education">
                        education <img src="./images/education-icon.svg" alt="education" class="menu-icons">
                    </a></div>
                <div class="page-items"><a href="experience">
                        experience <img src="./images/experience-icon.svg" alt="education" class="menu-icons">
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


customElements.define('main-projects', MainProjects);