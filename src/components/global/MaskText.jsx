"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../app/utils/useMousePosition";

const MaskText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="mask_main font-gm">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Please want to work with me. I'll do everything I can to make sure you
          won't regret it.
        </p>
      </motion.div>

      <div className="mask_body">
        <p>
          I hope you like what your seeing! Thank you for checking out my work
          and learning about me.
        </p>
      </div>
    </main>
  );
};

export default MaskText;
