import React from 'react'
import config from '../../utils/config'

export default () =>
  <section className="flex flex-col pt-14 md:pt-24 md:ml-32" id='team'>
    <h1 className="text-4xl md:text-5xl lg:text-6xl md:ml-32 font-title font-semibold max-md:self-center">{config.team.title}</h1>
    <TeamContent />
  </section>

const figuresAnimations = ""
const figuresStyle = "flex flex-col items-center rounded-xl py-8 px-4 h-[29rem] w-[21rem] min-w-[21rem] z-10 hover:fade-out absolute bg-gradient-to-br"
const figuresStyleVerso = "flex flex-col rounded-xl h-[29rem] w-[21rem] min-w-[21rem] z-10 bg-gradient-to-br absolute overflow-y-clip"
const cardStyle = "h-[29rem] w-[21rem] min-w-[21rem] z-10 mx-2 relative"

const TeamContent = () =>
  <div className="flex flex-row font-bold overflow-x-auto my-10 hide-scroll py-10 ml-10 md:ml-0">
    <Merlin />
    <Mallorie />
    <Julien />
    <Fabien />
    <Thibaut />
  </div>

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

const Merlin = () =>
  <div className={`${cardStyle}`} tabIndex={1}>

    <div className={`${figuresStyleVerso} from-purple-dark to-[#2E0237]`}>
        <h1 className='font-title text-2xl self-center mt-2'>{config.team.merlin.job_verso}</h1>
        <img className='absolute top-14 left-64 h-[2.625rem] w-[2.873]' src={config.team.merlin.img_verso_1} />
        <div className='flex flex-col items-start w-full pl-3 mt-11'>
          <h2 className='font-menu text-2xl font-bold'>{config.team.skill_title}</h2>
          <div className='flex flex-row font-card text-lg w-full pl-3 mt-2'>
            <ul>
              <li>{config.team.merlin.skill_1}</li>
              <li>{config.team.merlin.skill_2}</li>
              <li>{config.team.merlin.skill_3}</li>
              <li>{config.team.merlin.skill_4}</li>
              <li>{config.team.merlin.skill_5}</li>
            </ul>
            <ul className='pl-28'>
              <li>{config.team.merlin.skill_6}</li>
              <li>{config.team.merlin.skill_7}</li>
              <li>{config.team.merlin.skill_8}</li>
              <li>{config.team.merlin.skill_9}</li>
              <li>{config.team.merlin.skill_10}</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-start w-full pl-3 mt-3'>
          <h2 className='font-menu text-2xl font-bold'>{config.team.responsability_title}</h2>
          <div className='flex flex-row font-card text-lg w-full pl-3 mt-3'>
            <ul>
              <li>{config.team.merlin.responsability_1}</li>
              <li>{config.team.merlin.responsability_2}</li>
              <li>{config.team.merlin.responsability_3}</li>
              <li>{config.team.merlin.responsability_4}</li>
            </ul>
            <ul className='pl-4'>
              <li>{config.team.merlin.responsability_5}</li>
              <li>{config.team.merlin.responsability_6}</li>
              <li>{config.team.merlin.responsability_7}</li>
            </ul>
          </div>
        </div>
        <img className='absolute top-[26.5rem] h-10 w-[3rem]' src={config.team.merlin.img_verso_2} />
    </div>

    <figure className={`from-purple-dark to-[#2E0237] ${figuresStyle} ${figuresAnimations}`}>
      <img className='w-[12rem] min-h-[13rem] max-h-[13rem] object-contain' src={config.team.merlin.portrait} alt={config.team.merlin.name} />
      <figcaption className='flex flex-col items-center'>
        <p className='text-xl my-6'>{config.team.merlin.name}</p>
        <p className='font-menu text-3xl text-center italic font-bold'>{config.team.merlin.job}</p>
      </figcaption>
    </figure>

  </div>

