import React from 'react'
import Contact from './contact'
import Customers from './customers'
import Service from './service'
import Skills from './skills'
import Spyrals from './spyrals'
import Team from './team'
import Worklife from './worklife'
import Fixed from './fixed'

export default () =>
  <main className="pt-16 md:pt-24 text-white">
    <Spyrals />
    <Service />
    <Skills />
    <Team />
    <Customers />
    <Worklife />
    <Contact />
    <Fixed />
  </main>
