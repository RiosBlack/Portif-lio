
import BackgroundVideo from './backgroundVideo'
import SocialMedia from './socialMedia'
import NameMotion from './nameMotion'
import LinguagensIcons from './linguagensIcons'
import LogoMotion from './logoMotion'
import Menu from './menu'
import ButtonCv from './buttonCv'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'

export default function Page() {

  return (
    <div className='w-full h-screen relative'>
      <header>
        <Menu />
        <LogoMotion />
        <SocialMedia />
      </header>
      <main>
        <NameMotion />
        <ButtonCv />
        <LinguagensIcons />
      </main>
      <BackgroundVideo />
    </div>
  )
}