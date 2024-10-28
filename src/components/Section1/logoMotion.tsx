'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function LogoMotion({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Image
        alt='Logo'
        src={'/logo.svg'}
        width={69}
        height={70}
        className='absolute z-10 right-[47%] m-2'
      />
    </motion.div>
  )
}