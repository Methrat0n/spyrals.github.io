import React from 'react'
import config from '../../../utils/config'
import FooterLink from './footer-link'
import FollowSocials from './follow-socials'
import PhoneContact from './phone-contact'
import SpyralsLogoFooter from '../header/spyrals-logo'

export default () =>
  <footer className="flex flex-row justify-between border-t-2 border-purple-600 mr-14 items-center h-24 mx-8 text-white">
    <SpyralsLogoFooter />
    <FollowSocials />
    <PhoneContact />
    <FooterLink href={config.footer.link_3} label={config.footer.label_3} />
    <FooterLink href={config.footer.link_4} label={config.footer.label_4} />
    <GithubHosted />
  </footer>

  const GithubHosted = () =>
    <div className='flex items-center'>
      <span className='mr-4'>{config.footer.hosted_text}</span>
      <a href={config.footer.hosted_link}>
        <img className='h-12' src={config.svg_path + config.footer.hosted_logo} alt={config.footer.hosted_alt} />
      </a>
    </div>