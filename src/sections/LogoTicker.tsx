"use client";

import govbr from "@/assets/images/client-logos/govbr.svg";
import lacava from "@/assets/images/client-logos/lacava.svg";
import motormac from "@/assets/images/client-logos/motormac.svg";
import starh from "@/assets/images/client-logos/starh.svg";
import startceo from "@/assets/images/client-logos/startceo.svg";
import stratega from "@/assets/images/client-logos/stratega.svg";
import tiozequinha from "@/assets/images/client-logos/tiozequinha.svg";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const logos = [
  { name: "govbr", image: govbr },
  { name: "stratega", image: stratega },
  { name: "starh", image: starh },
  { name: "lacava", image: lacava },
  { name: "motormac", image: motormac },
  { name: "tiozequinha", image: tiozequinha },
  { name: "startceo", image: startceo },
];

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center  text-xl">
          Alredy chosen br these market leaders
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <Image key={logo.name} src={logo.image} alt={logo.name} />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
