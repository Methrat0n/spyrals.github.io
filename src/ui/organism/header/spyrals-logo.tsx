import React from 'react'
import config from '../../../utils/config'

type Props = {
  className?: string
}

export default ({ className = '' }: Props) =>
  <a href="/" className={`${className} w-56 md:w-40`}>
    <img src={config.svg_path + config.logo} alt={config.logo_alt}/>
  </a>
