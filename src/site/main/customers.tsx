import React from 'react'
import SocialNetwork from '../ui/SocialNetwork'


export default () =>
  <section className="flex flex-col items-center pt-24" id='clients'>
    <h1>NOS CLIENTS</h1>
    <p>Clique sur le logo et découvre l'app' !</p>
    <CustomersList />
  </section>

const classNameLogo = ""

const CustomersList = () =>
  <div className="flex flex-row overflow-x-auto">
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
  </div>
