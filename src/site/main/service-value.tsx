import React from 'react'

type Props = {
  backgroundColor: string
  text: string
  title: string  
}

export default ({backgroundColor, text, title }: Props) =>
  <div className={backgroundColor}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>