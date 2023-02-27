import React from 'react'

export default () =>
  <section className="flex flex-col pt-24 ml-32" id='team'>
    <h1 className="text-6xl ml-32 font-title font-semibold">L'EQUIPE</h1>
    <TeamContent />
    <TeamFooter />
  </section>

const commonCaption = "Passe sur ma card et découvre"

const figuresStyle = "flex flex-col justify-evenly items-center rounded-xl mx-2 py-8 px-4 h-[29rem] w-[21rem] min-w-[21rem]"
const imagesStyle = "w-[12rem] h-[14rem] object-cover"
const pStyle = "text-3xl mt-4 text-center italic"
const arrowsStyle = "bg-white w-[234px] h-[22px] object-fill"

const TeamContent = () =>
  <div className="flex flex-row font-bold overflow-x-auto my-20">
    <figure className={`bg-pink ${figuresStyle}`}>
      <img className={`${imagesStyle}`} src="/images/mallorie.png"/>
      <figcaption>Mallorie</figcaption>
      <p className={`${pStyle}`}>{commonCaption} mon profil !</p>
    </figure>

    <figure className={`bg-purple-dark ${figuresStyle}`}>
      <img className={`${imagesStyle}`} src="/images/merlin.png"/>
      <figcaption>Merlin</figcaption>
      <p className={`${pStyle}`}>{commonCaption} mon savoir-faire !</p>
    </figure>

    <figure className={`bg-purple-spyrals ${figuresStyle}`}>
      <img className={`${imagesStyle}`} src="/images/fabien.png"/>
      <figcaption>Fabien</figcaption>
      <p className={`${pStyle}`}>{commonCaption} mes compétences !</p>
    </figure>

    <figure className={`bg-yellow ${figuresStyle}`}>
      <img className={`${imagesStyle}`} src="/images/thibaut.png"/>
      <figcaption>Thibaut</figcaption>
      <p className={`${pStyle}`}>{commonCaption} mes expériences !</p>
    </figure>
  </div>

const TeamFooter = () =>
  <div className="self-end mr-52 text-center text-xl">
    <p>DÉCOUVRE LES AUTRES PROFILS !</p>    
    <img className={`mr-40 ${arrowsStyle}`} src="/svgs/arrow.svg"/>
    <img className={`ml-40 transform -scale-x-100 ${arrowsStyle}`} src="/svgs/arrow.svg"/>
  </div>