const Mallorie = () =>
  <div className={`${cardStyle}`} tabIndex={2}>
    
    <div className={`${figuresStyleVerso} from-[#FF03EE] to-[#880C85]`}>
      <h1 className='font-title text-2xl text-center self-center mt-2'>{config.team.mallorie.job_verso}</h1>
      <img className='absolute top-9 left-[17.5rem] h-[3.375rem] w-[3.375]' src={config.team.mallorie.img_verso_1} />
      <div className='flex flex-col items-start w-full pl-3 mt-5'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.skill_title}</h2>
        <ul className='font-card text-lg pl-3'>
          <li>{config.team.mallorie.skill_1}</li>
          <li>{config.team.mallorie.skill_2}</li>
          <li>{config.team.mallorie.skill_3}</li>
          <li>{config.team.mallorie.skill_4}</li>
          <li>{config.team.mallorie.skill_5}</li>
          <li>{config.team.mallorie.skill_6}</li>
        </ul>
      </div>
      <div className='flex flex-col items-start w-full pl-3 mt-3'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.responsability_title}</h2>
        <ul className='font-card text-lg w-full pl-3'>
          <li>{config.team.mallorie.responsability_1}</li>
          <li>{config.team.mallorie.responsability_2}</li>
          <li>{config.team.mallorie.responsability_3}</li>
          <li>{config.team.mallorie.responsability_4}</li>
        </ul>
      </div>
    </div>

    <figure className={`from-[#FF03EE] to-[#880C85] ${figuresStyle} ${figuresAnimations}`}>
      <img className='w-[12rem] min-h-[13rem] max-h-[13rem] object-contain' src={config.team.mallorie.portrait} alt={config.team.mallorie.name} />
      <figcaption className='flex flex-col items-center'>
        <p className='text-xl my-6'>{config.team.mallorie.name}</p>
        <p className='font-menu text-3xl text-center italic font-bold'>{config.team.mallorie.job}</p>
      </figcaption>
    </figure>

  </div>

const Julien = () =>
  <div className={`${cardStyle}`} tabIndex={3}>

    <div className={`${figuresStyleVerso} from-[#8C53FF] to-[#051133]`}>
      <h1 className='font-title text-2xl self-center mt-2'>{config.team.julien.job_verso}</h1>
      <img className='absolute top-[7.3rem] left-[0.9rem] w-10' src={config.team.julien.img_verso_1} />
      <img className='absolute top-44 left-[16.5rem] h-11 w-11' src={config.team.julien.img_verso_2} />
      <div className='flex flex-col items-start w-full pl-3 mt-11'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.skill_title}</h2>
        <div className='flex flex-row font-card text-xl w-full pl-11 mt-2'>
          <ul>
            <li>{config.team.julien.skill_1}</li>
            <li>{config.team.julien.skill_2}</li>
            <li>{config.team.julien.skill_3}</li>
            <li>{config.team.julien.skill_4}</li>
          </ul>
          <ul className='pl-14'>
            <li>{config.team.julien.skill_5}</li>
            <li>{config.team.julien.skill_6}</li>
            <li>{config.team.julien.skill_7}</li>
            <li>{config.team.julien.skill_8}</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-start w-full pl-3 mt-12'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.responsability_title}</h2>
        <ul className='font-card text-lg w-full pl-3'>
          <li>{config.team.julien.responsability_1}</li>
          <li>{config.team.julien.responsability_2}</li>
          <li>{config.team.julien.responsability_3}</li>
          <li>{config.team.julien.responsability_4}</li>
        </ul>
      </div>
      <img className='absolute top-96 left-64 h-14 w-16' src={config.team.julien.img_verso_3} />
    </div>

    <figure className={`from-[#8C53FF] to-[#051133] ${figuresStyle} ${figuresAnimations}`}>
      <img className='w-[12rem] min-h-[13rem] max-h-[13rem] object-contain' src={config.team.julien.portrait} alt={config.team.julien.name} />
      <figcaption className='flex flex-col items-center'>
        <p className='text-xl my-6'>{config.team.julien.name}</p>
        <p className='font-menu text-3xl text-center italic font-bold'>{config.team.julien.job}</p>
      </figcaption>
    </figure>

  </div>

