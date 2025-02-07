"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import MainLanding from "@/components/landing/MainLanding";
import MainProjects from "@/components/projects/MainProjects";
import MainClubs from "@/components/clubs/MainClubs";
import MaskText from "@/components/global/MaskText";
import MagnetRow from "@/components/global/MagnetRow";
import Footer from "@/components/global/Footer";

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
    <>
      <div className="hidden md:block" ref={container}>
        <MainLanding />
        <MainProjects />
        <MainClubs />
        <MaskText />
        <MagnetRow />
        <Footer />
      </div>
      <div className="h-screen flex md:hidden flex-col space-y-4 items-center justify-center text-center text-lg p-4 bg-white">
        <p className="text-black font-gs">
          Learn more about Aditya Byju on desktop{" "}
        </p>
        <p className="text-gray-800 font-gs text-sm">
          There's too much to fit on mobile!
        </p>
      </div>
    </>
  );
}
