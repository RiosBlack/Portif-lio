'use client'
import { useRef } from 'react'
import NameService from './nameService'
import ServicesIcons from './servicesIcons'
import Projects from './projects'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Page() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      className='bg-roxoEscuro'
    >
      <motion.div
        ref={targetRef}
        style={{ opacity }}
      >
        <div
          className='border-y-2 border-gray-900'
        >
          <NameService />
          <ServicesIcons />
          <h2
            className='text-roxo text-3xl px-40 text-center pb-7'
          >
            Ajudando pessoas a entrar na era digital, sempre aliando design, código, movimento
            e interação, entregando sempre o meu melhor.</h2>
        </div>
        <div>
          <h2
            className='text-roxo text-3xl px-40 my-7'
          >
            Portifólio:
          </h2>
        </div>
      </motion.div>
      <Projects />
    </div>
  )
}