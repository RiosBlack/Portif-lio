'use client'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion'

export default function SocialMedia() {
  return (
    <motion.div
      className='absolute z-10 right-0 m-4 flex flex-col justify-center items-center'
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
            href={'/'}
          >
            <FaInstagram className='w-6 h-6 text-roxo' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'/'}
          >
            <FaLinkedin className='w-6 h-6 text-roxo' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'/'}
          >
            <FaGithub className='w-6 h-6 text-roxo' />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={'/'}
          >
            <FaWhatsapp className='w-6 h-6 text-roxo' />
          </Link>
        </motion.div>
      </div>
      <h2>Redes sociais</h2>
    </motion.div>
  )
}