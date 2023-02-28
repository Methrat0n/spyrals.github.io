import React from 'react'

export default () =>
  <section className="flex flex-col items-center mt-24 mb-36 relative overflow-x-clip" id='skills'>
    <SkillsTitle />
    <SkillsContent />
    <img className='self-end -z-20 absolute -right-72 -top-40 h-[68rem] w-[78rem]' src="/svgs/spyrals-background.svg" alt='Le logo de spyrals utilisé en background.' />
  </section>

const SkillsTitle = () =>
  <h1 className="text-5xl mb-44 font-title font-semibold">
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
