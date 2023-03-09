import React from 'react'
import Anchor from '../../atoms/Anchor'
import config from '../../../utils/config'
import SocialNetwork from '../../atoms/SocialNetwork'

export default () =>
  <div className="flex flex-row-reverse md:flex-row justify-between lg:w-5/12 h-full items-center">
    <Navigation />
    <Socials />
  </div>

const Navigation = () =>
  <div className="hidden md:flex w-full justify-evenly items-center text-lg text-aliceblue">
    <Anchor href={config.menu.link_1} label={config.menu.label_1} />
    <Anchor href={config.menu.link_2} label={config.menu.label_2} />
    <Anchor href={config.menu.link_3} label={config.menu.label_3} />
    <Anchor href={config.menu.link_4} label={config.menu.label_4} />
  </div>

const socialsStyles = "mx-1 h-8 w-8"

const Socials = () =>
  <div className="hidden md:flex flex-row">
    <SocialNetwork className={socialsStyles} logo={config.svg_path + config.socials.facebook_logo_white} href={config.socials.facebook_link} />
    <SocialNetwork className={socialsStyles} logo={config.svg_path + config.socials.linkedin_logo_white} href={config.socials.linkedin_link} />
  </div>
