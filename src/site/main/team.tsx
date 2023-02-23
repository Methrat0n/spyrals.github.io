import React from 'react'

type Props = {
  avatar: string
  backgroundColor: string
  name: string
}

export default () =>
  <section id='team'>
    <h1>L'EQUIPE</h1>
    <TeamContent />
    <TeamFooter />
  </section>

const TeamContent = () =>
  <>
    <TeamCard avatar="/images/avatar.webp" backgroundColor="purple1" name="Mallorie" />
    <TeamCard avatar="/images/avatar.webp" backgroundColor="purple1" name="Merlin"/>
    <TeamCard avatar="/images/avatar.webp" backgroundColor="purple1" name="Fabien"/>
    <TeamCard avatar="/images/avatar.webp" backgroundColor="purple1" name="Thibaut"/>
  </>

const TeamCard = ({avatar, backgroundColor, name}: Props) =>
  <div className={backgroundColor}>
    <img alt={name} src={avatar}/>
    <h3>{name}</h3>
  </div>

const TeamFooter = () =>
  <>
    <p>DECOUVRE LES AUTRES PROFILS !</p>
    <img src="/svgs/arrow.svg"/>
    <img src="/svgs/arrow.svg"/>
  </>
