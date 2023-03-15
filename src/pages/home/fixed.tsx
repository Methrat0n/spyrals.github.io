import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="z-50 fixed top-[70%] md:top-[63%] lg:top-2/3 -left-[7.5rem] lg:-left-24 flex flex-row text-white -rotate-90 w-80" id="fixedbar">
    <Contact />
    <Video />    
  </section>

const fixedBarStyle = "flex flex-row pr-3 p-2 font-semibold justify-between"
const imagesStyle = "w-7 h-7 rotate-90"
const pStyles = "hidden lg:inline ml-2"

const Contact = () =>
  <a className={`rounded-l-md bg-redish ${fixedBarStyle}`} href={config.fixed.contact_link}>
    <img className={imagesStyle} src={config.svg_path + config.fixed.contact_img}/>
    <p className={pStyles}>{config.fixed.contact_text}</p>
  </a>

const Video = () =>
  <a className={`rounded-r-md bg-orange ${fixedBarStyle}`} href={config.fixed.video_link}>
    <img className={imagesStyle} src={config.svg_path + config.fixed.video_img}/>
    <p className={pStyles}>{config.fixed.video_text}</p>
  </a>
