const d = document

const getWinner = (selector, parentElement) => {
  const $giveawayList = d.querySelectorAll(selector),
  winNumber = Math.round(Math.random() * $giveawayList.length),
  $parent = d.getElementById(parentElement),
  winner = $giveawayList[winNumber].textContent


  $parent.insertAdjacentHTML('afterend', `<p class="winner">El ganador es ${winner}</p>`)
}

export default function giveaway(list, btn, parentElement) {
  const $drawBtn = d.getElementById(btn)

  d.addEventListener('click', e => {
    if (e.target === $drawBtn){ 
      getWinner(list, parentElement)
      $drawBtn.disabled = true
    }

  }, { once: true })
}