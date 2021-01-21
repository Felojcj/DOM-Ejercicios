const d = document
let slidePosition = 0

const nextSlide = contentToSlide => {
  if (slidePosition >= contentToSlide.length - 1) {
    contentToSlide[slidePosition].classList.remove('active')
    slidePosition = 0
    contentToSlide[slidePosition].classList.add('active')
  } else {
    contentToSlide[slidePosition].classList.remove('active')
    slidePosition++
    contentToSlide[slidePosition].classList.add('active')
  }
}

const previusSlide = contentToSlide => {
  if (slidePosition <= 0) {
    contentToSlide[slidePosition].classList.remove('active')
    slidePosition = contentToSlide.length - 1
    contentToSlide[slidePosition].classList.add('active')
  } else {
    contentToSlide[slidePosition].classList.remove('active')
    slidePosition--
    contentToSlide[slidePosition].classList.add('active')
  }
}

export default function responsiveSlider(slideContent, prev, next) {
  d.addEventListener('click', e => {
    const $contentToSlide = d.querySelectorAll(slideContent)

    if (e.target.matches(next)) {
      nextSlide($contentToSlide)
      e.preventDefault() 
    }

    if (e.target.matches(prev)) {
      previusSlide($contentToSlide)
      e.preventDefault() 
    }
  })
}