import './card-item';

class CardList extends HTMLElement {
    constructor() {
        super();
    }

    set items(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="products">
        
        </div>
        `;
        const productsElement = this.querySelector('.products');
        this._items.forEach((element) => {
            const createItemElement = document.createElement('card-item');
            createItemElement.item = element;
            productsElement.appendChild(createItemElement);
        });
    }
}
customElements.define('card-list', CardList);