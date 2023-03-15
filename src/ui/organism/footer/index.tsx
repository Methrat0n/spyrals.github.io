import React from 'react'
import config from '../../../utils/config'
import FooterLink from './footer-link'
import FollowSocials from './follow-socials'
import PhoneContact from './phone-contact'
import SpyralsLogoFooter from '../header/spyrals-logo'

export default () =>
  <footer className="flex flex-row justify-between border-t-2 border-purple-600 items-center md:h-fit h-24 mx-1 md:mx-8 text-white max-lg:text-sm pt-1">
    <SpyralsLogoFooter />
    <div className='flex flex-row max-md:flex-wrap items-center justify-end md:grow md:justify-between lg:justify-around max-md:pt-5 lg:mt-[1.1rem] md:pl-6'>
      <div className='flex md:flex-col-reverse lg:flex-row md:h-24 lg:h-fit justify-between lg:justify-around md:grow md:py-4'>
        <FollowSocials />
        <PhoneContact />
      </div>
      <div className='hidden md:flex md:flex-col lg:flex-row h-24 w-fit lg:w-1/2 lg:justify-around'>
        <div className='flex flex-row justify-start lg:justify-around items-center md:w-full lg:w-1/4 lg:mx-1 grow md:pr-14 md:pt-3 lg:p-0'>
          <FooterLink href={config.footer.link_3} label={config.footer.label_3} />
          <FooterLink href={config.footer.link_4} label={config.footer.label_4} />
        </div>
        <GithubHosted />
      </div>
      <div className='md:hidden'>
        <div className='flex flex-row justify-end'>
          <FooterLink href={config.footer.link_3} label={config.footer.label_3} />
          <FooterLink href={config.footer.link_4} label={config.footer.label_4} />
        </div>
        <div>
          <GithubHosted />
        </div>
      </div>
    </div>
  </footer>

  const GithubHosted = () =>
    <div className='flex items-center md:pl-[5.438rem] md:pb-3 lg:p-0'>
      <span className='mr-1 md:mr-4 md:pr-5'>{config.footer.hosted_text}</span>
      <a href={config.footer.hosted_link}>
        <img className='h-7 md:h-12' src={config.svg_path + config.footer.hosted_logo} alt={config.footer.hosted_alt} />
      </a>
    </div>