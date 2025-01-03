import { motion } from "framer-motion";

const MarqueeText = ({ text, className }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap space-x-20"
        animate={{
          x: ["100%", "-1000%"], // Moves both texts from right to left
        }}
        transition={{
          duration: 25, // Duration for one loop
          repeat: Infinity, // Repeat infinitely
          ease: "linear", // Constant speed
        }}
        style={{ willChange: "transform" }}
      >
        {/* First instance of the text */}
        <h1 className={className}>{text}</h1>
        {/* Duplicate of the text to create a seamless loop */}
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
        <h1 className={className}>{text}</h1>
      </motion.div>
    </div>
  );
};

export default MarqueeText;
