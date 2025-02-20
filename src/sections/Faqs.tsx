"use client";
import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "Avaliação inicial:",
    answer:
      "com SEO estratégico para visibilidade duradoura. campanhas PPC que maximizam o seu investimento.",
  },
  {
    question: "Pesquisa e desenvolvimento de estratégia:",
    answer:
      "Discutimos suas metas, desafios e visão para entender suas necessidades.",
  },
  {
    question: "Planejamento e design:",
    answer:
      "Nossa equipe desenvolve um plano de projeto detalhado, incluindo cronogramas e entregas, seguido de modelos de design para sua análise.",
  },
  {
    question: "Execução:",
    answer:
      "Damos vida ao projeto por meio do desenvolvimento, incorporando o feedback ao longo do processo.",
  },
  {
    question: "Lançamento e suporte:",
    answer:
      "pós testes completos, lançamos o projeto e fornecemos suporte contínuo para garantir que tudo corra bem.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>valores</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          nossos <span className="text-diesel-500 font-curve">valores</span>
        </h2>
        <div className="flex flex-col gap-6 mt-12 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-stone-300/20 rounded-2xl border border-stone-300 p-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  setSelectedIndex(
                    selectedIndex === faqIndex ? null : faqIndex
                  );
                }}
              >
                <h3 className="font-medium pr-4">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-diesel-500 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 24 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-stone-500">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
