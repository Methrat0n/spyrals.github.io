import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import ServiceValue from './service-value'

export default () =>
  <section id='offre'>
    <ServiceLeft />
    <ServiceRight />
  </section>

const ServiceLeft = () =>
  <div>
    <ServiceValue backgroundColor='purple1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.' title="Service / Value" />
    <ServiceValue backgroundColor='purple2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.' title="Service / Value" />
    <ServiceValue backgroundColor='purple3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.' title="Service / Value" />
  </div>

const ServiceRight = () =>
  <div>
    <h1>NOTRE OFFRE</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis nisi sapiente iste nostrum dicta, rem ratione iusto in et repellendus voluptate ipsum id incidunt sunt eveniet vero ipsam ea.</p>
    <ButtonLink href="contact" label="Nous contacter" />
  </div>
