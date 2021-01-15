export function darkMode(btnDark, main, icon) {
  const d = document,
  $iconChange = d.querySelector(icon),
  $mainToggle = d.querySelector(main),
  $btnToggle = d.querySelector(btnDark)

  d.addEventListener('click', e => {
    if ((e.target.matches(btnDark) || e.target.matches(icon)) && $iconChange.classList.contains('fa-moon')) {
      $iconChange.classList.replace('fa-moon', 'fa-sun')
      $mainToggle.classList.toggle('dark-mode')
      $btnToggle.classList.toggle('active-dark')
    }
    else if ((e.target.matches(btnDark) || e.target.matches(icon)) && $iconChange.classList.contains('fa-sun')) {
      $iconChange.classList.replace('fa-sun', 'fa-moon')
      $mainToggle.classList.toggle('dark-mode')
      $btnToggle.classList.toggle('active-dark')
    }
  })
}