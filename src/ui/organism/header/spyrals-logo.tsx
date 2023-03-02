import React from 'react'
import config from '../../../utils/config'

export default () =>
  <a href="/" className='w-40'>
    <img src={config.svg_path + config.logo} alt={config.logo_alt}/>
  </a>
