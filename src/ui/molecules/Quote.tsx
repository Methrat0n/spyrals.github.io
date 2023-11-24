import React from 'react'
import QuoteContent from '../atoms/QuoteContent'
import config from '../../utils/config'

type Props = {
  animDelay: string
  text: string
  author: string
}

export default ({animDelay, text, author}: Props) => 
<div className={'flex flex-col md:w-3/12 animate-fade-up animate-once animate-duration-[1200ms] animate-ease-out '+animDelay}>
  <img className={"w-6 mb-2animate-pulse animate-infinite animate-ease-linear animate-duration-[3000ms] "+animDelay} src={config.quotes.img_yellowQuotes} fetchpriority='low'/>
  <QuoteContent animDelay={animDelay} text={text} author={author} />
</div>