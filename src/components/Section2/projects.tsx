'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar hover
  const style = 'text-2xl text-slate-600 font-semibold';

  return (
    <div
      className="relative mx-40 border-y-2 border-gray-900 py-7 flex justify-between items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`${style} ml-6`}
        animate={{
          x: isHovered ? 100 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <p>01</p>
      </motion.div>

      <motion.div
        className="text-3xl bg-gradient-to-tr from-slate-50 to-gray-400 bg-clip-text text-transparent font-semibold"
        animate={{
          x: isHovered ? 170 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <p>NOME DO TRABALHO</p>
      </motion.div>

      <motion.div
        className={style}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <p>TIPO DE SERVIÇO</p>
      </motion.div>

      <motion.div
        className={style}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <p>TIPO DE TECNOLOGIA</p>
      </motion.div>

      <motion.div
        className="w-14 h-14 z-30 mr-6 bg-gradient-to-tr from-slate-50 to-gray-400 rounded-full flex justify-center items-center text-roxo font-bold cursor-pointer"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Abrir
      </motion.div>

      <motion.div
        className="absolute right-0 z-20 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 0,
          x: isHovered ? -160 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          alt="Foto"
          src="/teste.jpg"
          width={180}
          height={180}
        />
      </motion.div>
    </div>
  );
}
