'use client'
import { motion } from 'framer-motion'

export default function ButtonCv() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 200
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{ ease: "backIn", duration: 2 }}
      className='absolute z-10 bottom-[40%] left-32 space-y-2'
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <button
          className='border-2 border-roxo bg-roxo px-4 py-2 rounded-xl text-white bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent hover:text-roxo'
        >
          Baixar Curriculum
        </button>
      </motion.div>
    </motion.div>
  )
}