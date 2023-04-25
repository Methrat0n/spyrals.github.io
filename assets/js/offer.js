const offer = document.querySelector('#services')
const titleOffer = offer.querySelector('#offerTitle')
const titleText = offer.querySelector('#offerText')

const fadeInAnim = [
  { opacity: 0 },
  { opacity: 1 },
];

const timing = {
  duration: 1000,
  iterations: 1,
};

const observerOffer = new IntersectionObserver(async entries => {
  if(entries[0].isIntersecting) {
    observerOffer.unobserve(offer)
    titleOffer.classList.remove('opacity-0')
    titleOffer.animate(fadeInAnim, timing)
    await new Promise(r => setTimeout(r, 1000));
    titleText.classList.remove('opacity-0')
    titleText.animate(fadeInAnim, timing)    
  }
}, {
  threshold: 1
})

observerOffer.observe(offer)
