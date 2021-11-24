import {
    myRepeatFoodAndDrink,
    myReview,
} from '../views/templates/template-creator';

const repeatMenu = (allData, component) => {
    allData.forEach((data) => {
        const number = allData.indexOf(data) + 1;
        // eslint-disable-next-line no-param-reassign
        component.innerHTML += myRepeatFoodAndDrink(data, number);
    });
};

const repeatReview = (allData, component) => {
    allData.forEach((data) => {
        // eslint-disable-next-line no-param-reassign
        component.innerHTML += myReview(data);
    });
};

export {
    repeatMenu,
    repeatReview,
};