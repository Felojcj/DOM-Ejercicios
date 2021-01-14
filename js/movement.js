export function movementKey(objectToMove, square) {
  const d = document
  let posX = 0,
  posY = 0,
  movementX = 0,
  movementY = 0
  
  document.addEventListener('keydown', e => {
    const stageLimit = d.querySelector(square).getBoundingClientRect(),
    ballLimit = d.querySelector(objectToMove).getBoundingClientRect()
    if (e.key === 'ArrowRight' && ballLimit.right < (stageLimit.right - 15)) {
      posX += 15
      movementX = posX.toString() + '%'
      // d.querySelector(objectToMove).style.setProperty('left', movementX)
    }

    if (e.key === 'ArrowLeft' && ballLimit.left > (stageLimit.left + 15)) {
      posX -= 15
      movementX = posX.toString() + '%'
      // d.querySelector(objectToMove).style.setProperty('left', movementX)
    }

    if (e.key === 'ArrowUp'&& ballLimit.top > (stageLimit.top + 15)) {
      posY -= 15
      movementY = posY.toString() + '%'
      // d.querySelector(objectToMove).style.setProperty('top', movementY)
    }

    if (e.key === 'ArrowDown' && ballLimit.bottom < (stageLimit.bottom - 15)) {
      posY += 15
      movementY = posY.toString() + '%'
      // d.querySelector(objectToMove).style.setProperty('top', movementY)
    }

    d.querySelector(objectToMove).style.transform = `translate(${movementX} ,${movementY})`
    e.preventDefault()
  })
}

export function shortcuts() {
  const d = document

  d.addEventListener('keydown', e => {
    if (e.key === 'a' && e.altKey) {
      alert('Haz lanzado una alerta con un atajo de teclado')
    }

    if (e.key === 'c' && e.altKey) {
      confirm('Haz lanzado una confirmacion con un atajo de teclado')
    }

    if (e.key === 'p' && e.altKey) {
      prompt('Haz lanzado un aviso con un atajo de teclado')
    }
  })
}