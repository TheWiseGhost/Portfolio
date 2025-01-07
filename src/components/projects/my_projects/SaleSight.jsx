import CircleButton from "@/components/global/CircleButton";
import StaggeredFade from "@/components/global/StaggeredFade";
import React from "react";

const SaleSight = () => {
  return (
    <div className="w-full bg-white border-4 rounded-xl border-solid border-gray-300 h-full">
      {/* Big Title */}
      <div className="flex flex-row justify-between ">
        <img src="SaleSightLogo.png" className="h-20 mt-2 m-1" />
        <div>
          <h1 className="text-8xl font-gs uppercase font-semibold tracking-widest text-center mb-4">
            SaleSight
          </h1>
        </div>
        <div className="flex justify-center">
          <CircleButton
            text={"VISIT THIS PROJECT"}
            color={"#8BFF63"}
            url={"https://salesight.netlify.app/landing"}
          />
        </div>
      </div>

      {/* Paragraph */}
      <div className="flex flex-row px-8 h-[310px] overflow-hidden bg-gray-100">
        <div className="flex flex-col w-1/4">
          <p className="text-sm text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="flex flex-row px-8 font-gm items-center justify-center space-x-12 pt-6 pr-12">
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Started: </span>{" "}
          <StaggeredFade
            text="06/02/24"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Launched: </span>{" "}
          <StaggeredFade
            text="08/28/24"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Updated: </span>{" "}
          <StaggeredFade
            text="8/28/24"
            className="text-black font-gm text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SaleSight;
