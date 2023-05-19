const screenMobile = window.matchMedia("(max-width: 767px)").matches
const merlinCard = document.getElementById('merlin')
const merlinRecto = document.getElementById('merlinRecto')
const mallorieCard = document.getElementById('mallorie')
const mallorieRecto = document.getElementById('mallorieRecto')
const julienCard = document.getElementById('julien')
const julienRecto = document.getElementById('julienRecto')
const fabienCard = document.getElementById('fabien')
const fabienRecto = document.getElementById('fabienRecto')
const thibautCard = document.getElementById('thibaut')
const thibautRecto = document.getElementById('thibautRecto')

const fadeInTeam = [
  { opacity: 0 },
  { opacity: 1 },
];

const fadeOutTeam = [
  { opacity: 1 },
  { opacity: 0 },
];

const timingTeam = {
  duration: 1000,
  iterations: 1,
};

const cardInteractivity = (recto, card) => {
  const cardFade = recto.animate(fadeOutTeam, timingTeam)
  cardFade.pause()
  let clickedCard = false

  card.addEventListener('pointerenter', async event => {
    clickedCard = false
    cardFade.play()
    cardFade.finished.then(() => {
      recto.classList.add('hidden')  
      card.focus()
    }).catch(() => {return})
  })

  card.addEventListener('pointerleave', event => {
    !clickedCard && cardFade.cancel()  
  })

  card.addEventListener('click', event => {
    if(screenMobile){
      cardFade.play()
      cardFade.finished.then(() => {
        recto.classList.add('hidden')  
        card.focus()
      }).catch(() => {return})
    } else {
      card.focus()
      clickedCard = true
    }    
  })

  card.addEventListener('focusout', event => {
    recto.classList.remove('hidden')
  })
}

cardInteractivity(merlinRecto, merlinCard)
cardInteractivity(mallorieRecto, mallorieCard)
cardInteractivity(julienRecto, julienCard)
cardInteractivity(fabienRecto, fabienCard)
cardInteractivity(thibautRecto, thibautCard)
