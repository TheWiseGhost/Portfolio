"use client";
import React from "react";
import MarqueeText from "../global/MarqueeText";

const TextAnim = () => {
  return (
    <div className="bg-none h-40 w-full flex justify-center items-center">
      <MarqueeText
        text="Work and Projects"
        className="text-[8rem] text-black font-gs uppercase font-semibold tracking-widest"
      />
    </div>
  );
};

export default TextAnim;
