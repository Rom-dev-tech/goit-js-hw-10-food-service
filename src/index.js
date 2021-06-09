import './sass/main.scss';
import isChangeTheme from './js/isChangeTheme';

// Refs
const checkBox = document.querySelector('#theme-switch-toggle');

// Слушатели
checkBox.addEventListener('change', isChangeTheme)

