import React from 'react'

type Props = {
  className: string
  src: string
}

export default ({className, src}: Props) =>
<div className={`${className} rounded-xl border-2 w-fit`}>
  <img className="rounded-xl" src={src}/>
</div>