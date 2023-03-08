import React from 'react'

import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import { Input, Area } from '../../ui/atoms/Inputs'

export default () =>
  <main className="flex flex-col overflow-x-clip items-center sm:items-stretch px-8 sm:flex-row sm:justify-between sm:pt-52 sm:pl-28 sm:pr-24 sm:pb-80 text-white">
    <ContactLeft />
    <ContactRight />
  </main>

const ContactLeft = () =>
  <div className='flex flex-col items-center min-w-0 sm:min-w-[37rem] sm:w-[37rem] sm:items-start sm:mr-5 relative'>
    <h1 className="text-3xl sm:text-6xl font-title font-semibold sm:pb-[7rem]">{config.contactForm.title}</h1>
    <p className='font-medium text-xl max-sm:pt-4 pb-7 sm:pr-16 sm:pb-20 text-jutify'>{config.contactForm.text}</p>
    <a href={`tel:${config.telephone}`} className='font-semibold self-end relative block sm:-mb-[6.8rem] sm:ml-[15.9rem]'>
      <div className='flex flex-row item-center h-8'>
        <img src={config.svg_path + config.contactForm.phone_icon} alt={config.contactForm.phone_alt} className='scale-150'/>
        <span className='my-auto ml-4 text-xl'>{config.telephone}</span>
      </div>
    </a>
    <BordedPicture sizes='h-80 min-w-[33rem]' positioning='-rotate-[9deg] translate-x-16 self-end z-20 mt-[18rem]' className='border-yellow hidden sm:block' src={config.img_path + config.contactForm.img} alt={config.contactForm.img_alt} />
    <img className='-z-10 absolute -ml-[27rem] min-w-fit max-w-fit overflow-x-clip self-end top-[58%] -left-[71.5%] sm:top-[24.20%] sm:left-[25.75%]' src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' />
  </div>

const ContactRight = () =>
  <form className='flex flex-col item-center my-8 p-5 sm:h-[56rem] bg-purple-spyrals max-sm:min-w-[18rem] sm:min-w-[43rem] rotate-2 sm:pt-24 sm:mx-1 sm:px-32 sm:pb-28 rounded-3xl z-30' action="https://api.web3forms.com/submit" method="POST">

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

    <input type="submit" value={config.contactForm.label_submit} className='border-yellow border-[3px] ml-auto bg-white text-black p-2 font-semibold rounded-lg -rotate-2 w-28 cursor-pointer' />
  </form>
