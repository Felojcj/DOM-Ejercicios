import hamburgerMenu from './hamburger.js'
import { clockAndAlarm, playAlarm } from './alarma.js'
import  { movementKey, shortcuts } from './movement.js'
import { countdown } from './countdown.js'
import { scrollTop } from './scroll.js'
import { darkMode } from './dark.js'
import { responsiveDesignJS } from './responsive.js'
import tester from './tester.js'
import userDeviceInfo from './deteccion_dispositivos.js'
import networkStatus from './estado_red.js'
import camera from './camara.js'
import geolocation from './geolocation.js'
import seachFilter from './filtro_busquedas.js'
import giveaway from './sorteo.js'
import responsiveSlider from './responsive_slider.js'
import menuObserver from './menu_observer.js'
import videoSpy from './video_observer.js'
import validate from './form_validation.js'

/*La funcion necesita los atributos del botton hamburguesa, su contenedor y el menu
  ejemplo:
    <nav class="menu"> -> Menu en si
    <button class="hamburger hamburger--elastic" type="button"> -> Contenedor del boton
      <button class="hamburger hamburger--elastic" type="button"> -> Boton
*/
document.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.hamburger', '.main-flex_container', '.menu')
  clockAndAlarm('.clock-flex','.start-clock', '.stop-clock')
  playAlarm('assets/alarma.mp3','.start-alarm', '.stop-alarm')
  // movementKey('.circulo', '.cuadro')
  shortcuts()
  // Elemento, fecha y mensaje a mostrar cuando se cumpla el tiempo
  countdown('.countdown', 'Jan 14, 2022, 23:59:59', 'Cuenta Regresiva Completada 😁😁😁🤣🤣')
  scrollTop('.footer-menu_container')

  // No funciona si el evento de movementKey esta activo !!
  responsiveDesignJS('.video-container', '.map-container', '(min-width: 1024px)')
  tester('main-form')
  userDeviceInfo('user-device')
  networkStatus('user-network')
  // camera('video')
  // geolocation('map')
  seachFilter('.card-filter', '.card')
  giveaway('.list-element', 'draw', 'sorteo')
  responsiveSlider('.slider-slide', '.prev', '.next')
  menuObserver('.main')
  videoSpy('.video-green')
  validate()
})
darkMode('.dark-mode-btn', '.main', '.fas')