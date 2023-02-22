import React from 'react'
import FooterLink from './footer-link'
import FollowSocials from './follow-socials'
import PhoneContact from './phone-contact'
import SpyralsLogoFooter from '../header/spyrals-logo'

export default () =>
  <footer>
    <SpyralsLogoFooter />
    <FollowSocials />
    <PhoneContact />
    <FooterLink href="cgv" label="CGV" />
    <FooterLink href="mentionslegales" label="Mentions légales" />
  </footer>