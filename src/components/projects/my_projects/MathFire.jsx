import CircleButton from "@/components/global/CircleButton";
import StaggeredFade from "@/components/global/StaggeredFade";
import React from "react";

const MathFire = () => {
  return (
    <div className="w-full bg-white border-4 rounded-xl border-solid border-gray-300 h-full">
      {/* Big Title */}
      <div className="flex flex-row justify-between ">
        <img src="MathFireLogo.png" className="w-24 h-20 m-1" />
        <div>
          <h1 className="text-8xl font-gs uppercase font-semibold tracking-widest text-center mb-4">
            MathFire
          </h1>
        </div>
        <div className="flex justify-center">
          <CircleButton
            text={"VISIT THIS PROJECT"}
            color={"#F4622D"}
            url={"https://mathfire.netlify.app"}
          />
        </div>
      </div>

      <div className="flex flex-row px-8 font-gm items-center justify-center space-x-12 pt-6 pr-12">
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Started: </span>{" "}
          <StaggeredFade
            text="12/19/23"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Launched: </span>{" "}
          <StaggeredFade
            text="03/26/24"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Updated: </span>{" "}
          <StaggeredFade
            text="05/28/24"
            className="text-black font-gm text-lg"
          />
        </div>
      </div>

      <div className="flex flex-row px-4 overflow-hidden pt-8 pr-4">
        <div className="flex flex-row space-x-4 justify-center items-center w-full">
          <img className="h-12" src="html_css.png" />
          <img
            className="h-12"
            src="https://cdn.prod.website-files.com/6449405754e757db07f25327/665642ccf15387c17b7ddee2_node.webp"
          />
          <img className="size-12" src="netlify.png" />
          <img className="size-12" src="mongodb.webp" />
        </div>
      </div>

      <div className="flex flex-row w-full justify-center bg-white items-center space-x-20 pt-8">
        <button
          className="arrow_button"
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/MathFire");
          }}
        >
          <div className="text">
            <span>View</span>
            <span>Frontend</span>
            <span>Code</span>
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

        <button
          className="arrow_button"
          onClick={() => {
            window.open("https://mathfire.netlify.app");
          }}
        >
          <div className="text">
            <span>Check out MathFire</span>
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

        <button
          className="arrow_button"
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/MathFireBackend");
          }}
        >
          <div className="text">
            <span>View</span>
            <span>Backend</span>
            <span>Code</span>
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

      <div className="flex flex-row px-8 overflow-hidden pt-12 pr-12">
        <div className="flex flex-col w-full space-y-4 text-2xl font-gm text-center">
          <p className="">
            Trainer and Competition Hosting Platform made for Math Team
          </p>
          <p className="">
            Alllowing students to properly train with relevant and advanced
            problems
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathFire;
