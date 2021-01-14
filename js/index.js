import hamburgerMenu from './hamburger.js'
import { clockAndAlarm, playAlarm } from './alarma.js'
import  { movementKey, shortcuts } from './movement.js'

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
  movementKey('.circulo')
  shortcuts()
})