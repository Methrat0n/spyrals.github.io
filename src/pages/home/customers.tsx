import React from 'react'
import SocialNetwork from '../../ui/atoms/SocialNetwork'


export default () =>
  <section className="relative flex flex-col items-center pt-24 pb-44 overflow-hidden" id='clients'>
    <h1 className="text-6xl pt-12 font-title font-semibold">NOS CLIENTS</h1>
    <p className="text-2xl my-14">Clique sur le logo et découvre l'app' !</p>
    <div className="flex flex-row">
      <CustomersList />
      <CustomersList />
      <CustomersList />
    </div>
    <div className={`-left-10 bg-purple-spyrals -rotate-[4deg] -z-10 ${background}`}/>
    <div className={`-right-10 bg-purple-darkest rotate-[4deg] -z-20 ${background}`}/>
  </section>

const background = "absolute rounded-2xl w-[85rem] h-[30rem]"

const classNameLogo = "w-fit flex flex-row justify-around h-28 items-center"

const CustomersList = () =>
<div className="flex flex-row overflow-hidden justify-around w-screen animate-slide-track">
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
  </div>
