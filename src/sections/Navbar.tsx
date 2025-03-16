"use client";

import logoImage from "@/assets/images/esthalo_logo.svg";
import Button from "@/components/Button";
import InstagramLogo from "@/components/InstagramLogo";
import LinkedInLogo from "@/components/LinkedInLogo";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "missão", href: "#missao" },
  { label: "serviços", href: "#servicos" },
  { label: "AI", href: "#ia" },
  { label: "Valores", href: "#valores" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-diesel-500/50 rounded-[27px] md:rounded-full bg-stone-200/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
              <div>
                <a href="#hero">
                  <Image
                    src={logoImage}
                    alt="LayersLogo"
                    className="h-9 w-auto md:h-auto pl-2 sm:py-0.5"
                  />
                </a>
              </div>
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-stone-500 hover:text-diesel-500 transition duration-300 ease-in-out"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4 text-diesel-600">
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
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition text-diesel-600",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
                {/* <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  WhatsApp
                </Button> */}
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Contato
                </Button>
              </div>
            </div>
            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a key={link.label} href={link.href} className="">
                        {link.label}
                      </a>
                    ))}
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInLogo className="h-8 hover:scale-110 transition-transform duration-500 ease-in-out" />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramLogo className="h-8 hover:scale-110 transition-transform duration-500 ease-in-out" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Same amount of space as the navbar wihtout the fixed */}
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
}
