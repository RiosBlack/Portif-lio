'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortifolio } from '@/service/notion'
import { PortfolioItem } from "@/types/notion";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar hover
  const style = 'text-sm md:text-base lg:text-xl text-slate-600 font-semibold';
  const [data, setData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dados = await getPortifolio();
      return dados;
    };
    fetchData().then((data) => {
      setData(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div
      className="relative mx-0 md:mx-16 lg:mx-32 border-y-2 border-gray-900 flex flex-col overflow-hidden mb-7 w-screen md:w-10/12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id='portifolio'
    >
      {data.map((item) => (
        <div key={item.Index} className="flex justify-between items-center border-b-2 border-gray-900 py-7">
          <motion.div
            className={`${style} ml-2 md:ml-4 lg:ml-6`}
            animate={{
              x: isHovered ? 100 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p key={item.Index}>{item.Index}</p>
          </motion.div>

          <motion.div
            className="text-base md:text-lg lg:text-3xl bg-gradient-to-tr from-slate-50 to-gray-400 bg-clip-text text-transparent font-semibold"
            animate={{
              x: isHovered ? 100 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p key={item.Index}>{item.Projeto}</p>
          </motion.div>

          <motion.div
            className={style}
            animate={{
              scale: isHovered ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p key={item.Index}>{item.DescricaoBreve}</p>
          </motion.div>

          <motion.div
            className={style}
            animate={{
              scale: isHovered ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p key={item.Index}>{item.Tech1}</p>
            <p key={item.Index}>{item.Tech2}</p>
            <p key={item.Index}>{item.Tech3}</p>
            <p key={item.Index}>{item.Tech4}</p>
            <p key={item.Index}>{item.Tech5}</p>
            <p key={item.Index}>{item.Tech6}</p>
          </motion.div>

          <motion.div
            className="w-10 md:w-12 lg:w-14 h-5 md:h-10 lg:h-14 z-30 mr-6 bg-gradient-to-tr from-slate-50 to-gray-400 rounded-sm md:rounded-full flex justify-center items-center text-roxo font-bold cursor-pointer"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href={`/${item.Index}`}
              about="Abrir projeto"
              className="text-sm md:text-base lg:text-lg"
            >
              Abrir
            </a>
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
            {
              item.Miniatura && (
                <div className="w-44 h-36 relative">
                  <Image
                    key={item.Index}
                    alt="Foto"
                    src={item.Miniatura}
                    fill
                  />
                </div>
              )
            }
          </motion.div>
        </div>
      ))}
    </div>
  );
}
