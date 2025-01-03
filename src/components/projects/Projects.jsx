"use client";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import NoteSlide from "./my_projects/NoteSlide";

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

  const projects = [<NoteSlide />, <NoteSlide />, <NoteSlide />, <NoteSlide />];

  return (
    <>
      <main className="relative py-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
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
