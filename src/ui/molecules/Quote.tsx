import React from 'react'
import QuoteContent from '../atoms/QuoteContent'
import config from '../../utils/config'


type Props = {
  text: string
  author: string
}

export default ({text, author}: Props) => 
<div className='flex flex-col md:w-3/12'>
  <img className="w-6 mb-2" src={config.quotes.img_yellowQuotes} fetchpriority='low'/>
  <QuoteContent text={text} author={author} />
</div>