import './sass/main.scss';
import onCheckboxClick from './js/isChangeTheme';

// Refs
import refs from './js/refs';

// Слушатели
refs.checkBox.addEventListener('change', onCheckboxClick);
