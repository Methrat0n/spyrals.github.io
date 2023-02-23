import React from 'react'
import SocialNetwork from '../ui/SocialNetwork'


export default () =>
  <section id='clients'>
    <h1>NOS CLIENTS</h1>
    <p>Clique sur le logo et découvre l'app' !</p>
    <CustomersList />
  </section>

const CustomersList = () =>
  <>
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
    <SocialNetwork href='https://google.com' logo='/images/google.png' />
  </>
