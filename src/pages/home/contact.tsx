import React from 'react'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'

export default () =>
  <section id="contact" className="flex flex-col items-center pt-24 ml-20 mb-40 mt-40 text-white">
    <h1 className="text-6xl font-title font-semibold ml-80">NOUS CONTACTER</h1>
    <div className="flex flex-row justify-between">
      <ContactLeft />
      <ContactRight />
    </div>
  </section>

const ContactLeft = () =>
  <div className="flex flex-row items-center">
    <BordedPicture className='mt-12 border-purple-dark -rotate-[11deg] -z-20 h-[30rem] w-[24rem]' src="/images/laptop.png" alt="Développeur tapant sur un clavier"/>
    <BordedPicture className='border-yellow rotate-6 -z-10 h-[20rem] w-[17rem]' src="/images/lightbulb.png" alt="Ampoule électrique allumée"/>
  </div>

const ContactRight = () =>
  <div className="flex flex-col mt-12 mr-44 ml-20 pl-96">
    <p className="">Lorem ipsum dolor sit amet consectetur. Fames molestie consectetur aliquam id egestas.</p>
    <Mail />
    <Phone />    
    <ButtonLink className="" href="/nous-contacter" label="Accéder au formulaire" />
  </div>

const Mail = () =>
  <div className="flex flex-row mt-4 ml-4">
    <img className="h-7 mr-2" src="/svgs/mail.svg"/>
    <p className="font-bold">mail@mail.com</p>
  </div>

const Phone = () =>
<div className="flex flex-row bg-purple-spyrals rounded-xl py-9 px-16 mt-20 ml-6 items-center justify-center w-fit rotate-[7deg] -z-10">
  <img className="h-7 mr-2" src="/svgs/phone.svg"/>
  <p className="font-bold text-2xl">06 01 20 30 04</p>
</div>
  
