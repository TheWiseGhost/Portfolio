"use client";
import { motion, useInView } from "framer-motion";
import React from "react";
import StaggeredFade from "../global/StaggeredFade";
import Navbar from "../global/Navbar";

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="min-h-screen font-gm flex flex-col text-center pt-4 pb-10">
      <Navbar />
      <motion.h2
        ref={ref}
        initial={{ filter: "blur(10px)", opacity: 0.5 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 2.2 }}
        className="text-[10rem] text-[#000000] leading-none pt-12"
      >
        ADITYA
      </motion.h2>
      <StaggeredFade
        text="Developer and Visionary"
        className="font-gm text-gray-700 uppercase"
      />
      <motion.h2
        ref={ref}
        initial={{ filter: "blur(10px)", opacity: 0.5 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 2.2 }}
        className="text-[10rem] text-[#000000] leading-none"
      >
        BYJU
      </motion.h2>
    </div>
  );
};

export default Hero;
