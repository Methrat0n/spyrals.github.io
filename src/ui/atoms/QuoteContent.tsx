import React from 'react'

type Props = {
  animDelay: string // Used to have them launch there animation with a small time gap
  text: string
  author: string
}

export default ({animDelay, text, author}: Props) =>
  <div className="relative flex flex-col">
    <div className="flex flex-row">
      <img className={"animate-pulse animate-infinite animate-ease-linear animate-duration-[3000ms] "+animDelay} src='/images/node_leftBar.webp' fetchpriority='low'/>
      <p className="ml-4 mt-2">{text}</p>
    </div>

    <div className="flex justify-between relative">
      <img className={"absolute -top-4 object-contain animate-pulse animate-infinite animate-ease-linear animate-duration-[3000ms] "+animDelay} src='/images/quote_node.webp' fetchpriority='low'/>
      <p className="absolute top-8 right-0 font-title font-semibold text-yellow h-12">{author}</p>
    </div>

  </div>
