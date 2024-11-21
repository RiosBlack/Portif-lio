'use client'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion'

export default function SocialMedia() {
  return (
    <motion.div
      className='m-4 flex flex-col justify-center items-center'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 2.0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className='bg-slate-800 rounded-xl p-2 flex space-x-2'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'https://www.instagram.com/riosblack/'}
          >
            <FaInstagram className='w-3 h-3 md:w-6 md:h-6 text-roxo' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'https://linkedin.com/in/riosblack'}
          >
            <FaLinkedin className='w-3 h-3 md:w-6 md:h-6 text-roxo' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'https://github.com/RiosBlack'}
          >
            <FaGithub className='w-3 h-3 md:w-6 md:h-6 text-roxo' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'https://wa.me/5575981414537?text=Ol%C3%A1%20Douglas,%20voc%C3%AA%20pode%20me%20ajudar?'}
          >
            <FaWhatsapp className='w-3 h-3 md:w-6 md:h-6 text-roxo' />
          </Link>
        </motion.div>
      </div>
      <h2
        className='text-sm md:text-base text-roxo text-center'
      >
        Redes sociais
      </h2>
    </motion.div>
  )
}