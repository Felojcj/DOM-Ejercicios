export default function geolocation(id) {
  const n = navigator,
  d = document,
  $map = d.getElementById(id),
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const succes = postion => {
    $map.innerHTML = `
      <h3>Tu posicion actual es</h3>
      <ul>
        <li>Latitud: <b>${postion.coords.latitude}</b></li>
        <li>Longitud: <b>${postion.coords.longitude}</b></li>
        <li>Acuracy: <b>${postion.coords.accuracy}</b> Metros</li>
        <a href="https://www.google.com/maps/@${postion.coords.latitude},${postion.coords.longitude},15z?hl=es" target="_blank">Ver Mapa</a>
    `
  }

  const error = err => {
    $map.innerHTML = `
      <p><mark>No se logro encontrar tu posicion, error: ${err.message}</mark></p>
    `
  }

  n.geolocation.getCurrentPosition(succes, error, options)

}