const Fabien = () =>
  <div className={`${cardStyle}`} tabIndex={4}>

    <div className={`${figuresStyleVerso} from-[#FFBD59] to-[#D16023]`}>
      <h1 className='font-title text-2xl self-center mt-2'>{config.team.fabien.job_verso}</h1>
      <img className='absolute left-[17rem] h-16 w-16' src={config.team.fabien.img_verso_1} />
      <img className='absolute top-72 left-[6.5rem] h-5 w-5' src={config.team.fabien.img_verso_2} />
      <div className='flex flex-col items-start w-full pl-3 mt-11'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.skill_title}</h2>
        <div className='flex flex-row font-card text-xl w-full pl-9'>
          <ul>
            <li>{config.team.fabien.skill_1}</li>
            <li>{config.team.fabien.skill_2}</li>
            <li>{config.team.fabien.skill_3}</li>
            <li>{config.team.fabien.skill_4}</li>
            <li>{config.team.fabien.skill_5}</li>
            <li>{config.team.fabien.skill_6}</li>
            <li>{config.team.fabien.skill_7}</li>
          </ul>
          <ul className='pl-11'>
            <li>{config.team.fabien.skill_8}</li>
            <li>{config.team.fabien.skill_9}</li>
            <li>{config.team.fabien.skill_10}</li>
          </ul>
        </div>
      </div>
      <img className='absolute top-[24rem] left-7 h-8 w-4' src={config.team.fabien.img_verso_3} />
      <div className='flex flex-col items-start w-full pl-3 mt-4'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.responsability_title}</h2>
        <ul className='font-card text-xl w-full pl-9'>
          <li>{config.team.fabien.responsability_1}</li>
          <li>{config.team.fabien.responsability_2}</li>
        </ul>
      </div>
    </div>

    <figure className={`from-[#FFBD59] to-[#D16023] ${figuresStyle} ${figuresAnimations}`}>
      <img className='w-[12rem] min-h-[13rem] max-h-[13rem] object-contain' src={config.team.fabien.portrait} alt={config.team.fabien.name} />
      <figcaption className='flex flex-col items-center'>
        <p className='text-xl my-6'>{config.team.fabien.name}</p>
        <p className='font-menu text-3xl text-center italic font-bold'>{config.team.fabien.job}</p>
      </figcaption>
    </figure>

  </div>

const skillsThibautStyle = 'flex flex-row items-center'
const imagesThibautStyle = 'h-6 w-6 mr-2'

const Thibaut = () =>
  <div className={`${cardStyle}`} tabIndex={5}>

    <div className={`${figuresStyleVerso} from-purple-dark to-[#2E0237]`}>
      <h1 className='font-title text-2xl text-center self-center mt-2'>{config.team.thibaut.job_verso}</h1>
      <div className='flex flex-col items-start w-full pl-3 mt-11'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.skill_title}</h2>
        <ul className='font-card text-xl pl-3'>
          <li className={skillsThibautStyle}><img className={imagesThibautStyle} src={config.team.thibaut.img_verso_1} />{config.team.thibaut.skill_1}</li>
          <li className={skillsThibautStyle}><img className={imagesThibautStyle} src={config.team.thibaut.img_verso_2} />{config.team.thibaut.skill_2}</li>
          <li className={skillsThibautStyle}><img className={imagesThibautStyle} src={config.team.thibaut.img_verso_3} />{config.team.thibaut.skill_3}</li>
          <li className={skillsThibautStyle}><img className={imagesThibautStyle} src={config.team.thibaut.img_verso_4} />{config.team.thibaut.skill_4}</li>
          <li className={skillsThibautStyle}><img className={imagesThibautStyle} src={config.team.thibaut.img_verso_5} />{config.team.thibaut.skill_5}</li>
        </ul>
      </div>
      <div className='flex flex-col items-start w-full pl-3 mt-3'>
        <h2 className='font-menu text-2xl font-bold'>{config.team.responsability_title}</h2>
        <div className='flex flex-row'>
          <div className='flex flex-col w-fit ml-3 items-center'>
            <img className='max-h-9 min-w-7 mb-2' src={config.team.thibaut.img_verso_6} />
            <img className='max-h-10 min-w-10 mb-2' src={config.team.thibaut.img_verso_7} />
            <img className='h-9 w-4' src={config.team.thibaut.img_verso_8} />
            <img className='h-10 w-8' src={config.team.thibaut.img_verso_9} />
          </div>
          <ul className='font-card text-xl w-full pl-3'>
            <li>{config.team.thibaut.responsability_1}</li>
            <li className='mt-3'>{config.team.thibaut.responsability_2}</li>
            <li className='mt-3'>{config.team.thibaut.responsability_3}</li>
            <li className='mt-3'>{config.team.thibaut.responsability_4}</li>
          </ul>
        </div>
      </div>
    </div>

    <figure className={`from-purple-dark to-[#2E0237] ${figuresStyle} ${figuresAnimations}`}>
      <img className='w-[12rem] min-h-[13rem] max-h-[13rem] object-contain' src={config.team.thibaut.portrait} alt={config.team.thibaut.name} />
      <figcaption className='flex flex-col items-center'>
        <p className='text-xl my-6'>{config.team.thibaut.name}</p>
        <p className='font-menu text-3xl text-center italic font-bold'>{config.team.thibaut.job}</p>
      </figcaption>
    </figure>

  </div>