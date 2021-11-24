import CONFIG from '../../globals/config';
import '../../component/card-item';

const createRestaurantDetailTemplate = (restaurant) => `
<h1>Deskripsi Restaurant</h1>
<div class="innerDetail">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="descriptDetail">
        <h2>${restaurant.name}</h2>
        <p><b>Rating</b> : <span>${restaurant.rating} ⭐️</span></p>
        <p><b>City</b> : <span>${restaurant.city}</span></p>
        <p><b>Alamat</b> : <span>${restaurant.address}</span></p>
        <p><b>Deskripsi</b> : <span>${restaurant.description}</span></p>
    </div>
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
`;

const createRestaurantItemTemplate = (restaurants) => {
    restaurants.forEach((restaurant) => {
        const cardItem = document.createElement('card-item');
        cardItem.item = restaurant;
        document.querySelector('.products').appendChild(cardItem);
    });
};

const myRepeatFoodAndDrink = (data, no) => `
    <p>${no}. ${data.name}</p>
`;

const myReview = (data) => `
    <div class="cardReview">
        <div class="innercard">
            <div class="account">
                <i class="fas fa-user"></i>
                <p>${data.name}</p>
            </div>
            <div class="tglReview">
                <p>${data.date}</p>
            </div>
        </div>
        <div class="reviewConsumen">
            <div>${data.review}</div>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this resto" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    myRepeatFoodAndDrink,
    myReview,
};