class FooterApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <span >Copyright © 2021 - Jajan Antari</span>
        </footer>
        `;
    }
}
customElements.define('footer-app', FooterApp);