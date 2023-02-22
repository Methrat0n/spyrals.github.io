import React from 'react'
import Anchor from '../ui/Anchor'
import SocialNetwork from '../ui/SocialNetwork'

export default () =>
  <>
    <Navigation />
    <Socials />
  </>

const Navigation = () =>
  <>
    <Anchor href="offre" label="L'offre" />
    <Anchor href="team" label="L'équipe" />
    <Anchor href="clients" label="Clients" />
    <Anchor href="contact" label="Contact" />
  </>

const Socials = () =>
  <>
    <SocialNetwork logo='/svgs/facebookLogo.svg' href="https://facebook.com" />
    <SocialNetwork logo='/svgs/linkedinLogo.svg' href="https://linkedin.com" />
  </>