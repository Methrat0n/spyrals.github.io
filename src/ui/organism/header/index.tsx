import React from 'react'
import SpyralsLogo from './spyrals-logo'
import NavigationAndSocial from './navigation-and-social'

export default () =>
  <header className="hidden md:flex sticky top-0 h-24 w-full justify-between border-b-2 border-purple-600 md:px-16 lg:px-20 items-center font-menu font-semibold z-50 bg-purple-void">
    <SpyralsLogo />
    <NavigationAndSocial />
  </header>