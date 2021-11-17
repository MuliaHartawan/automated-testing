import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import {
    createLikeButtonTemplate,
    createRestaurantDetailTemplate
} from "../templates/template-creator";
import {
    repeatMenu,
    repeatReview
} from "../../utils/menu-initator";

const Detail = {
    async render() {
        return `
        <main>
            <component-detail>
            <div class="detail">
                <h1>Deskripsi Restaurant</h1>
                <div class="innerDetail">
                    
                    <div class="menu">
                        <div class="food">
                            <h3>Makanan</h3>
                            <div class="innerFood">
                            
                            </div>
                        </div>

                        <div class="drink">
                            <h3>Minuman</h3>
                            <div class="innerDrink">
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
            <div class="review">
            <h2>Review</h2>
            <div class="containerRev">
                <div class="innerReview">
        
            </div>
            </div>
            </div>
            <div id="likeButtonContainer">
        
            </div>
            </component-detail>
        </main>
        `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('.detail');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        const componentFood = document.querySelector('.innerFood');
        const componentDrink = document.querySelector('.innerDrink');
        const AllDataFood = restaurant.menus.foods;
        const AllDataDrink = restaurant.menus.drinks;
        repeatMenu(AllDataFood, componentFood);
        repeatMenu(AllDataDrink, componentDrink);

        // manipulasi dom review
        const componentReview = document.querySelector('.innerReview');
        const AllDataReview = restaurant.customerReviews;
        repeatReview(AllDataReview, componentReview);

        // buttonLike.innerHTML = createLikeButtonTemplate
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                city: restaurant.city,
                pictureId: restaurant.pictureId,
                rating: restaurant.rating,
            }

        });
    },
}

export default Detail;