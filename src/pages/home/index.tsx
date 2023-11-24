import React from 'react'
import Contact from './contact'
import Customers from './customers'
import Service from './service'
import Skills from './skills'
import Spyrals from './spyrals'
import Team from './team'
import Worklife from './worklife'
import Fixed from './fixed'
import Quotes from './quotes'

export default () =>
  <main className="pt-16 md:pt-24 text-white">
    <Spyrals />
    <Quotes />
    <Service />
    <Skills />
    <Team />
    <Customers />
    <Worklife />
    <Contact />
    <Fixed />
  </main>

