import React from 'react'
import config from '../../../utils/config'
import SocialNetwork from '../../atoms/SocialNetwork'

export default () =>
  <div className="flex flex-row font-bold mx-1">
    <p className='hidden sm:inline'>{config.footer.label_1}</p>
    <FollowSocialButton />    
  </div>

const socialsStyles = "mx-1 h-7 mx-1 w-7"

const FollowSocialButton = () => 
  <div className="flex flex-row items-center ml-4">
    <SocialNetwork className={`${socialsStyles}`} logo={config.svg_path + config.socials.facebook_logo_black} href={config.socials.facebook_link} />
    <SocialNetwork className={`${socialsStyles}`} logo={config.svg_path + config.socials.linkedin_logo_black} href={config.socials.linkedin_link} />
  </div>