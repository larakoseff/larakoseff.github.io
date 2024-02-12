export class ContactCircles extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class="contact">
        <section>
            <div class="circle-1">
                <div class="circle-text"><a href="./contact.html">contact</a></div>
            </div>
        </section>
        <section>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
        </section>
    </div>
        `;
    }
}

customElements.define('contact-circles', ContactCircles);