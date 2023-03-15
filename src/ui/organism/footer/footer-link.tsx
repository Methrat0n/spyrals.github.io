import React from 'react'

type Props = {
  href: string
  label: string
}

export default ({href, label}: Props) =>
  <a className='mx-1 md:mx-5 lg:mx-1' href={`/${href}`}>
    <h3>{label}</h3>
  </a>
