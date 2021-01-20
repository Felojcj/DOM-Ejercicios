const d = document

export default function seachFilter(input, selector) {
  d.addEventListener('keyup', e => {
    if (e.target.matches(input)) {
      if (e.key === 'Escape') e.target.value = ''

      d.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove('no-search') : el.classList.add('no-search'))
    }
  })
}