export  function scrollTop(btnContainer) {
  const d = document,
  w = window,
  $scrollBtnContainer = d.querySelector(btnContainer),
  $arrow = d.createElement('button')
  $arrow.classList.add('arrow')
  $arrow.textContent = '☝️'

  w.addEventListener('scroll', e => {
    if (scrollY >= 600) {
      $scrollBtnContainer.insertAdjacentElement('afterbegin', $arrow)
      $arrow.classList.remove('hidden')
    }
    if (scrollY < 600) {
      $arrow.classList.add('hidden')
    }
  })

d.addEventListener('click', e => {
  if (e.target.matches('.arrow')) {
    w.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
})
}