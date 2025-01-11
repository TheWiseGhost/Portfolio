"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import TextAnim from "./TextAnim";
import { StickyScroll } from "./StickyScroll";

const MainClubs = () => {
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
    <main ref={container} className="relative min-h-screen pt-20">
      <TextAnim />
      <StickyScroll />
    </main>
  );
};

export default MainClubs;
