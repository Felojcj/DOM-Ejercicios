export default function camera(id) {
  const n = navigator,
  d = document,
  $video = d.getElementById(id)
  
  if(n.mediaDevices.getUserMedia) {
    const p = n.mediaDevices.getUserMedia({ video: true })
    p.then((stream) => {
      $video.srcObject = stream
    })

    p.catch(function(err) {
      $video.insertAdjacentHTML('beforebegin', `<p><mark>${err.message}</mark></p>`)
    })
  }

}