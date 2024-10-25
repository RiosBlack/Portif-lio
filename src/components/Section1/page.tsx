import React from 'react'
import BackgroundVideo from './backgroundVideo'
import Image from 'next/image'
import SocialMedia from './socialMedia'
import NameMotion from './nameMotion'
import LinguagensIcons from './linguagensIcons'

type Props = {}

export default function Section1({ }: Props) {
  return (
    <div className='w-full h-screen'>
      <header>
        <h1 className='absolute z-10 m-4 cursor-pointer text-lg bg-white font-extrabold hover:bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent'>menu</h1>
        <Image
          alt='Logo'
          src={'/logo.svg'}
          width={79}
          height={81}
          className='absolute z-10 left-[48%] m-2'
        />
        <SocialMedia />
        <NameMotion />
        <LinguagensIcons />
      </header>
      <BackgroundVideo />
    </div>
  )
}