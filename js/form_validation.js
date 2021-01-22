const d = document
export default function validate() {
  const $form = d.querySelector('.v-form'),
  $inputs = d.querySelectorAll('.v-form [required]')

  $inputs.forEach(input => {
    const $span = document.createElement('span')
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add('v-form_error', 'none')
    input.insertAdjacentElement('afterend', $span)
  })

  d.addEventListener('keyup', e => {
    if (e.target.matches('.v-form [required]')) {
      let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern

      if (pattern && $input.value !== '') {
        const regex = new RegExp(pattern)
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add('is-active')
          : d.getElementById($input.name).classList.remove('is-active')
      }

      if (!pattern) {
        return $input.value === ''
        ? d.getElementById($input.name).classList.add('is-active')
        : d.getElementById($input.name).classList.remove('is-active')
      }
    }
  })

  d.addEventListener('submit', e => {
    if (e.target === $form) {
      const $loader = d.querySelector('.contact-form_loader'),
      $response = d.querySelector('.contact-form_response')

      $loader.classList.remove('none')

      setTimeout(() => {
        $loader.classList.add('none')
        $response.classList.remove('none')
        $form.reset()
        setTimeout(() => $response.classList.add('none'), 3000)
      }, 3000)
    }
  })
}