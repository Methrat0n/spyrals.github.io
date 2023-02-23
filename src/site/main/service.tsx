import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import ServiceValue from './service-value'

export default () =>
  <section className="flex flex-row items-center justify-between" id='offre'>
    <ServiceLeft />
    <ServiceRight />
  </section>

const ServiceLeft = () =>
  <div className="flex flex-col">
    <ServiceValue className='bg-violet-400' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.' title="Service / Valeur" />
    <ServiceValue className='bg-purple-500' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.' title="Service / Valeur" />
    <ServiceValue className='bg-purple-600' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.' title="Service / Valeur" />
  </div>

const ServiceRight = () =>
  <div className="flex flex-col items-center justify-between">
    <h1 className="text-8xl">NOTRE OFFRE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.</p>
    <ButtonLink className="ml-80" href="contact" label="Nous contacter" />
  </div>
