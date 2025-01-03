"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import TextAnim from "../projects/TextAnim";

const TextParallax = () => {
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
    <main ref={container} className="pt-8 flex flex-col space-y-6">
      <TextAnim
        text="Work and Projects"
        className="text-[8rem] text-black font-gs uppercase font-semibold tracking-widest"
        direction={"right"}
      />
      <TextAnim
        text="Made by Yours Truly"
        className="text-[8rem] text-black font-gs uppercase font-semibold tracking-widest"
        direction={"left"}
      />
      <TextAnim
        text="With hardwork and love"
        className="text-[8rem] text-black font-gs uppercase font-semibold tracking-widest"
        direction={"right"}
      />
    </main>
  );
};

export default TextParallax;
