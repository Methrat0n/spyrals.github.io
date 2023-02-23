import React from 'react'

export default () =>
  <>
    <Contact />
    <Video />    
  </>


const Contact = () =>
  <a href="/nouscontacter">
    <img src="/svgs/chat.svg"/>
    <p>Nous écrire</p>
  </a>

const Video = () =>
  <a href="/video">
    <img src="/svgs/video.svg"/>
    <p>Voir la vidéo</p>
  </a>
