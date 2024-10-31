"use client"
import { motion, } from "framer-motion";

export default function NameMotion() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{ ease: "backIn", duration: 2 }}
      className='absolute z-10 top-[36%] left-32 space-y-2'
    >
      <h2 className='text-3xl text-roxo'>Olá, Meu nome é</h2>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h1 className='text-5xl ml-16 bg-gradient-to-tr from-slate-50 to-gray-400 bg-clip-text text-transparent'>Douglas Rios</h1>
      </motion.div>
      <h2 className='text-3xl text-roxo'>Sou Desenvolvedor FullStack</h2>
    </motion.div>
  )
}