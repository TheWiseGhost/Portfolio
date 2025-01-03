"use client";
import { useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Card = ({ i, progress, range, targetScale, children }) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card bg-gray-200"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
