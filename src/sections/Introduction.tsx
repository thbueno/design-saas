"use client";

import Tag from "@/components/Tag";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `em estratégia, design e tecnologia digital de alta performance. Se o seu negócio precisa de presença digital forte e resultados reais, a gente tem o mapa e as ferramentas para`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>missão</Tag>
          </div>

          <div className="text-4xl md:text-5xl lg:text-6xl text-center font-medium mt-10">
            <span>A nossa agência nasceu para transformar sonhos</span>{" "}
            <span className="text-stone-700/15">
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500",
                    wordIndex < currentWord && "text-stone-700"
                  )}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </span>
            <span className="block">
              fazer{" "}
              <span className="text-diesel-500 font-curve">acontecer</span>
            </span>
          </div>
        </div>
        <div className="h-[200vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
