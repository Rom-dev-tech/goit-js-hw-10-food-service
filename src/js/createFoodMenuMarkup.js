import foodServiceTpl from '../templates/food-service-menu.hbs';

export default function createFoodMenuMarkup(foodMenu) {
   return foodServiceTpl(foodMenu);
}