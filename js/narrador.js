const d = document,
w = window

export default function speach(form ,select) {
  const $form = d.querySelector(form),
  $voiceSelect = d.querySelector(select),
  $input = d.querySelector('.txt'),
  synth = w.speechSynthesis,
  speaker = new SpeechSynthesisUtterance()

  const options = () => {
    setTimeout (() => {
      synth.getVoices().forEach(el => {
        const $options = d.createElement('option')
        $options.textContent = `${el.name}`
        $voiceSelect.insertAdjacentElement('afterbegin', $options)
      })
    }, 10)
  }

  options()

  d.addEventListener('change', e => {
    if(e.target === $voiceSelect) {
      speaker.voice = synth.getVoices().find(voice => voice.name === e.target.value)
    }
  })

  d.addEventListener('submit', e => {
    if (e.target === $form) {
      e.preventDefault()
      speaker.text = $input.value
      synth.speak(speaker)
    }
  })
}