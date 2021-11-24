class NavApp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav id="drawer" class="nav">
            <div class="nav__section" id="navbar">
                <div class="nav__logo">
                    <h1 class="logo">Jajan Antari</h1>
                </div>
                <button class="humberger" id="navigation">&#9776;</button>
                <ul class="nav__list">
                    <li class="nav__item"><a href="/">Home</a></li>
                    <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav__item"><a href="https://github.com/MuliaHartawan" target="_blank">About Us</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}
customElements.define('nav-app', NavApp);