'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPortifolio } from '@/service/notion'
import { PortfolioItem } from "@/types/notion";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar hover
  const style = 'text-1xl text-slate-600 font-semibold';
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
        {data.map((item) => <p key={item.Index}>{item.Index}</p>)}
      </motion.div>

      <motion.div
        className="text-3xl bg-gradient-to-tr from-slate-50 to-gray-400 bg-clip-text text-transparent font-semibold"
        animate={{
          x: isHovered ? 100 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {data.map((item) => <p key={item.Index}>{item.Projeto}</p>)}
      </motion.div>

      <motion.div
        className={style}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {data.map((item) => <p key={item.Index}>{item.DescricaoBreve}</p>)}
      </motion.div>

      <motion.div
        className={style}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {data.map((item) => <p key={item.Index}>{item.Tech1}</p>)}
        {data.map((item) => <p key={item.Index}>{item.Tech2}</p>)}
        {data.map((item) => <p key={item.Index}>{item.Tech3}</p>)}
        {data.map((item) => <p key={item.Index}>{item.Tech4}</p>)}
        {data.map((item) => <p key={item.Index}>{item.Tech5}</p>)}
        {data.map((item) => <p key={item.Index}>{item.Tech6}</p>)}
      </motion.div>

      <motion.div
        className="w-14 h-14 z-30 mr-6 bg-gradient-to-tr from-slate-50 to-gray-400 rounded-full flex justify-center items-center text-roxo font-bold cursor-pointer"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
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
        {data.map((item) =>
          item.Miniatura && (
            <Image
              key={item.Index}
              alt="Foto"
              src={item.Miniatura}
              width={180}
              height={180}
            />
          )
        )}
      </motion.div>
    </div>
  );
}
