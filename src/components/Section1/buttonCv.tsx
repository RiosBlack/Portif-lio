'use client'
import { motion } from 'framer-motion'
import { NeonGradientCard } from '../ui/neon-gradient-card'
import Link from 'next/link'

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
      className='absolute z-10 bottom-[37%] left-32 space-y-2'
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >

        <NeonGradientCard >
          <Link
            className="cursor-pointer z-10 whitespace-pre-wrap bg-gradient-to-br from-slate-100 from-35% to-roxo bg-clip-text text-center font-bold leading-none text-lg tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
            href={'https://1drv.ms/b/c/bdc9ce7c608f0760/EWAHj2B8zskggL32VAQAAAABVq4a6P5YXKBazeS-y8ohMA?e=7FqLVq'}
          >
            Baixar Curriculum
          </Link>
        </NeonGradientCard>
      </motion.div>
    </motion.div>
  )
}