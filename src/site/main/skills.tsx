import React from 'react'

type Props = {
  backgroundColor: string
  logo: string  
}

export default () =>
  <section id='skills'>
    <SkillsTitle />
    <SkillsContent />    
  </section>

const SkillsTitle = () =>
  <h1>
    NOS COMPETENCES
  </h1>

const SkillsContent = () =>
  <>
    <SkillsCard backgroundColor ="purple1" logo="/svgs/javascriptLogo.svg" />
    <SkillsCard backgroundColor ="purple1" logo="/svgs/javascriptLogo.svg" />
    <SkillsCard backgroundColor ="purple1" logo="/svgs/javascriptLogo.svg" />
    <SkillsCard backgroundColor ="purple1" logo="/svgs/javascriptLogo.svg" />
    <SkillsCard backgroundColor ="purple1" logo="/svgs/javascriptLogo.svg" />
    <SkillsCard backgroundColor ="purple1" logo="/svgs/javascriptLogo.svg" />
  </>

const SkillsCard = ({backgroundColor, logo}: Props) =>
  <div className={backgroundColor}>
    <img src={logo}  />
  </div>
