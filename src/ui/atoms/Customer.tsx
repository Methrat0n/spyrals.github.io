import React from 'react'

type Props = {
  className: string
  href: string
  logo: string
}

export default ({className, href, logo}: Props) =>
  <a className='mr-10' href={href}>
   <img className={`w-full h-full max-w-[7rem]`} src={logo} alt={href+className} />
  </a>
