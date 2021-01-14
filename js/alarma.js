export function clockAndAlarm(clock, btnStart, btnStop) {
  const d = document
  let clockTempo

  d.addEventListener('click', e => {
    if (e.target.matches(btnStart)) {

      clockTempo = setInterval(() => {
          let objHour = new Date()
          let fullHour = objHour.toLocaleTimeString()
          d.querySelector(clock).innerHTML = `<h3>${fullHour}</h3>`
      }, 1000)


      e.target.disabled = true
      d.querySelector(btnStop).disabled = false
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo)
      e.target.disabled = true
      d.querySelector(btnStart).disabled = false
      d.querySelector(clock).innerHTML = null
    }
  })
}

export function playAlarm(sound, btnStart, btnStop) {
  const d = document
  let alarmTempo
  const $alarm = d.createElement('audio')
  $alarm.setAttribute('src', sound)

  d.addEventListener('click', e => {
    if (e.target.matches(btnStart)) {
      alarmTempo = setTimeout(() => {
        $alarm.play()
      } , 2000)

      e.target.disabled = true
      d.querySelector(btnStop).disabled = false
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo)

      $alarm.pause()
      $alarm.currentTime = 0

      e.target.disabled = true
      d.querySelector(btnStart).disabled = false
    }
  })
}
