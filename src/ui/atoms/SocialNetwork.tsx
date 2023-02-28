import React from 'react'

type Props = {
  className: string
  href: string
  logo: string
}

export default ({className, href, logo}: Props) =>
  <a className={`${className}`} href={href}>
    <img className={`w-full h-full ${className}`} src={logo} alt={href} />
  </a>
