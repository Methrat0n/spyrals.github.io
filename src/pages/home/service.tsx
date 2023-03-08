import React from 'react'
import config from '../../utils/config'
import ButtonLink from '../../ui/atoms/ButtonLink'
import ServiceValue from './service-value'

export default () =>
  <section className="flex flex-col-reverse sm:flex-row sm:mx-48 max-sm:items-center justify-between pt-24" id={config.menu.link_1}>
    <ServiceLeft />
    <ServiceRight />
  </section>

const ServiceLeft = () =>
  <div className="flex flex-col items-center justify-center w-full sm:w-1/2 sm:mr-12 sm:max-w-md">
    <ServiceValue className='bg-purple-spyrals self-start rounded-r-xl' text={config.offer.card1_text} title={config.offer.card1_title} />
    <ServiceValue className='bg-purple-dark self-end rounded-l-xl' text={config.offer.card2_text} title={config.offer.card2_title} />
    <ServiceValue className='bg-purple-darkest self-start rounded-r-xl' text={config.offer.card3_text} title={config.offer.card3_title} />
  </div>

const ServiceRight = () =>
  <div className="flex flex-col items-center justify-around sm:w-1/2 sm:ml-12 mb-12 w-full">
    <h1 className="text-4xl max-sm:text-center sm:text-[4rem] sm:self-start font-title font-semibold max-sm:mx-5">{config.offer.title}</h1>
    <p className="mx-5 max-sm:my-5 sm:mx-10 self-center text-justify">{config.offer.text}</p>
    <ButtonLink className="sm:self-end sm:mr-24" href={config.offer.button_link} label={config.offer.button_label} />
  </div>
