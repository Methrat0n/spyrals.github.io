import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col pt-24 ml-32" id='team'>
    <h1 className="text-6xl ml-32 font-title font-semibold">{config.team.title}</h1>
    <TeamContent />
  </section>

const figuresStyle = "flex flex-col justify-evenly items-center rounded-xl mx-2 py-8 px-4 h-[29rem] w-[21rem] min-w-[21rem]"
const imagesStyle = "w-[12rem] h-[14rem] object-cover"
const pStyle = "text-3xl mt-4 text-center italic"

const TeamContent = () =>
  <div className="flex flex-row font-bold overflow-x-auto my-20 hide-scroll">
    {config.team.members.map((member, index) => {
      return <MemberCard name={member.name} text={member.text} img={member.img} color={config.team.colors[index % config.team.colors.length]} />
    })}
  </div>

type Props = {
  name: string
  text: string
  img: string
  color: string
}

const MemberCard = ({name, text, img, color}: Props) =>
  <figure className={`${color} ${figuresStyle}`}>
    <img className={`${imagesStyle}`} src={config.img_path + img} alt={name}/>
    <figcaption>{name}</figcaption>
    <p className={`${pStyle}`}>{text}</p>
  </figure>

