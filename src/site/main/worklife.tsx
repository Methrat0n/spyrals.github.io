import React from 'react'
import BordedPicture from '../ui/BordedPicture'

export default () =>
  <section id='worklife'>
    <h1>VIE D'ENTREPRISE</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, culpa. Pariatur itaque quibusdam sed ea alias blanditiis qui? Quaerat deleniti et delectus nostrum maiores sunt minima saepe ullam dolor illum!</p>
    <img src="/svgs/arrow.svg"/>
    <img src="/svgs/arrow.svg"/>
    <Gallery />
  </section>

const Gallery = () =>
  <>
    <BordedPicture borderColor='purple' src='/images/worklife.webp' />
    <BordedPicture borderColor='yellow' src='/images/worklife.webp' />
    <BordedPicture borderColor='purple' src='/images/worklife.webp' />
    <BordedPicture borderColor='yellow' src='/images/worklife.webp' />
  </>
