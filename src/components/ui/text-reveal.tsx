"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("absolute -top-3/4 z-0  overflow-hidden", className)}>
      <div
        className={
          "sticky top-0 mx-10 md:mx-28 lg:mx-auto flex max-w-sm md:max-w-3xl lg:max-w-4xl"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap pt-[700px] md:pt-[850px] lg:pt-[750px] text-6xl md:text-8xl lg:text-9xl font-bold text-justify leading-relaxed text-black/20"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-roxo"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
