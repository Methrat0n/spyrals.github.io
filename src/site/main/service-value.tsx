import React from 'react'

type Props = {
  className: string
  text: string
  title: string  
}

export default ({className, text, title }: Props) =>
  <div className={`${className} rounded-xl mb-6 flex flex-col items-center justify-between pt-4 pb-8 px-8`}>
    <h2 className="text-2xl mb-5 font-bold">{title}</h2>
    <p className="text-base text-center">{text}</p>
  </div>