import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col items-center mt-24 mb-36 relative overflow-x-clip" id='skills'>
    <SkillsTitle />
    <SkillsContent />
    <img className='self-end absolute -right-72 -top-20 md:-top-40 min-w-[45rem] md:h-[68rem] md:w-[78rem] -z-10' src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' />
  </section>

const SkillsTitle = () =>
  <h1 className="text-4xl lg:text-5xl mb-20 md:mb-44 font-title font-semibold max-md:mx-5">
    {config.skills.title}
  </h1>

const imagesAnimation = "lg:transition lg:duration-0 lg:hover:duration-150 lg:hover:ease-in-out lg:hover:scale-150 lg:transform-gpu lg:cursor-pointer"
const imagesStyle = "rounded-xl px-5 py-3 mx-4 h-[7rem] min-w-[9rem] 2xl:px-5 2xl:py-3 md:mx-1 2xl:mx-4 md:px-3 md:h-[5rem] md:min-w-[5.5rem] 2xl:h-[7rem] 2xl:w-[9rem] object-contain place-content-center z-10"

const SkillsContent = () =>
  <div className="hide-scroll flex flex-row max-md:overflow-x-scroll max-md:p-10 w-screen md:justify-between lg:justify-center">
    {config.skills.gallery.map((skill, index) => {
      return <SkillCard 
        alt={skill.alt} 
        img={skill.img} 
        color={config.skills.colors[index % config.skills.colors.length]} 
        rotate={config.skills.rotation[index % config.skills.rotation.length]} 
        translate={config.skills.translate[index % config.skills.translate.length]} 
      />
    })}
  </div>

type Props = {
  alt: string
  img: string
  color: string
  rotate: string
  translate: string
}

const SkillCard = ({alt, img, color, rotate, translate}: Props) =>
  <img className={`${color} ${rotate} ${translate} ${imagesStyle} ${imagesAnimation}`} src={img} alt={alt} key={alt}/>
