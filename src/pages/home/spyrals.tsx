import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'
import SpyralsLogo from '../../ui/organism/header/spyrals-logo'

export default () =>
  <section className="flex flex-col md:flex-row max-md:px-5 items-center justify-between lg:pt-14 pb-24 overflow-hidden" id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
    <ButtonLink className="md:hidden mt-20 md:mr-20 lg:mr-40 md:ml-20 animate-fadeIn" href={config.spyrals.button_link} label={config.spyrals.button_label} />
  </section>

const SpyralsLeft = () =>
  <div className="flex flex-col items-center md:justify-start lg:justify-center max-md:w-full md:mr-10 lg:mr-20 lg:mx-20">
    <SpyralsLogo className="md:hidden"/>
    <h1 className="hidden md:inline text-5xl self-start md:text-6xl 2xl:text-9xl md:pl-20 font-title font-semibold max-md:ml-5">{config.spyrals.title}</h1>
    <div className="flex max-sm:flex-wrap sm:flex-row justify-between -mt-8 md:mt-0 text-2xl lg:text-3xl pt-10 pb-8 md:pl-8 lg:pl-40 font-semibold max-md:self-end text-right">
      <p className="block animate-bounceFadeAppear1 opacity-0 mr-2">Le</p>
      <p className="block animate-bounceFadeAppear2 opacity-0 mr-2">développement</p>
      <p className="block animate-bounceFadeAppear3 opacity-0 mr-2">sur</p>
      <p className="block animate-bounceFadeAppear4 opacity-0">mesure</p>
    </div>
    <ButtonLink className="max-md:hidden mt-10 md:mr-20 lg:mr-40 md:ml-20 animate-fadeIn" href={config.spyrals.button_link} label={config.spyrals.button_label} />
  </div>

const SpyralsRight = () =>
  <div className="flex flex-row pt-8 lg:pt-0">
    <BordedPicture 
      borderGradient={{from: 'purple-spyrals', to: 'blueLagoon'}}
      positioning='-rotate-6 mt-12 z-20'
      sizes='h-48 w-48 md:h-[18rem] md:w-[18rem] lg:h-[21rem] lg:w-[21rem] 2xl:h-[35rem] 2xl:w-[35rem]'
      src={config.img_path + config.spyrals.img1}
      alt={config.spyrals.img1_alt}
      fetchPriority="high"
    />
    <BordedPicture 
      borderGradient={{from: 'purple-dark', to: 'miamiPink'}}
      positioning='rotate-[16deg] z-10 max-md:translate-y-10'
      sizes='h-60 w-[9.1rem] md:h-[24.5rem] md:w-[15rem] lg:h-[36rem] lg:w-[22rem] 2xl:h-[45rem] 2xl:w-[28rem]'
      src={config.img_path + config.spyrals.img2}
      alt={config.spyrals.img2_alt}
      fetchPriority="high"
    />
  </div>
