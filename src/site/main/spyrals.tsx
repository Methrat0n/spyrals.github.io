import React from 'react'
import BordedPicture from '../ui/BordedPicture'
import ButtonLink from '../ui/ButtonLink'

export default () =>
  <section className="flex flex-row items-center justify-between py-24" id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
  </section>

const SpyralsLeft = () =>
  <div className="flex flex-col items-center justify-center mx-20">
    <h1 className="text-9xl pl-20">SPYRALS</h1>
    <p className="text-3xl pt-10 pb-8 pl-40">Le développement sur mesure</p>
    <div className="pr-40"><ButtonLink href="#offre" label="Découvrir notre offre" /></div>
  </div>

const SpyralsRight = () =>
  <div className="flex flex-row">
    <BordedPicture className="border-purple-400 -rotate-3 -z-10" src="/images/code.webp" />
    <BordedPicture className="border-purple-600 rotate-12 -z-20" src="/images/code.webp" />
  </div>
