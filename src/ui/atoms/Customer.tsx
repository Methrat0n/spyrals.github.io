import React from 'react'

type Props = {
  href: string
  logo: string
}

export default ({href, logo}: Props) =>
  <a className='mr-16' href={href}>
   <img className={`w-full h-full max-w-[7rem]`} src={logo} alt="Un de nos chères clients." />
  </a>
