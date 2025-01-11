import React from "react";
import MarqueeText from "../global/MarqueeText";

const TextAnim = () => {
  return (
    <MarqueeText
      text={"Clubs and Activities"}
      className={
        "text-[8rem] text-black font-gs uppercase font-semibold tracking-widest"
      }
      direction={"right"}
    />
  );
};

export default TextAnim;
