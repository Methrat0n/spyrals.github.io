import React from 'react'
import FooterLink from './footer-link'
import FollowSocials from './follow-socials'
import PhoneContact from './phone-contact'
import SpyralsLogoFooter from '../header/spyrals-logo'

export default () =>
  <footer className="flex flex-row justify-between border-t-2 border-purple-600 mr-14 items-center h-24 mx-8 text-white">
    <SpyralsLogoFooter />
    <FollowSocials />
    <PhoneContact />
    <FooterLink href="cgv" label="CGV" />
    <FooterLink href="mentionslegales" label="Mentions légales" />
    <GithubHosted />
  </footer>

  const GithubHosted = () =>
    <div className='flex items-center'>
      <span className='mr-4'>Fière d'être hebergé par</span>
      <a href="https://github.com/Spyrals-IO/Spyrals-io.github.io">
        <img className='h-12' src='/svgs/logo-github.svg' alt='Le logo de github, notre host' />
      </a>
    </div>