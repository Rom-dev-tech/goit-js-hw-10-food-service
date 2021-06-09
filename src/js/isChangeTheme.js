import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export default function onCheckboxClick(evt) {
  let value = '';
  if (evt.currentTarget.checked) {
    value = Theme.DARK;
    refs.body.classList.add(value);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    value = Theme.LIGHT;
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(value);
  }
  localStorage.setItem('theme', value);
}

function savedThemeOnReloaded() {
  const savedValue = localStorage.getItem('theme');

  if (savedValue) {
    refs.body.classList.add(savedValue);
  }

  if (savedValue === Theme.DARK) {
    refs.checkBox.setAttribute('checked', true);
  }
}
savedThemeOnReloaded();
