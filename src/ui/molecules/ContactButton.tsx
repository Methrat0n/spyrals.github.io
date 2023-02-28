import React from 'react'
import ButtonLink from '../atoms/ButtonLink'

type Props = {
  className: string
}

export default ({className}: Props) => 
  <ButtonLink className={`${className} self-end mr-24`} href="/nous-contacter" label="Nous contacter" />