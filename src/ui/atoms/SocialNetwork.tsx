import React from 'react'

type Props = {
  className: string
  href: string
  logo: string
}

export default ({className, href, logo}: Props) =>
  <a href={href}>
    <div className={`${className}`}><img className='w-full h-full' src={logo} alt={href} fetchpriority='high' /></div>
  </a>
