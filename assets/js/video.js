const btnVideo = document.querySelector('#btnVideo')
const frame = document.getElementById('frame')
const video = document.getElementById('video')
const btnCloseVideo = frame.querySelector('#btnCloseVideo')

const fadeInAnim = [
  { opacity: 0 },
  { opacity: 1 },
];

const fadeOutAnim = [
  { opacity: frame.style.opacity },
  { opacity: 0 },
];

const timing = {
  duration: 1000,
  iterations: 1,
};

let clicked = false
const fadeIn = frame.animate(fadeInAnim, timing)
const mobileScreen = window.matchMedia("(max-width: 767px)").matches

btnVideo.addEventListener('pointerenter', event => {
  if(!mobileScreen) {
    if (!clicked) {
      frame.classList.toggle('hidden')
      fadeIn.play()
      fadeIn.finished.then(() => {
        clicked = true
        video.play()
      }).catch(() => {return})
    }
  }
})

btnVideo.addEventListener('click', event => {
  if(!mobileScreen) {
    clicked = true
  } else {
    frame.classList.toggle('hidden')
  }
  video.play()
})

btnVideo.addEventListener('pointerleave', async event => {
  if(!mobileScreen) {
    if (!clicked) {  
      fadeIn.cancel()
      frame.animate(fadeOutAnim, timing)
      await new Promise(r => setTimeout(r, 1000));
      frame.classList.toggle('hidden')
    }
  }
})

btnCloseVideo.addEventListener('click', event => {
  frame.classList.toggle('hidden')
  clicked = false
  video.pause()
})
