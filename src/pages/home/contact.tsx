import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'

export default () =>
  <section className="flex flex-col items-center sm:pt-24 sm:ml-20 mb-40 sm:mt-40 text-white" id="contact">
    <h1 className="text-4xl sm:text-6xl font-title font-semibold sm:ml-80 max-sm:mx-5">{config.contact.title}</h1>
    <div className="flex flex-col sm:flex-row justify-between">
      <ContactLeft />
      <ContactRight />
    </div>
  </section>

const ContactLeft = () =>
  <div className="sm:flex flex-row items-center hidden">
    <BordedPicture className='mt-12 border-purple-dark -rotate-[11deg] -z-20 h-[30rem] w-[24rem]' src={config.img_path + config.contact.img1} alt={config.contact.img1_alt}/>
    <BordedPicture className='border-yellow rotate-6 -z-10 h-[20rem] w-[17rem]' src={config.img_path + config.contact.img2} alt={config.contact.img2_alt}/>
  </div>

const ContactRight = () =>
  <div className="flex flex-col mt-12 sm:mr-44 sm:ml-20 sm:pl-96 mx-5 max-sm:items-center">
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
  <a href={config.telephone} className="flex flex-row bg-purple-spyrals rounded-xl p-8 sm:py-9 sm:px-16 mt-20 ml-6 items-center justify-center w-fit rotate-[7deg]">
    <img className="h-7 mr-2" src={config.svg_path + config.contact.phone_icon}/>
    <p className="font-bold text-lg sm:text-2xl">{config.telephone}</p>
  </a>
  
