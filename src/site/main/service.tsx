import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import ServiceValue from './service-value'

export default () =>
  <section className="flex flex-row mx-48 justify-between pt-24" id='offre'>
    <ServiceLeft />
    <ServiceRight />
  </section>

const ServiceLeft = () =>
  <div className="flex flex-col items-center justify-center w-1/2 mr-12">
    <ServiceValue className='bg-purple-spyrals' text='Lorem ipsum dolor sit amet consectetur. Felis amet faucibus orci sit urna eleifend. Iaculis pellentesque facilisis nascetur lorem leo volutpat eget.' title="Service / Valeur" />
    <ServiceValue className='bg-purple-dark' text='Lorem ipsum dolor sit amet consectetur. Felis amet faucibus orci sit urna eleifend. Iaculis pellentesque facilisis nascetur lorem leo volutpat eget.' title="Service / Valeur" />
    <ServiceValue className='bg-purple-darkest' text='Lorem ipsum dolor sit amet consectetur. Felis amet faucibus orci sit urna eleifend. Iaculis pellentesque facilisis nascetur lorem leo volutpat eget.' title="Service / Valeur" />
  </div>

const ServiceRight = () =>
  <div className="flex flex-col items-center justify-around w-1/2 ml-12 mb-12">
    <h1 className="text-[65px] self-start">NOTRE OFFRE</h1>
    <p className="mx-10 self-center text-justify">Lorem ipsum dolor sit amet consectetur. Felis amet faucibus orci sit urna eleifend. Iaculis pellentesque facilisis nascetur lorem leo volutpat eget. Aliquet vel ullamcorper pretium sed pretium facilisis eget duis vitae. Vulputate mattis sed nunc fringilla est dictum nullam rhoncus a. Ut eget dolor aliquet est at. Odio morbi tincidunt lectus vitae tempor sit nisi platea. Augue gravida nullam dolor in. Ultrices ultrices lectus faucibus sed pretium tempus. Euismod nam tempor sem scelerisque lacus nibh a. Aliquam elit nisi libero mauris.</p>
    <ButtonLink className="self-end mr-24" href="contact" label="Nous contacter" />
  </div>
