import React from 'react'
import ButtonLink from '../ui/ButtonLink'

export default () =>
  <section className="flex flex-row items-center justify-between pt-8 pb-24" id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
  </section>

const SpyralsLeft = () =>
  <div className="flex flex-col items-center justify-center mx-20">
    <h1 className="text-9xl pl-20">SPYRALS</h1>
    <p className="text-3xl pt-10 pb-8 pl-40">Le développement sur mesure</p>
    <ButtonLink className="mr-40" href="#offre" label="Découvrir notre offre" />
  </div>

const imagesStyle = "rounded-3xl border-4 object-cover"

const SpyralsRight = () =>
  <div className="flex flex-row">
    <img className={`mt-12 border-purple-spyrals -rotate-6 -z-10 h-[35rem] w-[35rem] ${imagesStyle}`} src="/images/code.png"/>
    <img className={`border-purple-dark rotate-[16deg] -z-20 h-[45rem] w-[28rem] ${imagesStyle}`} src="/images/tel.png"/>
  </div>
