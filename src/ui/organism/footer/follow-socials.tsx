import React from 'react'
import SocialNetwork from '../../atoms/SocialNetwork'

export default () =>
  <div className="flex flex-row font-bold">
    <p>Nous suivre :</p>
    <FollowSocialButton />    
  </div>

const socialsStyles = "mx-1 h-7 py-2 bg-white octagon w-7"

const FollowSocialButton = () => 
  <div className="flex flex-row items-center ml-4">
    <SocialNetwork className={`${socialsStyles}`} logo='/svgs/facebookFooterLogo.svg' href="https://linkedin.com/company/spyrals" />
    <SocialNetwork className={`${socialsStyles}`} logo='/svgs/linkedinFooterLogo.svg' href="https://linkedin.com/company/spyrals" />
  </div>