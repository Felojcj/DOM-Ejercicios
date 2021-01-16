export default function tester(mainForm) {
  const d = document,
  w = window,
  $form = document.getElementById(mainForm)
  let tester

  d.addEventListener('submit', e => {
    e.preventDefault()
    if(e.target === $form) {
      tester = w.open($form.direccion.value, 'tester', `width=${$form.ancho.value}, height=${$form.alto.value}`)
      console.log('abrir')
    }
  })

  d.addEventListener('click', e => {
    if(e.target === $form.close) {
      tester.close()
      console.log('cerrar')
    }
  })
}