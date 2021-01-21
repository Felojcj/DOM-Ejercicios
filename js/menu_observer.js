export default function menuObserver() {
  const callback = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        console.log(id)
        d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.add('active-menu')
      } else {
        d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.remove('active-menu')
      }
    })
  }
  
  const d = document,
  $sections = d.querySelectorAll('section[data-scroll-spy]'),
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  const observer = new IntersectionObserver(callback, options)

  $sections.forEach(el => observer.observe(el))
}