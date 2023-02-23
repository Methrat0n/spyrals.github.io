import React from 'react'
import Contact from './contact'
import Customers from './customers'
import Service from './service'
import Skills from './skills'
import Spyrals from './spyrals'
import Team from './team'
import Worklife from './worklife'

export default () =>
  <main className="pt-24">
    <Spyrals />
    <Service />
    <Skills />
    <Team />
    <Customers />
    <Worklife />
    <Contact />
  </main>
