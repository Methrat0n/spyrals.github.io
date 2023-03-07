import React from 'react'
import SpyralsLogo from './spyrals-logo'
import NavigationAndSocial from './navigation-and-social'

export default () =>
  <header className="flex sticky top-0 h-24 w-full justify-between border-b-2 border-purple-600 bg-white sm:px-32 items-center font-menu font-semibold z-50">
    <SpyralsLogo />
    <NavigationAndSocial />
  </header>