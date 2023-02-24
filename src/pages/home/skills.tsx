import React from 'react'

export default () =>
  <section className="flex flex-col items-center mt-24 mb-36" id='skills'>
    <SkillsTitle />
    <SkillsContent />    
  </section>

const SkillsTitle = () =>
  <h1 className="text-5xl mb-44">
    NOS COMPETENCES
  </h1>

const imagesStyle = "rounded-xl px-12 mx-4 h-[10rem] w-[12rem] object-contain place-content-center -z-10"

const SkillsContent = () =>
  <div className="flex flex-row">
    <img className={`bg-purple-darkest -rotate-12 ${imagesStyle}`} src="/svgs/javascriptLogo.svg"/>
    <img className={`bg-purple-spyrals rotate-1 ${imagesStyle}`} src="/svgs/javascriptLogo.svg"/>
    <img className={`bg-pink rotate- rotate-[8deg] -translate-y-6 ${imagesStyle}`} src="/svgs/javascriptLogo.svg"/>
    <img className={`bg-purple-dark rotate-1 translate-y-6 ${imagesStyle}`} src="/svgs/javascriptLogo.svg"/>
    <img className={`bg-purple-spyrals rotate-[7deg] -translate-y-6 ${imagesStyle}`} src="/svgs/javascriptLogo.svg"/>
    <img className={`bg-purple-darkest -rotate-[8deg] ${imagesStyle}`} src="/svgs/javascriptLogo.svg"/>
  </div>
