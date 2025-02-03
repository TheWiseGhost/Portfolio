"use client";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import NoteSlide from "./my_projects/NoteSlide";
import DropFast from "./my_projects/DropFast";
import MathFire from "./my_projects/MathFire";
import SaleSight from "./my_projects/SaleSight";
import RiceML from "./my_projects/RiceML";
import CalculusAI from "./my_projects/CalculusAI";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  const projects = [
    <NoteSlide />,
    <DropFast />,
    <MathFire />,
    <SaleSight />,
    <RiceML />,
    <CalculusAI />,
  ];

  return (
    <>
      <main className="relative pt-10 pb-20">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            >
              {project}
            </Card>
          );
        })}
      </main>
    </>
  );
};

export default Projects;
