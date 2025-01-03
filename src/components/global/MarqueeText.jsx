import { motion } from "framer-motion";

const MarqueeText = ({ text, className, direction = "left" }) => {
  // Determine the direction of the animation based on the 'direction' prop
  const animationDirection =
    direction === "right" ? ["100%", "-500%"] : ["-500%", "100%"];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap space-x-52"
        animate={{
          x: animationDirection, // Moves text based on direction
        }}
        transition={{
          duration: 25, // Duration for one loop
          repeat: Infinity, // Repeat infinitely
          ease: "linear", // Constant speed
        }}
        style={{ willChange: "transform" }}
      >
        {/* Repeat the text to create a seamless loop */}
        {Array.from({ length: 16 }).map((_, index) => (
          <h1 key={index} className={className}>
            {text}
          </h1>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
