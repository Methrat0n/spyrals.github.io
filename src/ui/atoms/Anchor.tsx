import React from 'react'
import config from '../../utils/config'

type Props = {
  href: string
  label: string
}

export default ({href, label}: Props) =>
  <a className="hover:underline decoration-yellow underline-offset-4 decoration-2 md:mx-2" href={`${config.url}#${href}`}>
    <h3>{label}</h3>
  </a>
