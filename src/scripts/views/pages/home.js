import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";
const Home = {
    async render() {
        return `<div class="hero">
                    <div class="hero__inner">
                        <h2 class="hero__title">Premium Desert</h2>
                        <p class="hero__tagline">snacks for gain your mood</p>
                        <a href="#" class="btn btn-read">Read More</a>
                    </div>
                </div>

                <main>
                    <section class="content">
                        <div class="product">
                            <h3 class="product__label">Produk Kami</h3>
                            <div class="container">
                                <hr>
                            </div>
                            <div class="products">
                                
                            </div>
                        </div>
                    </section>
                </main>
        `;
    },
    async afterRender() {
        const restaurants = await RestaurantSource.listRestaurant();
        createRestaurantItemTemplate(restaurants);
    },
};
export default Home;