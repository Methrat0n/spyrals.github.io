import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col pt-14 md:pt-24 md:ml-32" id='team'>
    <h1 className="text-4xl md:text-5xl lg:text-6xl md:ml-32 font-title font-semibold max-md:self-center">{config.team.title}</h1>
    <TeamContent />
  </section>

const figuresAnimations = ""
const figuresStyle = "flex flex-col justify-evenly items-center rounded-xl py-8 px-4 h-[29rem] w-[21rem] min-w-[21rem] z-10"
const imagesStyle = "w-[12rem] h-[14rem] object-cover"
const pStyle = "text-3xl mt-4 text-center italic font-menu bold italic"

const TeamContent = () =>
  <div className="flex flex-row font-bold overflow-x-auto my-10 hide-scroll py-10 ml-10 md:ml-0">
    {config.team.members.map((member, index) =>
      <MemberCard 
        name={member.name} 
        text={member.text} 
        img={member.img} 
        color={config.team.colors[index % config.team.colors.length]}
        key={index}
      />
    )}
  </div>

type Props = {
  name: string
  text: string
  img: string
  color: string
}


// figcaption mb -2rem
// font-size 1.4rem
// enlever phrase en dessous de "nos clients"
// mail plus gros, un peu
// tel  plus gros, un peu
// grossir un peu le logo dans le footer
// en grossisant mail, réduire éczrt avec tel
// nou contacter - tel pas dans le centre, un peu trop gros
// nous contacter, un peu d'espace en haut
// Reduire un peu le texte
// footer check les logos
const MemberCard = ({name, text, img, color}: Props) =>
  <div className='flip-card h-[29rem] w-[21rem] min-w-[21rem] z-10 mx-2'>
    <div className='flip-card-inner'>
      <figure className={`${color} ${figuresStyle} ${figuresAnimations} flip-card-front`}>
        <img className={`${imagesStyle}`} src={config.img_path + img} alt={name}/>
        <figcaption className='font-chakraPetch text-4xl -mb-8'>{name}</figcaption>
        <p className={pStyle}>{text}</p>
      </figure>
      <div className={`${figuresStyle} bg-white flip-card-back`}/>
    </div>
  </div>

