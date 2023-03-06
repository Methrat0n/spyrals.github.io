import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col items-center mt-24 mb-36 relative overflow-x-clip" id='skills'>
    <SkillsTitle />
    <SkillsContent />
    <img className='self-end -z-20 absolute -right-72 -top-20 sm:-top-40 min-w-[45rem] sm:h-[68rem] sm:w-[78rem]' src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' />
  </section>

const SkillsTitle = () =>
  <h1 className="text-4xl sm:text-5xl mb-20 sm:mb-44 font-title font-semibold max-sm:mx-5">
    {config.skills.title}
  </h1>

const imagesStyle = "rounded-xl px-12 mx-4 h-[10rem] w-[12rem] object-contain place-content-center -z-10"

const SkillsContent = () =>
  <div className="flex flex-row max-sm:overflow-x-scroll max-sm:p-10 max-sm:w-screen hide-scroll">
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
  <img className={`${color} ${rotate} ${translate} ${imagesStyle}`} src={img} alt={alt} key={alt}/>
