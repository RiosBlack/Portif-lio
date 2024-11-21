'use client'
import { TbWorldWww } from "react-icons/tb";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiTrip } from "react-icons/bi";
import { motion } from "framer-motion";

export default function ServicesIcons() {
  const style = 'flex flex-col justify-center items-center space-y-2'

  return (
    <div className="flex text-lg md:text-2xl lg:text-3xl px-2 md:px-32 lg:px-56 justify-between w-screen lg:w-full my-8">
      <div className={style}>
        <motion.div
          animate={{
            rotate: [0, 20, 20, 0, 360, 0, -20, -20, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 1, 1, 0, 0],
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2
          }}
        >
          <TbWorldWww
            className="text-azulClaro"
          />
        </motion.div>
        <h3
          className="text-roxo"
        >Sites</h3>
      </div>
      <div className={style}>
        <motion.div
          animate={{
            rotate: [0, 20, 20, 0, 360, 0, -20, -20, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 1, 1, 0, 0],
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1
          }}
        >
          <HiOutlineCpuChip
            className="text-azulClaro"
          />
        </motion.div>
        <h3
          className="text-roxo"
        >Sistemas</h3>
      </div>
      <div className={style}>
        <motion.div
          animate={{
            rotate: [0, 20, 20, 0, 360, 0, -20, -20, 0],
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
        >
          <RiShoppingCart2Line
            className="text-azulClaro"
          />
        </motion.div>
        <h3
          className="text-roxo"
        >Lojas Virtuais</h3>
      </div>
      <div className={style}>
        <motion.div
          animate={{
            rotate: [0, 20, 20, 0, 360, 0, -20, -20, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 1, 1, 0, 0],
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2.5
          }}
        >
          <BiTrip
            className="text-azulClaro"
          />
        </motion.div>
        <h3
          className="text-roxo"
        >Blogs</h3>
      </div>
      <div className={style}>
        <motion.div
          animate={{
            scale: [1, 1.3, 1, 1.3],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 1, 1, 0, 0],
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1.6
          }}
        >
          <FiMoreHorizontal
            className="text-azulClaro"
          />
        </motion.div>
      </div>
    </div>
  )
}