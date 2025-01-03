"use client";
import React from "react";
import MarqueeText from "../global/MarqueeText";

const TextAnim = ({ text, className, direction }) => {
  return (
    <div className="bg-none h-40 w-full flex justify-center items-center">
      <MarqueeText text={text} className={className} direction={direction} />
    </div>
  );
};

export default TextAnim;
