"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Projects from "./Projects";

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
    <main ref={container} className="relative rainbow_grid min-h-screen">
      <Projects />
    </main>
  );
};

export default MainProjects;
