import React from 'react'
import config from '../../utils/config'
import ButtonLink from '../../ui/atoms/ButtonLink'
import ServiceValue from './service-value'

export default () =>
  <section className="flex flex-row mx-48 justify-between pt-24" id='offre'>
    <ServiceLeft />
    <ServiceRight />
  </section>

const ServiceLeft = () =>
  <div className="flex flex-col items-center justify-center w-1/2 mr-12 max-w-md">
    <ServiceValue className='bg-purple-spyrals' text={config.offer.card1_text} title={config.offer.card1_title} />
    <ServiceValue className='bg-purple-dark' text={config.offer.card2_text} title={config.offer.card2_title} />
    <ServiceValue className='bg-purple-darkest' text={config.offer.card3_text} title={config.offer.card3_title} />
  </div>

const ServiceRight = () =>
  <div className="flex flex-col items-center justify-around w-1/2 ml-12 mb-12">
    <h1 className="text-[4rem] self-start font-title font-semibold">{config.offer.title}</h1>
    <p className="mx-10 self-center text-justify">{config.offer.text}</p>
    <ButtonLink className="self-end mr-24" href={config.offer.button_link} label={config.offer.button_label} />
  </div>
