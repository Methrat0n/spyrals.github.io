import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'

export default () =>
  <section className="flex flex-col items-center pt-24 sm:ml-32" id='worklife'>
    <h1 className="text-4xl sm:text-6xl self-start ml-16 font-title font font-semibold max-sm:mx-5 max-sm:self-center">{config.worklife.title}</h1>
    <p className="my-12 sm:mx-96 mx-5 max-sm:text-justify">{config.worklife.text}</p>
    <Gallery />
  </section>

const Gallery = () =>
  <div className="flex flex-row overflow-auto py-20 pl-4 hide-scroll">
    {config.worklife.gallery.map((frame, index) => {
      return <Frame 
      img={frame.img} 
      alt={frame.alt} 
      height={frame.height} 
      width={frame.width} 
      color={config.worklife.colors[index % config.worklife.colors.length]}
      rotation={config.worklife.rotation[index % config.worklife.rotation.length]}
      translate={config.worklife.translate[index % config.worklife.translate.length]}
      zIndex={config.worklife.zIndex[index % config.worklife.zIndex.length]}
     />
    })}
  </div>

type Props = {
  img: string
  alt: string
  height: string
  width: string
  color: string
  rotation: string
  translate: string
  zIndex: string
}

const Frame = ({img, alt, height, width, color, rotation, translate, zIndex}: Props) =>
  <BordedPicture className={`mt-12 ${height} ${width} ${color} ${rotation} ${translate} ${zIndex}`} src={config.img_path + img} alt={alt} />
