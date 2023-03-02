import React from 'react'

import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import { Input, Area } from '../../ui/atoms/Inputs'

export default () =>
  <main className="flex flex-row justify-between pt-52 pl-36 pr-24 pb-80 text-white">
    <ContactLeft />
    <ContactRight />
  </main>

const ContactLeft = () =>
  <div>
    <h1 className="text-6xl font-title font-semibold pb-[7rem]">{config.contactForm.title}</h1>
    <p className='font-medium text-xl pb-20'>{config.contactForm.text}</p>
    <a href={`tel:${config.telephone}`} className='font-semibold relative block -mb-[6.8rem] ml-[15.9rem]'>
      <div className='flex flex-row item-center h-8'>
        <img src={config.svg_path + config.contactForm.phone_icon} alt={config.contactForm.phone_alt} className='scale-150'/>
        <span className='my-auto ml-4 text-xl'>{config.telephone}</span>
      </div>
    </a>
    <img src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' className='-z-20 relative -ml-[27rem] max-w-fit' />
    <BordedPicture className='-rotate-[9deg] h-80 w-[33rem] border-yellow -z-10 -mt-[37rem]' src={config.img_path + config.contactForm.img} alt={config.contactForm.img_alt} />
  </div>

const ContactRight = () =>
  <form className='flex flex-col item-center h-[56rem] bg-purple-spyrals w-[43rem] rotate-2 pt-24 px-32 pb-28 rounded-3xl' action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="df879691-e4e5-404d-9487-af5be1c2fc05" />
    <input type="hidden" name="subject" value="Website lead" />
    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
    <input type="checkbox" name="botcheck" className='hidden' />

    <Input name='surname' type='text' label={config.contactForm.label_firstname}/>
    <Input name='name' type='text' label={config.contactForm.label_name}/>
    <Input name='mail' type='email' label={config.contactForm.label_mail} required />
    <Input name='phone' type='tel' label={config.contactForm.label_phone} />
    <Input name='Society' type='text' label={config.contactForm.label_company} />

    <Area name="wants" label={config.contactForm.label_request} />

    <input type="submit" value={config.contactForm.label_submit} className='ml-auto bg-white text-black p-2 font-semibold rounded-lg -rotate-2 w-28 cursor-pointer' />
  </form>
