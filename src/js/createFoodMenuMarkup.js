import foodMenu from './menu.json'
import foodServiceTpl from '../templates/food-service.hbs';


export default function createFoodMenuMarkup(foodMenu) {
   return foodMenu.map(foodServiceTpl).join('');
}