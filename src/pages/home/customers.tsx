import React from 'react'
import SocialNetwork from '../../ui/atoms/SocialNetwork'


export default () =>
  <section className="flex flex-col items-center pt-24 mb-24" id='clients'>
    <h1 className="text-6xl pt-12">NOS CLIENTS</h1>
    <p className="text-2xl my-14">Clique sur le logo et découvre l'app' !</p>
    <CustomersList />
    <div className={`-left-10 bg-purple-spyrals -rotate-[4deg] -z-10 ${background}`}/>
    <div className={`-right-10 bg-purple-darkest rotate-[4deg] -z-20 ${background}`}/>
  </section>

const background = "absolute rounded-2xl w-[85rem] h-[30rem]"

const classNameLogo = "mx-20"

const CustomersList = () =>
  <div className="flex overflow-x-scroll w-screen">
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
    <SocialNetwork className={classNameLogo} href='https://google.com' logo='/images/google.png' />
  </div>
