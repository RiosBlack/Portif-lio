"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from 'framer-motion';


interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  delay: number;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  delay
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
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

    observer.observe(document.getElementById("typing-animation")!);

    return () => {
      observer.unobserve(document.getElementById("typing-animation")!);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          setI(i + 1);
          controls.start('animate');
        } else {
          clearInterval(typingEffect);
        }
      }, duration);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [duration, i, isInView, controls]);

  return (
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
      <h1
        id="typing-animation"
        className={cn(
          "text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
          className,
        )}
      >
        {displayedText ? displayedText : text}
      </h1>
    </motion.div>
  );
}