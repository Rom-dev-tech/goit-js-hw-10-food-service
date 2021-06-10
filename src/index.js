import refs from './js/refs';
import createFoodMenuMarkup from './js/createFoodMenuMarkup';
import foodMenu from './js/menu.json'
import onCheckboxClick from './js/isChangeTheme';
import './sass/main.scss';

// Разметка
const menuMarkup = createFoodMenuMarkup(foodMenu)
refs.menuContainer.insertAdjacentHTML('beforeend', menuMarkup)

// Слушатели
refs.checkBox.addEventListener('change', onCheckboxClick);
