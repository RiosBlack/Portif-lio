import React from 'react'
import BackgroundVideo from './backgroundVideo'
import SocialMedia from './socialMedia'
import NameMotion from './nameMotion'
import LinguagensIcons from './linguagensIcons'
import LogoMotion from './logoMotion'

export default function Section1() {
  return (
    <div className='w-full h-screen'>
      <header>
        <h1 className='absolute z-10 m-4 cursor-pointer text-lg bg-white font-extrabold hover:bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent'>menu</h1>
        <LogoMotion />
        <SocialMedia />
        <NameMotion />
        <LinguagensIcons />
      </header>
      <BackgroundVideo />
    </div>
  )
}