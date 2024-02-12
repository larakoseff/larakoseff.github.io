export class NameFlex extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="name-flex">
            <div><img src="./images/L.svg" alt="L" class="letter"></div>
            <div><img src="./images/A.svg" alt="A" class="letter"></div>
            <div><img src="./images/R.svg" alt="R" class="letter"></div>
            <div><img src="./images/A.svg" alt="A" class="letter"></div>
            <div><img src="./images/empty-space.svg" alt="empty" class="letter"></div>
            <div><img src="./images/K.svg" alt="K" class="letter"></div>
            <div><img src="./images/O.svg" alt="O" class="letter"></div>
            <div><img src="./images/S.svg" alt="S" class="letter"></div>
            <div><img src="./images/E.svg" alt="E" class="letter"></div>
            <div><img src="./images/F.svg" alt="F" class="letter"></div>
            <div><img src="./images/F.svg" alt="F" class="letter"></div>
        </section>
        `;
    }
}

customElements.define('name-flex', NameFlex);