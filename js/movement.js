export function movementKey(objectToMove) {
  const d = document
  let posX = 0
  let posY = 0
  let movementX = 0
  let movementY = 0

  document.addEventListener('keydown', e => {
    console.log(e.key)
    if (e.key === 'ArrowRight' && posX <= 508) {
      posX += 15
      movementX = posX.toString() + '%'
      // d.querySelector(objectToMove).style.setProperty('left', movementX)
    }

    if (e.key === 'ArrowLeft' && posX >= -508) {
      posX -= 15
      movementX = posX.toString() + '%'
      // d.querySelector(objectToMove).style.setProperty('left', movementX)
    }

    if (e.key === 'ArrowUp'&& posY >= -238) {
      posY -= 15
      movementY = posY.toString() + '%'
      console.log(movementY)
      // d.querySelector(objectToMove).style.setProperty('top', movementY)
    }

    if (e.key === 'ArrowDown' && posY <= 238) {
      posY += 15
      movementY = posY.toString() + '%'
      console.log(movementY)
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