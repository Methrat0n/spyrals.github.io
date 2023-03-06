import React from 'react'
import config from '../../../utils/config'
import FooterLink from './footer-link'
import FollowSocials from './follow-socials'
import PhoneContact from './phone-contact'
import SpyralsLogoFooter from '../header/spyrals-logo'

export default () =>
  <footer className="flex flex-row justify-between border-t-2 border-purple-600 items-center h-24 mx-1 sm:mx-8 text-white">
    <SpyralsLogoFooter />
    <div className='flex flex-wrap items-center justify-end sm:grow sm:justify-around max-sm:pt-5'>
      <FollowSocials />
      <PhoneContact />
      <div className='flex flex-row justify-evenly sm:hidden'>
        <FooterLink href={config.footer.link_3} label={config.footer.label_3} />
        <FooterLink href={config.footer.link_4} label={config.footer.label_4} />
      </div>
      <span className='hidden sm:inline'>
      <FooterLink href={config.footer.link_3} label={config.footer.label_3} />
      <FooterLink href={config.footer.link_4} label={config.footer.label_4} />
      </span>
      <GithubHosted />
    </div>
  </footer>

  const GithubHosted = () =>
    <div className='flex items-center'>
      <span className='mr-4'>{config.footer.hosted_text}</span>
      <a href={config.footer.hosted_link}>
        <img className='h-12' src={config.svg_path + config.footer.hosted_logo} alt={config.footer.hosted_alt} />
      </a>
    </div>