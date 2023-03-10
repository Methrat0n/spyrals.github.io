import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col pt-14 md:pt-24 md:ml-32" id='team'>
    <h1 className="text-4xl md:text-5xl lg:text-6xl md:ml-32 font-title font-semibold max-md:self-center">{config.team.title}</h1>
    <TeamContent />
  </section>

const figuresAnimations = ""
const figuresStyle = "flex flex-col items-center rounded-xl py-8 px-4 h-[29rem] w-[21rem] min-w-[21rem] z-10"

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
      <figure className={`${color} ${figuresStyle} ${figuresAnimations} bg-gradient-to-br flip-card-front`}>
        <img className='w-[12rem] min-h-[13rem] max-h-[13rem] object-contain' src={config.img_path + img} alt={name}/>
        <figcaption className='flex flex-col items-center'>
          <p className='text-xl my-6'>{name}</p>
          <p className='font-menu text-3xl text-center italic font-bold'>{text}</p>
        </figcaption>
      </figure>
      <div className={`${figuresStyle} ${color} bg-gradient-to-br flip-card-back`}/>
    </div>
  </div>

