'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";

export default function Menu() {
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
  }

  const liColor = {
    className: 'bg-white hover:bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent'
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 2.0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <h1
        className='absolute z-10 m-4 cursor-pointer text-lg bg-white font-extrabold hover:bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent'
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        menu
      </h1>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className='bg-roxo/60 backdrop-blur-md absolute w-1/3 h-screen z-20 rounded-2xl'
      >
        <motion.div
          whileHover={{ rotate: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className='absolute w-full p-4 flex justify-end cursor-pointer'
          onClick={() => setIsOpen(isOpen => !isOpen)}
        >
          <AiOutlineClose
            className='text-white font-bold w-8 h-8'
          />
        </motion.div>
        <ul className='flex flex-col justify-center items-center text-8xl font-bold space-y-8 text-white h-full'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <li
              className={liColor.className}
            >
              Home
            </li>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <li
              className={liColor.className}
            >
              Sobre
            </li>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <li
              className={liColor.className}
            >
              Portifólio
            </li>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <li
              className={liColor.className}
            >
              Contato
            </li>
          </motion.div>
        </ul>
      </motion.nav>
    </motion.div>
  )
}