export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document

  d.addEventListener('click', e => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panelBtn).classList.toggle('is-active')
      d.querySelector(panel).classList.toggle('toggle-menu')
    }

    if (e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)) {
      d.querySelector(panelBtn).classList.toggle('is-active')
      d.querySelector(panel).classList.toggle('toggle-menu')
    }
  })
}

/* EL * en la funcion matches representa todos los hijos del atributo que se ingresa previo al dolar
  un ejemplo seria:
    <button class="hamburger hamburger--elastic" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    donde `${panelBtn} *`, panelBtn tomando el valor de '.hamburguer', todos los hijos del elemento que contenga hamburguer son true
    osea en este caso los dos span
*/