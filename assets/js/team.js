const team = document.querySelector('#teamCards')
const screenMobile = window.matchMedia("(max-width: 767px)").matches

const observerTeam = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting && !screenMobile)
    team.scrollLeft = team.scrollWidth
}, {
  threshold: 0.8
})

observerTeam.observe(team)
