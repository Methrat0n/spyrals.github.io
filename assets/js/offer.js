const offer = document.querySelector('#offerContent')
const titleOffer = offer.querySelector('#offerTitle')
const titleText = offer.querySelector('#offerText')

const observerOffer = new IntersectionObserver(async entries => {
  if(entries[0].isIntersecting) {
    observerOffer.unobserve(offer)
    titleOffer.classList.remove('opacity-0')
    titleOffer.classList.add('animate-leftFadeAppear')
    await new Promise(r => setTimeout(r, 1000));
    titleText.classList.remove('opacity-0')
    titleText.classList.add('animate-leftFadeAppear')
  }
}, {
  threshold: 1
})

observerOffer.observe(offer)
