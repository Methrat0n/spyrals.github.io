import React from 'react'

type Props = {
  className: string
  id: string
  text: string
  title: string  
}

export default ({className, id, text, title }: Props) =>
  <div className={`${className} max-md:w-[19rem] md:rounded-xl mb-6 flex flex-col items-center justify-between pt-4 pb-8 px-8`} id={id}>
    <h2 className="text-2xl mb-5 font-bold">{title}</h2>
    <p className="text-base text-center">{text}</p>
  </div>