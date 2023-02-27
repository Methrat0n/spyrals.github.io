import React from 'react'

import BordedPicture from '../../ui/atoms/BordedPicture'
import { Input, Area } from '../../ui/atoms/Inputs'

export default () =>
  <main className="flex flex-row justify-between pt-52 pl-36 pr-24 pb-80 text-white">
    <ContactLeft />
    <ContactRight />
  </main>

const ContactLeft = () =>
  <div>
    <h1 className="text-6xl font-title font-semibold pb-48">Nous Contacter</h1>
    <p className='font-medium text-xl pb-20'>Lorem ipsum dolor sit amet consectetur. Fames molestie consectetur aliquam id egestas.</p>
    <div className='position-relative'>
      <img src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' className='-z-20' />
      <a href='tel:06 01 20 30 04' className='font-semibold'>
        <div className='flex flex-row item-center h-8'>
          <img src='/svgs/phone-in-circle.svg' alt="Un téléphone dans un cercle, pour nous téléphoner."/>
          <span className='my-auto ml-2.5'>06 01 20 30 04</span>
        </div>
      </a>
    </div>
    <BordedPicture className='-rotate-[9deg] h-80 w-[33rem] border-yellow -z-10' src='/images/typing-fast.png' alt="Developpeur tapant frénétiquement sur son clavier" />
  </div>

const ContactRight = () =>
  <form className='flex flex-col item-center h-[56rem] bg-purple-spyrals w-[43rem] rotate-2 pt-24 px-32 pb-28'>
    <Input name='surname' type='text' label='Votre prénom'/>
    <Input name='name' type='text' label='Votre nom'/>
    <Input name='mail' type='email' label='Votre addresse mail' required />
    <Input name='phone' type='tel' label='Votre téléphone' />
    <Input name='weLiveIn' type='text' label='Votre société' />

    <Area name="wants" label="Que pouvons-nous faire pour vous ?" />

    <input type="submit" value="Envoyer" className='ml-auto bg-white text-black p-2 font-semibold rounded-lg -rotate-2 w-28' />
  </form>

  /*
      margin-left: auto;
    background: white;
    color: black;
    padding: 9px;
  */