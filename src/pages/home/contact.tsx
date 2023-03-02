import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'

export default () =>
  <section id="contact" className="flex flex-col items-center pt-24 ml-20 mb-40 mt-40 text-white">
    <h1 className="text-6xl font-title font-semibold ml-80">{config.contact.title}</h1>
    <div className="flex flex-row justify-between">
      <ContactLeft />
      <ContactRight />
    </div>
  </section>

const ContactLeft = () =>
  <div className="flex flex-row items-center">
    <BordedPicture className='mt-12 border-purple-dark -rotate-[11deg] -z-20 h-[30rem] w-[24rem]' src={config.img_path + config.contact.img1} alt={config.contact.img1_alt}/>
    <BordedPicture className='border-yellow rotate-6 -z-10 h-[20rem] w-[17rem]' src={config.img_path + config.contact.img2} alt={config.contact.img2_alt}/>
  </div>

const ContactRight = () =>
  <div className="flex flex-col mt-12 mr-44 ml-20 pl-96">
    <p>{config.contact.text}</p>
    <Mail />
    <Phone />    
    <ButtonLink className="z-10" href={config.contact.button_link} label={config.contact.button_label} />
  </div>

const Mail = () =>
  <a href={config.mail} className="flex flex-row mt-4 ml-4">
    <img className="h-7 mr-2" src={config.svg_path + config.contact.mail_icon}/>
    <p className="font-bold">{config.mail}</p>
  </a>

const Phone = () =>
  <a href={config.telephone} className="flex flex-row bg-purple-spyrals rounded-xl py-9 px-16 mt-20 ml-6 items-center justify-center w-fit rotate-[7deg]">
    <img className="h-7 mr-2" src={config.svg_path + config.contact.phone_icon}/>
    <p className="font-bold text-2xl">{config.telephone}</p>
  </a>
  
