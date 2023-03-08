import React from 'react'

type Props = {
  href: string
  logo: string
}

export default ({href, logo}: Props) =>
  <a className='mr-16 lg:mr-0' href={href}>
   <img className={`w-fit h-fit max-w-[9rem]`} src={logo} alt="Un de nos chères clients." />
  </a>
