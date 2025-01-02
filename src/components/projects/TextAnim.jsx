import React from "react";
import StaggeredFade from "../global/StaggeredFade";

const TextAnim = () => {
  return (
    <div className="bg-none h-40 w-full flex justify-center items-center">
      <StaggeredFade
        text="Want to see my Work?"
        className="text-[6rem] text-black font-gs uppercase font-semibold tracking-widest"
      />
    </div>
  );
};

export default TextAnim;
