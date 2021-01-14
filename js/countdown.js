export function countdown(countElement, startDate, message) {
  const d = document,
  $count = document.createElement('h3'),
  startDateMs = new Date(startDate).getTime()

  d.querySelector(countElement).insertAdjacentElement('afterend', $count)
  
  let tempo = setInterval(() => {
    let today = Date.now(),
    diffMs = startDateMs - today,
    days = Math.floor(diffMs / (1000 * 60 * 60 * 24)),
    hours =  Math.floor(diffMs % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
    minutes = Math.floor(diffMs % (1000 * 60 * 60) / (1000 * 60)),
    seconds = Math.floor(diffMs % (1000 * 60) / (1000))
    
    $count.textContent = `${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos`

    if (diffMs < 0) {
      clearInterval(tempo)
      $count.textContent = message
    }
  }, 1000)
}