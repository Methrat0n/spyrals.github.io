import React from 'react'
import config from '../../../utils/config'

export default () =>
  <div>
    <a href={`tel:${config.telephone}`} className='mx-1 hidden md:inline'><span className="font-bold">{config.footer.label_2}</span>{config.telephone}</a>
    <a href={`tel:${config.telephone}`} className='mx-1 inline md:hidden'>
      <div className='flex flex-row item-center h-5 w-5'>
        <img src={config.svg_path + config.contactForm.phone_icon} alt={config.contactForm.phone_alt} className='scale-150'/>
      </div>
    </a>
  </div>