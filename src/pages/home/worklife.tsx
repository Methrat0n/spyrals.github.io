import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'

export default () =>
  <section className="flex flex-col items-center pt-24 md:ml-10 lg:ml-32 overflow-x-hidden" id='worklife'>
    <h1 className="text-4xl md:text-5xl lg:text-6xl self-start lg:ml-16 font-title font font-semibold max-md:mx-5 max-md:self-center">{config.worklife.title}</h1>
    <p className="mt-12 mb-6 md:mx-14 lg:mx-96 mx-5 max-md:text-justify" id='worklifeText'>{config.worklife.text}</p>
    <Gallery />
  </section>

const Gallery = () =>
  <div className="flex flex-row overflow-auto pt-[2rem] pb-20 md:py-20 pl-28 md:pl-4 hide-scroll w-screen md:w-full">
    {config.worklife.gallery.map((frame, index) =>
      <Frame 
        img={frame.img} 
        alt={frame.alt} 
        height={frame.height} 
        width={frame.width} 
        border={config.worklife.colors[index % config.worklife.colors.length]}
        rotation={config.worklife.rotation[index % config.worklife.rotation.length]}
        translate={config.worklife.translate[index % config.worklife.translate.length]}
        zIndex={config.worklife.zIndex[index % config.worklife.zIndex.length]}
        key={index}
      />
    )}
  </div>

type Props = {
  img: string
  alt: string
  height: string
  width: string
  border: string | [string, string]
  rotation: string
  translate: string
  zIndex: string
}

const Frame = ({img, alt, height, width, border, rotation, translate, zIndex}: Props) => {

  const borderProps = Array.isArray(border) ? { borderGradient: {from: border[0], to: border[1]}} : { className: 'border-'+border}

  return <BordedPicture fetchPriority="low"  sizes={`${height} ${width} `} positioning={`${rotation} ${translate} ${zIndex} mt-12`} src={config.img_path + img} alt={alt} {...borderProps} />
}
