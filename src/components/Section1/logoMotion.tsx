'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className='relative w-10 h-10 md:w-16 md:h-16'
    >
      <Image
        alt='Logo'
        src={'/Logo.svg'}
        fill
      />
    </motion.div>
  )
}