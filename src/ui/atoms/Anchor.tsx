import React from 'react'

type Props = {
  href: string
  label: string
}

export default ({href, label}: Props) =>
  <a className="hover:underline decoration-yellow underline-offset-4 decoration-2" href={`https://www.spyrals.fr/#${href}`}>
    <h3>{label}</h3>
  </a>
