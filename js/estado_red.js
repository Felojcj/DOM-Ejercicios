export default function networkStatus(id) {
  const w = window,
  $id = document.getElementById(id),
  n = navigator

  const isOnLine = () => {
    if(n.onLine) {
      $id.classList.add('online')
      $id.classList.remove('offline')
      $id.innerHTML = `
        <p>Conectado a la red</p>
      `
    } else {
      $id.classList.add('offline')
      $id.classList.remove('online')
      $id.innerHTML = `
        <p>Conexion Perdida</p>
      `
    }

    setTimeout(() => {
      $id.innerHTML = null
      $id.classList.remove('online', 'offline')
    }, 4000)
  }

  w.addEventListener('online', e => isOnLine())

  w.addEventListener('offline', e => isOnLine())

}