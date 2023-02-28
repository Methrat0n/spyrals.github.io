import React from 'react'

export default () =>
  <section className="fixed top-1/2 -left-24 flex flex-row text-white -rotate-90 w-80" id="fixedbar">
    <Contact />
    <Video />    
  </section>

const fixedBarStyle = "flex flex-row p-2 font-semibold justify-between"
const imagesStyle = "w-7 h-7 rotate-90"
const pStyles = "ml-2"

const Contact = () =>
  <a className={`rounded-l-md bg-redish ${fixedBarStyle}`} href="/nous-contacter">
    <img className={imagesStyle} src="/svgs/chat.svg"/>
    <p className={pStyles}>Nous écrire</p>
  </a>

const Video = () =>
  <a className={`rounded-r-md bg-orange ${fixedBarStyle}`} href="/video">
    <img className={imagesStyle} src="/svgs/video.svg"/>
    <p className={pStyles}>Voir la vidéo</p>
  </a>
