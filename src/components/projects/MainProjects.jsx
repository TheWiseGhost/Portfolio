"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import TextAnim from "./TextAnim";
import Projects from "./Projects";
import ImgParallax from "./ImgParallax";

const MainProjects = () => {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className="relative my_grid">
      <Projects />
    </main>
  );
};

export default MainProjects;
