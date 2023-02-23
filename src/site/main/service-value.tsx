import React from 'react'

type Props = {
  className: string
  text: string
  title: string  
}

export default ({className, text, title }: Props) =>
  <div className={`${className} rounded-xl my-3 flex flex-col items-center justify-between p-4`}>
    <h2 className="text-xl">{title}</h2>
    <p>{text}</p>
  </div>