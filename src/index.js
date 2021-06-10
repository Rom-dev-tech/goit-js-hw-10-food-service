import refs from './js/refs';
import foodMenu from './js/menu.json'
import createFoodMenuMarkup from './js/createFoodMenuMarkup';
import onCheckboxClick from './js/isChangeTheme';
import './sass/main.scss';

// Markup
const menuMarkup = createFoodMenuMarkup(foodMenu)
refs.menuContainer.insertAdjacentHTML('beforeend', menuMarkup)

// Listener
refs.checkBox.addEventListener('change', onCheckboxClick);