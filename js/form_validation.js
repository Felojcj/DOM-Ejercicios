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
        console.log(regex.exec($input.value))
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
      
    }
  })
}