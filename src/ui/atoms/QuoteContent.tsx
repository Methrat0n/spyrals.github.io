import React from 'react'

type Props = {
  text: string
  author: string
}

export default ({text, author}: Props) =>
  <div className="relative flex flex-col">
    <div className="flex flex-row">
      <img className="" src='/images/node_leftBar.webp' fetchpriority='low'/>
      <p className="ml-4 mt-2">{text}</p>
    </div>

    <div className="flex justify-between relative">
      <img className="absolute -top-4 object-contain" src='/images/quote_node.webp' fetchpriority='low'/>
      <p className="absolute top-8 right-0 font-title font-semibold text-yellow h-12">{author}</p>
    </div>

  </div>
