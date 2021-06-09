const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body')

export default function isChangeTheme(evt) {
  // evt.currentTarget.checked ? localStorage.setItem('theme', Theme.DARK) : localStorage.setItem('theme', Theme.LIGHT);
  let value = '';
  if (evt.currentTarget.checked) {
    value = Theme.DARK
    body.classList.add(value)
    body.classList.remove(Theme.LIGHT)
  } else {
    value = Theme.LIGHT
    body.classList.remove(Theme.DARK)
    body.classList.add(value)
  }
  localStorage.setItem('theme', value)
}

