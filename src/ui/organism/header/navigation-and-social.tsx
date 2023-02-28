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

const socialsStyles = "mx-1 h-7 py-2 bg-purple-spyrals octagon w-7"

const Socials = () =>
  <div className="flex flex-row">
    <SocialNetwork className={`${socialsStyles}`} logo='/svgs/facebookHeaderLogo.svg' href="https://linkedin.com/company/spyrals" />
    <SocialNetwork className={`${socialsStyles}`} logo='/svgs/linkedinHeaderLogo.svg' href="https://linkedin.com/company/spyrals" />
  </div>