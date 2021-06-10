import refs from './js/refs';
import foodMenu from './js/menu.json'
import createFoodMenuMarkup from './js/createFoodMenuMarkup';
import onCheckboxClick from './js/isChangeTheme';
import './sass/main.scss';

// Разметка
const menuMarkup = createFoodMenuMarkup(foodMenu)
refs.menuContainer.insertAdjacentHTML('beforeend', menuMarkup)

// Слушатели
refs.checkBox.addEventListener('change', onCheckboxClick);