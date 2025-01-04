import CircleButton from "@/components/global/CircleButton";
import React from "react";

const NoteSlide = () => {
  return (
    <div className="w-full bg-white border-4 border-gray-400 h-full">
      <div className="triangle -left-0.5 -top-0.5"></div>
      {/* Big Title */}
      <div>
        <h1 className="text-7xl font-gs uppercase font-semibold tracking-widest text-center mb-4">
          NoteSlide
        </h1>
      </div>
      <div className="flex justify-center">
        <CircleButton
          text={"VISIT THIS PROJECT"}
          color={"#808080"}
          url={"https://note-slide.com"}
        />
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
