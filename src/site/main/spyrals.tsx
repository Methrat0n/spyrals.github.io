import React from 'react'
import BordedPicture from '../ui/BordedPicture'
import ButtonLink from '../ui/ButtonLink'

export default () =>
  <section id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
  </section>

const SpyralsLeft = () =>
  <div>
    <h1>SPYRALS</h1>
    <p>Le développement sur mesure</p>
    <ButtonLink href="#offre" label="Découvrir notre offre" />
  </div>

const SpyralsRight = () =>
  <div>
    <BordedPicture borderColor="purple" src="/images/code.webp" />
    <BordedPicture borderColor="purple" src="/images/code.webp" />
  </div>
