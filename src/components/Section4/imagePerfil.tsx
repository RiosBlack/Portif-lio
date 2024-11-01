'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImagePerfil() {
  return (
    <motion.div
      className="relative rounded-full border-2 border-roxo w-36 h-36 overflow-hidden shadow shadow-roxo"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image
        alt="Perfil"
        src={'/perfil.png'}
        width={200}
        height={200}
      />
    </motion.div>
  )
}