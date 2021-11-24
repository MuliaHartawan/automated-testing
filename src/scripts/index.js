import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/nav-app';
import './component/footer-app';
import './component/card-list';
import '@fortawesome/fontawesome-free/js/all';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#navigation'),
    drawer: document.querySelector('.nav__list'),
    content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

window.onscroll = () => {
    // eslint-disable-next-line no-use-before-define
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.boxShadow = '5px 5px 25px black';
    } else {
        document.getElementById('navbar').style.boxShadow = '';
    }
}