import React from 'react'
import SocialNetwork from '../../atoms/SocialNetwork'

export default () =>
  <div className="flex flex-row font-bold">
    <p>Nous suivre :</p>
    <FollowSocialButton />    
  </div>

const FollowSocialButton = () => 
  <div className="flex flex-row items-center h-7">
    <SocialNetwork className="" logo='/svgs/facebookLogo.svg' href="https://linkedin.com/company/spyrals" />
    <SocialNetwork className="" logo='/svgs/linkedinLogo.svg' href="https://linkedin.com/company/spyrals" />
  </div>