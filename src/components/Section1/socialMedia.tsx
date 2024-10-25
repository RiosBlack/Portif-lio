import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className='absolute z-10 right-0 m-4 flex flex-col justify-center items-center'>
      <div className='bg-slate-800 rounded-xl p-2 flex space-x-2'>
        <Link
          href={'/'}
        >
          <FaInstagram className='w-6 h-6 text-roxo hover:animate-bounce' />
        </Link>
        <Link
          href={'/'}
        >
          <FaLinkedin className='w-6 h-6 text-roxo hover:animate-bounce' />
        </Link>
        <Link
          href={'/'}
        >
          <FaGithub className='w-6 h-6 text-roxo hover:animate-bounce' />
        </Link>
        <Link
          href={'/'}
        >
          <FaWhatsapp className='w-6 h-6 text-roxo hover:animate-bounce' />
        </Link>
      </div>
      <h2>Redes sociais</h2>
    </div>
  )
}