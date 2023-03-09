import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'

export default () =>
  <section className="flex flex-col md:flex-row max-md:px-5 items-center justify-between md:pt-14 pb-24 overflow-hidden" id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
  </section>

const SpyralsLeft = () =>
  <div className="flex flex-col items-center justify-center max-md:w-full md:mx-20">
    <h1 className="text-5xl self-start md:text-9xl md:pl-20 font-title font-semibold max-md:ml-5">{config.spyrals.title}</h1>
    <p className="text-2xl md:text-3xl pt-10 pb-8 md:pl-40 font-semibold max-md:self-end text-right">{config.spyrals.text}</p>
    <ButtonLink className="mt-10 md:mr-40" href={config.spyrals.button_link} label={config.spyrals.button_label} />
  </div>

const SpyralsRight = () =>
  <div className="flex flex-row">
    <BordedPicture 
      borderGradient={{from: 'purple-spyrals', to: 'blueLagoon'}}
      positioning='-rotate-6 mt-12 z-20'
      sizes='h-40 w-40 md:h-[35rem] md:w-[35rem]'
      src={config.img_path + config.spyrals.img1}
      alt={config.spyrals.img1_alt}
    />
    <BordedPicture 
      borderGradient={{from: 'purple-dark', to: 'miamiPink'}}
      positioning='rotate-[16deg] z-10 max-md:translate-y-10'
      sizes='h-52 w-44 md:h-[45rem] md:w-[28rem]'
      src={config.img_path + config.spyrals.img2}
      alt={config.spyrals.img2_alt}
    />
  </div>
