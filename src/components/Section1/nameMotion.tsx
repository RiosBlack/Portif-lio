import React from 'react'

type Props = {}

export default function NameMotion({ }: Props) {
  return (
    <div className='absolute z-10 top-[36%] left-32 space-y-2'>
      <h2 className='text-3xl text-roxo'>Olá, Meu nome é</h2>
      <h1 className='text-5xl ml-16 '>Douglas Rios</h1>
      <h2 className='text-3xl text-roxo'>Sou Desenvolvedor FullStack</h2>
    </div>
  )
}