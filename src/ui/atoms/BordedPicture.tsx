import React from 'react'

type Props = {
  className: string
  src: string
  alt: string
}

export default ({className, ...props}: Props) =>
  <img className={`${className} rounded-3xl border-4 object-cover`} {...props} />