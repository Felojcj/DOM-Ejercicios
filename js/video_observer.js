export default function videoSpy () {
  const cb = entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.play()
        entry.target.muted = false
      } else {
        entry.target.pause()
        entry.target.currentTime = 0
        entry.target.muted = true
      }
      w.addEventListener('visibilitychange', e => {
        if (d.visibilityState === 'hidden') entry.target.pause()
        else entry.target.play()
      })
    });
  }
  
  const d = document,
  w = window,
  $videos = d.querySelectorAll('video[data-smart-video]'),
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  const observer = new IntersectionObserver(cb, options)

  $videos.forEach(video => observer.observe(video))


}