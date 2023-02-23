import React from 'react'

type Props = {
  href: string
  label: string
}

export default ({href, label}: Props) =>
  <a href={href}>
    <p>{label}</p>
  </a>
