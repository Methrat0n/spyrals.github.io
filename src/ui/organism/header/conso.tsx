import React from 'react'

type Props = {
  conso: number
}

export default ({conso}: Props) =>
  <div className="flex flex-col">
    <p className='font-semibold text-white' >Conso Max</p>
    <p className='font-title font-semibold text-yellow text-center'>${conso}</p>
  </div>