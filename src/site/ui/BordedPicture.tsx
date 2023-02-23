import React from 'react'

type Props = {
  borderColor: string
  src: string
}

export default ({borderColor, src}: Props) =>
<div className={borderColor}>
  <img src={src}/>
</div>