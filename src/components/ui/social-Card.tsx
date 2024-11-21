'use client'
import Link from 'next/link'
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react';

interface Props {
  icon: string,
  link: string,
  delay: number
}

export default function SocialCard({ icon, link, delay }: Props) {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setIsInView(true);
        }, delay);
      }
    }, {
      threshold: 1.0,
    });
    const element = document.getElementById("typing-animation");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);


  useEffect(() => {
    if (isInView) {
      const typingEffect = setInterval(() => {
        controls.start('animate');
      }, 200);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [isInView, controls]);

  return (
    <div>
      <motion.div
        id="my-component"
        initial="initial"
        animate={controls}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href={link}
          >
            {icon == 'instagram' ? <FaInstagram className='w-10 h-10 text-azulClaro' /> : ''}
            {icon == 'linkedin' ? <FaLinkedin className='w-10 h-10 text-azulClaro' /> : ''}
            {icon == 'github' ? <FaGithub className='w-10 h-10 text-azulClaro' /> : ''}
            {icon == 'whatsapp' ? <FaWhatsapp className='w-10 h-10 text-azulClaro' /> : ''}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}