export function responsiveDesignJS(videoContainer, mapContainer, mq) {
  const d = document,
  w = window,
  $video = d.querySelector(videoContainer),
  $map = d.querySelector(mapContainer),
  breakPoint = w.matchMedia(mq)


  // const pcMedia = () => {
  //   $video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  //   $map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1610683549806!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  // }

  // const mobileMedia = () => {
  //   $video.innerHTML = `<a href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90">Ver Video</a>`
  //   $map.innerHTML = `<a href="https://www.google.com/maps/@6.2999213,-75.5445681,15z?hl=es">Ver Mapa</a>`
  // }

  // d.addEventListener('DOMContentLoaded', e => {
  //   if (w.matchMedia("(min-width: 1024px)").matches) pcMedia()
  //   else mobileMedia()
  // })

  // w.addEventListener('resize', e => {
  //   if (w.matchMedia("(min-width: 1024px)").matches) pcMedia()
  //   else mobileMedia()
  // })

  const responsive = e => {
    if(e.matches) {
      $video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      $map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1610683549806!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    } else {
      $video.innerHTML = `<a href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90">Ver Video</a>`
      $map.innerHTML = `<a href="https://www.google.com/maps/@6.2999213,-75.5445681,15z?hl=es">Ver Mapa</a>`
    }
  }

  breakPoint.addEventListener('change', e => {
    responsive(e)
  })

}