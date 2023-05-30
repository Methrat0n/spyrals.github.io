import React from 'react'

import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import { Input, Area } from '../../ui/atoms/Inputs'

export default () =>
  <main className="flex flex-col overflow-x-clip items-center md:items-stretch px-8 md:flex-row md:justify-between md:pt-52 md:pl-16 lg:pl-28 md:pr-24 md:pb-80 text-white">
    <ContactLeft />
    <ContactRight />
  </main>

const ContactLeft = () =>
  <div className='flex flex-col items-center min-w-0 md:min-w-[20rem] md:w-[20rem] lg:min-w-[37rem] lg:w-[37rem] md:items-start md:mr-5 relative'>
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-title font-semibold md:pb-[7rem]">{config.contactForm.title}</h1>
    <p className='font-medium text-xl max-md:pt-4 pb-7 md:pr-16 md:pb-20 text-jutify'>{config.contactForm.text}</p>
    <a href={`tel:${config.telephone}`} className='font-semibold md:self-end ml-32 relative block md:-mb-[6.8rem] md:ml-[8rem] lg:ml-[15.9rem]'>
      <div className='flex flex-row item-center h-8'>
        <img src={config.svg_path + config.contactForm.phone_icon} alt={config.contactForm.phone_alt} className='scale-150' fetchpriority='low' />
        <span className='my-auto ml-4 text-xl'>{config.telephone}</span>
      </div>
    </a>
    <BordedPicture fetchPriority="low" sizes='h-80 min-w-[33rem] md:h-44 md:min-w-[18rem] lg:h-80 lg:min-w-[33rem]' positioning='-rotate-[9deg] translate-x-16 self-end z-20 mt-[18rem]' className='border-yellow hidden md:block' src={config.img_path + config.contactForm.img} alt={config.contactForm.img_alt} />
    <img className='-z-10 absolute -ml-[27rem] min-w-fit max-w-fit overflow-x-clip md:self-end top-[35%] md:top-[34%] md:-left-[37%] lg:top-[24.20%] lg:left-[25.75%]' src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' fetchpriority='low' />
  </div>

const ContactRight = () =>
  <form className='flex flex-col item-center my-8 p-5 md:h-[56rem] bg-purple-spyrals min-w-[18rem] md:min-w-[23rem] lg:min-w-[43rem] rotate-2 md:pt-24 md:mx-1 md:px-20 lg:px-32 md:pb-16 lg:pb-28 rounded-3xl z-30' action="https://api.web3forms.com/submit" method="POST">

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
