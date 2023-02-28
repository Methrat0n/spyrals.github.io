import React from 'react'
import Anchor from '../../atoms/Anchor'
import SocialNetwork from '../../atoms/SocialNetwork'

export default () =>
  <div className="flex justify-between w-5/12 h-full items-center">
    <Navigation />
    <Socials />
  </div>

const Navigation = () =>
  <div className="flex w-full justify-evenly items-center">
    <Anchor href="offre" label="L'offre" />
    <Anchor href="team" label="L'équipe" />
    <Anchor href="clients" label="Clients" />
    <Anchor href="contact" label="Contact" />
  </div>

const Socials = () =>
  <div className="flex">
    <SocialNetwork className="h-7" logo='/svgs/facebookLogo.svg' href="https://facebook.com" />
    <SocialNetwork className="h-7" logo='/svgs/linkedinLogo.svg' href="https://linkedin.com" />
  </div>