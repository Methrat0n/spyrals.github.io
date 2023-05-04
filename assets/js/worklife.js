const worklifeText = document.getElementById('worklifeText')

const observerWorklife = new IntersectionObserver( entries => {
  if(entries[0].isIntersecting) {
    observerOffer.unobserve(worklifeText)
    worklifeText.classList.remove('opacity-0')
    worklifeText.style.animationPlayState = 'running'
  }
}, {
  threshold: 1
})

observerWorklife.observe(worklifeText)