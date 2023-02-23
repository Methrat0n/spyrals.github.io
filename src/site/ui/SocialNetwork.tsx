import React from 'react'

type Props = {
  href: string
  logo: string
}

export default ({href, logo}: Props) =>
  <a className="w-full h-full" href={href}>
    <img className="w-full h-full" src={logo} alt={href} />
  </a>
