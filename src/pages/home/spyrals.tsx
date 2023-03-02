import React from 'react'
import config from '../../utils/config'
import ButtonLink from '../../ui/atoms/ButtonLink'
import BordedPicture from '../../ui/atoms/BordedPicture'

export default () =>
  <section className="flex flex-row items-center justify-between pt-14 pb-24 overflow-hidden" id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
  </section>

const SpyralsLeft = () =>
  <div className="flex flex-col items-center justify-center mx-20">
    <h1 className="text-9xl pl-20 font-title font-semibold">{config.spyrals.title}</h1>
    <p className="text-3xl pt-10 pb-8 pl-40 font-semibold">{config.spyrals.text}</p>
    <ButtonLink className="mr-40" href={config.spyrals.button_link} label={config.spyrals.button_label} />
  </div>

const SpyralsRight = () =>
  <div className="flex flex-row">
    <BordedPicture className={`mt-12 border-purple-spyrals -rotate-6 -z-10 h-[35rem] w-[35rem]`} src={config.img_path + config.spyrals.img1} alt={config.spyrals.img1_alt} />
    <BordedPicture className={`border-purple-dark rotate-[16deg] -z-20 h-[45rem] w-[28rem]`} src={config.img_path + config.spyrals.img2} alt={config.spyrals.img2_alt}/>
  </div>
