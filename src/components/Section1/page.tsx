import SocialMedia from './socialMedia'
import NameMotion from './nameMotion'
import LinguagensIcons from './linguagensIcons'
import LogoMotion from './logoMotion'
import Menu from './menu'
import ButtonCv from './buttonCv'


export default function Page() {

  return (
    <div className='w-full h-screen relative' id='home'>
      <header className='flex justify-between w-screen'>
        <div className='flex flex-1 justify-start'>
          <Menu />
        </div>
        <div className='flex flex-1 justify-center mt-2'>
          <LogoMotion />
        </div>
        <div className='flex flex-1 justify-end'>
          <SocialMedia />
        </div>
      </header>
      <main>
        <NameMotion />
        <ButtonCv />
        <LinguagensIcons />
      </main>
    </div>
  )
}