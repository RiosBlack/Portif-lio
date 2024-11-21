'use client'
import { useRef } from 'react'
import NameService from './nameService'
import ServicesIcons from './servicesIcons'
import Projects from './projects'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { VelocityScroll } from './scrollVelocity'

export default function Page() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <div
      className='bg-roxoEscuro bg-opacity-70'
    >
      <motion.div
        ref={targetRef}
        style={{ opacity }}
      >
        <div
          className='border-y-2 border-gray-900 py-20'
        >
          <NameService />
          <ServicesIcons />
          <h2
            className='text-roxo text-xl md:text-2xl lg:text-3xl px-5 md:pX-20 lg:px-40 text-center py-7 w-screen lg:w-full'
          >
            Levando pessoas e ideias para o mundo digital com <span className='text-white'>criatividade</span> e <span className='text-white'>inovação</span>, integrando <span className='text-white'>design</span>, código, <span className='text-white'>animação</span> e interatividade para oferecer sempre o melhor resultado.
          </h2>
        </div>
        <div>
          <h2
            className='text-roxo text-lg md:text-2xl lg:text-3xl px-10 md:px-24 lg:px-40 mb-7 pt-20'
          >
            Portifólio:
          </h2>
        </div>
      </motion.div>
      <div className='mb-20'>
        <Projects />
      </div>
      <div className='w-screen overflow-hidden border-y-2 h-72 md:h-96 border-gray-900 py-20' id="habilidades">
        <h2
          className='text-roxo text-3xl pl-5 md:pl-24 lg:pl-40 mb-7'
        >
          Habilidades:
        </h2>
        <VelocityScroll
          text1='ReactJS - NextJS - JavaScript - Tailwind - UI/UX - Figma -'
          text2='Java - NodeJS - MySQL - PostgreSQL - Docker - AWS - Git - Linux -'
          default_velocity={5}
          className="text-center text-4xl font-bold tracking-[-0.02em] text-roxo opacity-45 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </div>
    </div>
  )
}