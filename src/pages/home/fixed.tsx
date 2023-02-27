import React from 'react'

export default () =>
  <section className="fixed top-1/2 -left-24 flex flex-row text-white -rotate-90" id="fixedbar">
    <Contact />
    <Video />    
  </section>

const fixedBarStyle = "flex flex-row py-2 font-semibold items-center"
const imagesStyle = "w-7 h-7 mx-2 rotate-90"

const Contact = () =>
  <a className={`rounded-l-md bg-redish pl-2 pr-4 ${fixedBarStyle}`} href="/nous-contacter">
    <img className={imagesStyle} src="/svgs/chat.svg"/>
    <p>Nous écrire</p>
  </a>

const Video = () =>
  <a className={`rounded-r-md bg-orange pr-2 pl-4 ${fixedBarStyle}`} href="/video">
    <img className={imagesStyle} src="/svgs/video.svg"/>
    <p>Voir la vidéo</p>
  </a>
