import React from 'react'

type Props = {
  href: string
  logo: string
}

export default ({href, logo}: Props) =>
  <a href={href}>
    <img src={logo} alt={href} />
  </a>
