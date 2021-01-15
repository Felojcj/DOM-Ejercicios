export function darkMode(btnDark, main, icon) {
  const d = document,
  $iconChange = d.querySelector(icon),
  $mainToggle = d.querySelector(main),
  $btnToggle = d.querySelector(btnDark),
  ls = localStorage

  const ligthMode = () => {
    $iconChange.classList.replace('fa-sun', 'fa-moon')
    $mainToggle.classList.remove('dark-mode')
    $btnToggle.classList.remove('active-dark')
    ls.setItem('theme', 'light')
  }

  const darkMode = () => {
    $iconChange.classList.replace('fa-moon', 'fa-sun')
    $mainToggle.classList.toggle('dark-mode')
    $btnToggle.classList.toggle('active-dark')
    ls.setItem('theme', 'dark')
  }

  d.addEventListener('click', e => {
    if ((e.target.matches(btnDark) || e.target.matches(icon)) && $iconChange.classList.contains('fa-moon')) darkMode()
    else if ((e.target.matches(btnDark) || e.target.matches(icon)) && $iconChange.classList.contains('fa-sun')) ligthMode()
  })

  d.addEventListener('DOMContentLoaded', e => {
    if (ls.getItem('theme') === null) localStorage.setItem('theme', 'light')
    if (ls.getItem('theme') === 'light') ligthMode()
    if (ls.getItem('theme') === 'dark') darkMode()
  })
}