"use client";
import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "Como minha empresa pode dominar o topo das pesquisas?",
    answer:
      "com SEO estratégico para visibilidade duradoura. campanhas PPC que maximizam o seu investimento.",
  },
  {
    question: "?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Dúvidas? Nós temos{" "}
          <span className="text-diesel-500 font-curve">respostas</span>
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
