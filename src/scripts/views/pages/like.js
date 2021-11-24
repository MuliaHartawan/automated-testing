import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
    createRestaurantItemTemplate,
}
from '../templates/template-creator';

const Like = {
    async render() {
        return `
        <main>
            <section class="content">
                <div class="products" id="list-product" tabindex="0">
                    
                </div>
            </section>
        </main>
        `;
    },

    async afterRender() {
        const restaurants = await favoriteRestaurantIdb.getAllRestaurant();
        createRestaurantItemTemplate(restaurants);
    },
};

export default Like;