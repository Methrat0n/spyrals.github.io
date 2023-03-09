import React from 'react'

type Props = {
  href: string
  logo: string
}

export default ({href, logo}: Props) =>
  <a className='mr-20' href={href}>
    <img className={`w-fit h-fit`} src={logo} alt="Un de nos chères clients." />
  </a>
