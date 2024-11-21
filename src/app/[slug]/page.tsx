'use client';
import PhotoSection from "./components/photoSection";
import { getPortifolioById } from '@/service/notion';
import { PortfolioItem } from "@/types/notion";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { MdArrowCircleLeft } from "react-icons/md";

export default function Page() {
  const [data, setData] = useState<PortfolioItem[]>([]);
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const dados = await getPortifolioById(slug as string);
        setData(dados);
        console.log(dados);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="w-screen">
      <Link className="fixed top-5 left-5 z-50 text-4xl text-roxo hover:text-azulClaro transition-colors hover:animate-pulse"
        href={'/'}
      >
        <MdArrowCircleLeft />
      </Link>
      <div className="h-72 relative overflow-hidden rounded-b-xl">
        {data.map((item) => <Image key={item.Index} src={item.Capa ?? ''} alt="Capa" fill style={{ objectFit: 'cover' }} className="z-10" />)}
        <div className="bg-gradient-to-t from-black to-transparent absolute z-20 bottom-0 h-14 w-full"></div>
        <div className="bg-gradient-to-b from-black to-transparent absolute z-20 -top-2 h-14 w-full"></div>
      </div>
      <div className="relative h-24 grid items-end z-20">
        {data.map((item) => <h1 key={item.Index} className="text-8xl text-roxo font-semibold absolute -top-8 ml-6">{item.Projeto}</h1>)}
        <div className="overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {data.map((item) =>
              <Link className="w-44 rounded-3xl bg-gradient-to-r from-gray-100 to-gray-300 ml-16 mb-4 text-lg text-azulClaro p-4"
                href={item.Link ?? ''}
                key={item.Index}
              >
                Acessar website
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      <div className="flex mt-10 bg-roxoEscuro bg-opacity-70 space-x-7">
        <div className="flex-1 pl-7">
          <h1 className="text-lg text-white">
            O projeto:
          </h1>
          {data.map((item) => <p key={item.Index} className="text-roxo text-justify">{item.Descricoes ?? ''}</p>)}
        </div>
        <div className="flex-1 pr-7">
          <h1 className="text-lg text-white">
            Tecnologias
          </h1>
          <ul>
            {data.map((item) => (<li key={item.Tech1} className="text-roxo text-justify flex items-center"><FaCircle className="w-2 h-2 text-roxo mr-2" />{item.Tech1 ?? '-----'}</li>))}
            {data.map((item) => <li key={item.Tech2} className="text-roxo text-justify flex items-center justify-center"><FaCircle className="w-2 h-2 text-roxo mr-2" />{item.Tech2 ?? '-----'}</li>)}
            {data.map((item) => <li key={item.Tech3} className="text-roxo text-justify flex items-center justify-end"><FaCircle className="w-2 h-2 text-roxo mr-2" />{item.Tech3 ?? '-----'}</li>)}
            {data.map((item) => <li key={item.Tech4} className="text-roxo text-justify flex items-center"><FaCircle className="w-2 h-2 text-roxo mr-2" />{item.Tech4 ?? '-----'}</li>)}
            {data.map((item) => <li key={item.Tech5} className="text-roxo text-justify flex items-center justify-center"><FaCircle className="w-2 h-2 text-roxo mr-2" />{item.Tech5 ?? '-----'}</li>)}
            {data.map((item) => <li key={item.Tech6} className="text-roxo text-justify flex items-center justify-end"><FaCircle className="w-2 h-2 text-roxo mr-2" />{item.Tech6 ?? '-----'}</li>)}
          </ul>
        </div>
      </div>
      <div className="bg-roxoEscuro bg-opacity-70 flex flex-col justify-center items-center space-y-12 my-7">
        <h1 className="text-lg text-white mt-5">
          Fotos do produto:
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative flex justify-center items-center w-80 h-96 overflow-hidden">
            {data.map((item) => <PhotoSection Link={item.Foto1 ?? ''} key={item.Foto1} />)}
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative flex justify-center items-center w-80 h-64 overflow-hidden">
            {data.map((item) => <PhotoSection Link={item.Foto2 ?? ''} key={item.Foto2} />)}
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative flex justify-center items-center w-80 h-64 overflow-hidden">
            {data.map((item) => <PhotoSection Link={item.Foto3 ?? ''} key={item.Foto3} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
