import CircleButton from "@/components/global/CircleButton";
import React from "react";

const NoteSlide = () => {
  return (
    <div className="w-full bg-white h-full border-4 rounded-3xl border-gray-300">
      {/* Big Title */}
      <div className="flex flex-row justify-between ">
        <img src="NoteSlideLogo.png" className="w-20 h-20 m-1" />
        <h1 className="text-8xl font-gs uppercase font-semibold tracking-widest text-center mb-4">
          NoteSlide
        </h1>
        <div className="flex justify-center">
          <CircleButton
            text={"VISIT THIS PROJECT"}
            color={"#FFDB59"}
            url={"https://note-slide.com"}
          />
        </div>
      </div>

      {/* Paragraph */}
      <p className="text-base text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default NoteSlide;
