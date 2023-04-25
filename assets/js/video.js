const btnVideo = document.querySelector('#btnVideo')
const video = document.querySelector('#video')

btnVideo.addEventListener('pointerenter', event => {
  video.animate(fadeInAnim, timing)
  video.classList.toggle('hidden')
})

btnVideo.addEventListener('pointerleave', event => {
  video.classList.toggle('hidden')
})
