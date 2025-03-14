"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const Screen = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Applying useSpring for smoother transitions
  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.5], [20, 0]), {
    stiffness: 300, // controls how fast it returns
    damping: 30, // controls the "bounce"
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], scaleDimensions()),
    {
      stiffness: 300,
      damping: 25,
    }
  );

  const translate = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), {
    stiffness: 300,
    damping: 25,
  });

  return (
    <div
      className="h-[15rem] md:h-[50rem] -mt-44 flex items-center justify-center relative px-2 md:px-4 pb-2 md:pb-0"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="w-full mx-auto h-[15rem] md:h-[26rem] border-2 border-[#6C6C6C] p-2 md:p-2 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-2">
        {children}
      </div>
    </motion.div>
  );
};
