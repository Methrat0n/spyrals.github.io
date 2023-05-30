import React from 'react'
import config from '../../utils/config'

export default () =>
  <section >
    <div className="z-50 fixed top-[70%] md:top-[63%] lg:top-2/3 -left-[7.5rem] lg:-left-24 flex flex-row text-white -rotate-90 w-80" id="fixedbar">
      <Contact />
      <Video />
    </div>    
    <Frame />
  </section>

const fixedBarStyle = "flex flex-row pr-3 p-2 font-semibold justify-between"
const imagesStyle = "w-7 h-7 rotate-90"
const pStyles = "hidden lg:inline ml-2"

const Contact = () =>
  <a className={`rounded-l-md bg-redish ${fixedBarStyle}`} href={config.fixed.contact_link}>
    <img className={imagesStyle} src={config.svg_path + config.fixed.contact_img} fetchpriority='low'/>
    <p className={pStyles}>{config.fixed.contact_text}</p>
  </a>

const Video = () =>
  <a className={`rounded-r-md bg-orange ${fixedBarStyle}`} href='#frame' id='btnVideo'>
    <img className={imagesStyle} src={config.svg_path + config.fixed.video_img} fetchpriority='low'/>
    <p className={pStyles}>{config.fixed.video_text}</p>
  </a>

const Frame = () =>
  <div className='fixed hidden top-1/3 left-1/2 max-md:-translate-x-1/2 w-[90vw] md:top-[63%] md:-translate-y-24 md:left-[5.375rem] z-40 md:w-[40rem] border-4 bg-black border-black rounded-lg' id='frame'>
    <video className='rounded-sm' src="/videos/presentation.mp4" controls id='video' muted preload="metadata" />
    <a className='absolute top-[2%] left-[95%] text-4xl w-fit text-center' href='#frame' id='btnCloseVideo'>&times;</a>
  </div>
  