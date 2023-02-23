import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import BordedPicture from '../ui/BordedPicture'

export default () =>
  <section id='contact'>
    <h1>NOUS CONTACTER</h1>
    <ContactLeft />
    <ContactRight />
  </section>

const ContactLeft = () =>
  <>
    <BordedPicture className='purple' src='/images/code.webp' />
    <BordedPicture className='yellow' src='/images/code.webp' />
  </>

const ContactRight = () =>
  <>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, incidunt odit molestias soluta deleniti in debitis dolorem? Minima repudiandae, architecto unde fugit autem porro deserunt, voluptatibus consequatur, aut consectetur quisquam?</p>
    <Mail />
    <Phone />
    <ButtonLink href="/nouscontacter" label="Accéder au formulaire" />
  </>

const Mail = () =>
  <>
    <img src="/svgs/mail.svg"/>
    <p>mail@mail.com</p>
  </>

const Phone = () =>
  <>
    <img src="/svgs/phone.svg"/>
    <p>06 01 20 30 04</p>
  </>