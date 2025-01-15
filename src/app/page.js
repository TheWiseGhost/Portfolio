"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import MainLanding from "@/components/landing/MainLanding";
import MainProjects from "@/components/projects/MainProjects";
import MainClubs from "@/components/clubs/MainClubs";
import MaskText from "@/components/global/MaskText";

export default function Home() {
  const container = useRef();
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
  }, []);

  return (
    <div ref={container}>
      <MainLanding />
      <MainProjects />
      <MainClubs />
      <MaskText />
    </div>
  );
}
