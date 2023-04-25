const team = document.querySelector('#teamCards')

const observerTeam = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting)
    team.scrollLeft = team.scrollWidth
}, {
  threshold: 0.8
})

observerTeam.observe(team)
