import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col items-center mt-24 mb-36 relative overflow-x-clip" id='skills'>
    <SkillsTitle />
    <SkillsContent />
    <img className='self-end absolute -right-72 -top-20 md:-top-40 min-w-[45rem] md:h-[68rem] md:w-[78rem] -z-10' src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' />
  </section>

const SkillsTitle = () =>
  <h1 className="text-4xl md:text-[4rem] mb-20 md:mb-44 font-title font-semibold max-md:mx-5">
    {config.skills.title}
  </h1>

const imagesAnimation = "lg:transition lg:duration-0 lg:hover:duration-150 lg:hover:ease-in-out lg:hover:scale-150 lg:transform-gpu lg:cursor-pointer"
const imagesStyle = "rounded-xl px-12 mx-4 h-[10rem] w-[12rem] object-contain place-content-center z-10"

const SkillsContent = () =>
  <div className="flex flex-row max-md:overflow-x-scroll max-md:p-10 max-md:w-screen hide-scroll">
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
