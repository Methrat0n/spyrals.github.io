const offer = document.querySelector('#offerContent')
const titleOffer = document.getElementById('offerTitle')
const textOffer = document.getElementById('offerTextNew')
const blocOffer1 = document.getElementById('offerBloc1')
const blocOffer2 = document.getElementById('offerBloc2')
const blocOffer3 = document.getElementById('offerBloc3')

const observerOffer = new IntersectionObserver(async entries => {
  if(entries[0].isIntersecting) {
    observerOffer.unobserve(offer)
    titleOffer.classList.remove('opacity-0')
    titleOffer.style.animationPlayState = 'running'
    await new Promise(r => setTimeout(r, 1000));
    textOffer.classList.remove('opacity-0')
    textOffer.style.animationPlayState = 'running'
    blocOffer1.classList.remove('opacity-0')
    blocOffer1.classList.add('animate-fadeIn')
    await new Promise(r => setTimeout(r, 500));
    blocOffer2.classList.remove('opacity-0')
    blocOffer2.classList.add('animate-fadeIn')
    await new Promise(r => setTimeout(r, 500));
    blocOffer3.classList.remove('opacity-0')
    blocOffer3.classList.add('animate-fadeIn')
  }
}, {
  threshold: 1
})

observerOffer.observe(offer)
