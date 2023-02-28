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
    <h1 className="text-6xl font-title font-semibold pb-[7rem]">Nous Contacter</h1>
    <p className='font-medium text-xl pb-20'>Lorem ipsum dolor sit amet consectetur. Fames molestie consectetur aliquam id egestas.</p>
    <a href='tel:06 01 20 30 04' className='font-semibold relative -z-10 block -mb-[6.8rem] ml-[15.9rem]'>
      <div className='flex flex-row item-center h-8'>
        <img src='/svgs/phone-in-circle.svg' alt="Un téléphone dans un cercle, pour nous téléphoner." className='scale-150'/>
        <span className='my-auto ml-4 text-xl'>06 01 20 30 04</span>
      </div>
    </a>
    <img src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' className='-z-20 relative -ml-[27rem] max-w-fit' />
    <BordedPicture className='-rotate-[9deg] h-80 w-[33rem] border-yellow -z-10 -mt-[37rem] -z-10' src='/images/typing-fast.png' alt="Developpeur tapant frénétiquement sur son clavier" />
  </div>

const ContactRight = () =>
  <form className='flex flex-col item-center h-[56rem] bg-purple-spyrals w-[43rem] rotate-2 pt-24 px-32 pb-28 rounded-3xl' action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="df879691-e4e5-404d-9487-af5be1c2fc05" />
    <input type="hidden" name="subject" value="Website lead" />
    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
    <input type="checkbox" name="botcheck" className='hidden' />

    <Input name='surname' type='text' label='Votre prénom'/>
    <Input name='name' type='text' label='Votre nom'/>
    <Input name='mail' type='email' label='Votre addresse mail' required />
    <Input name='phone' type='tel' label='Votre téléphone' />
    <Input name='Society' type='text' label='Votre société' />

    <Area name="wants" label="Que pouvons-nous faire pour vous ?" />

    <input type="submit" value="Envoyer" className='ml-auto bg-white text-black p-2 font-semibold rounded-lg -rotate-2 w-28' />
  </form>
