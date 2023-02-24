import React from 'react'

type Props = {
  className: string
  src: string
}

export default ({className, src}: Props) =>
<div className={`${className} rounded-xl border-3`}>
  <img className="rounded-xl h-[32rem] w-[60rem]" src={src}/>
</div>