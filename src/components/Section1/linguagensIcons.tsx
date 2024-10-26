"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function LinguagensIcons({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{ ease: "backIn", duration: 2 }}
      className='absolute z-10 w-96 h-96 top-[25%] right-[12%]'>
      <Image
        alt='Linhas'
        src={'/linhas.svg'}
        fill
        className='absolute z-10'
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1, 1.2, 1.2, 1],
          rotate: [0, 0, 20, 20, 0, 0, -20, -20, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1.0, 2],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 3
        }}
        className='absolute z-20 left-40 top-40 cursor-pointer'
      >
        <Image
          alt='AwsIco'
          src={'/IconAws.svg'}
          width={50}
          height={50}
        />
      </motion.div>
      <motion.div
        animate={{
          rotate: [0, 360, 360, 360, 0, -20, 0, 0, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 1, 1, 0, 0],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 3
        }}
        className='absolute z-10 left-20 top-5 cursor-pointer'
      >
        <Image
          alt='DockerIco'
          src={'/IconDocker.svg'}
          width={50}
          height={50}
        />
      </motion.div>
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2, 1, 1, 1.2, 1.2, 1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 1, 1, 0, 0],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 3
        }}
        className='absolute z-10 top-72 left-14 cursor-pointer'
      >
        <Image
          alt='GitHubIco'
          src={'/IconGitHub.svg'}
          width={50}
          height={50}
        />
      </motion.div>
      <Image
        alt='JavaIco'
        src={'/IconJava.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-52 top-20'
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1, 1.2, 1.2, 1],
          rotate: [0, 0, 20, 20, 0, 0, -20, -20, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1.0, 2],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 3.2
        }}
        className='absolute z-10 left-80 cursor-pointer'
      >
        <Image
          alt='JavaScriptIco'
          src={'/IconJavaScript.svg'}
          width={50}
          height={50}
        />
      </motion.div>
      <Image
        alt='NextJsIco'
        src={'/IconNextJs.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-60 bottom-28'
      />
      <Image
        alt='ReacJsIco'
        src={'/IconReacjs.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-20 bottom-52'
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1, 1.2, 1.2, 1],
          rotate: [0, 0, 20, 20, 0, 0, -20, -20, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1.0, 2],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 3.5
        }}
        className='absolute z-10 right-3 bottom-14 cursor-pointer'
      >
        <Image
          alt='TsIco'
          src={'/IconTs.svg'}
          width={50}
          height={50}
        />
      </motion.div>
    </motion.div>
  )
}