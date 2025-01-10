import CircleButton from "@/components/global/CircleButton";
import StaggeredFade from "@/components/global/StaggeredFade";
import React from "react";

const RiceML = () => {
  return (
    <div className="w-full bg-white border-4 rounded-xl border-gray-300 h-full">
      {/* Big Title */}
      <div className="flex flex-row justify-between ">
        <img src="MLLogo.png" className="h-20 m-2" />
        <div>
          <h1 className="text-8xl font-gs uppercase font-semibold tracking-widest text-center mb-4 pr-10">
            Rice_ML
          </h1>
        </div>
        <div className="flex justify-center">
          <CircleButton
            text={"VISIT THIS PROJECT"}
            color={"#808080"}
            url={"https://github.com/TheWiseGhost/Rice_ML"}
          />
        </div>
      </div>

      <div className="flex flex-row px-8 font-gm items-center justify-center space-x-12 pt-6 pr-12">
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Started: </span>{" "}
          <StaggeredFade
            text="01/01/24"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Launched: </span>{" "}
          <StaggeredFade
            text="01/18/24"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Updated: </span>{" "}
          <StaggeredFade
            text="01/22/24"
            className="text-black font-gm text-lg"
          />
        </div>
      </div>

      <div className="flex flex-row px-4 overflow-hidden pt-8 pr-6">
        <div className="flex flex-row space-x-4 justify-center items-center w-full">
          <img
            className="h-14 pt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
          />
          <img
            className="size-14"
            src="https://colab.research.google.com/img/colab_favicon_256px.png"
          />
          <img
            className="size-12"
            src="https://avatars.githubusercontent.com/u/15658638?s=280&v=4"
          />
        </div>
      </div>

      <div className="flex flex-row w-full justify-center bg-white items-center space-x-20 pt-8">
        <button
          className="arrow_button"
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/Rice_ML");
          }}
        >
          <div className="text">
            <span>See the</span>
            <span>Notebook</span>
          </div>
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>

      {/* Paragraph */}
      <div className="flex flex-row px-8 overflow-hidden pt-12 pr-8">
        <div className="flex flex-col w-full space-y-4 text-2xl font-gm text-center">
          <p className="">
            AI model trained to differentiate between 2 species of rice
          </p>
          <p className="">Starter ML project to test my skills</p>
        </div>
      </div>
    </div>
  );
};

export default RiceML;
