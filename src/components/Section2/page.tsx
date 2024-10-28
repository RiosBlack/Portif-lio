import React from 'react'
import NameService from './nameService'
import ServicesIcons from './servicesIcons'
import Projects from './projects'

type Props = {}

export default function Page({ }: Props) {
  return (
    <div
      className='bg-roxoEscuro'
    >
      <div className='border-y-2 border-gray-900'>
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
        <Projects />
      </div>
    </div>
  )
}