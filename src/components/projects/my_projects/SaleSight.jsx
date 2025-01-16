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

      <div className="flex flex-row px-4 overflow-hidden pt-8 pr-4">
        <div className="flex flex-row space-x-4 justify-center items-center w-full">
          <img
            className="size-12"
            src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"
          />
          <img className="size-12" src="django.svg" />
          <img
            className="size-12"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png"
          />
          <img className="size-12" src="netlify.png" />
          <img className="size-12" src="mongodb.webp" />
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
            window.open("https://github.com/TheWiseGhost/SaleSightFrontend");
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
            window.open("https://salesight.netlify.app");
          }}
        >
          <div className="text">
            <span>Check out SaleSight</span>
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
            window.open("https://github.com/TheWiseGhost/SaleSight");
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

      {/* Paragraph */}
      <div className="flex flex-row px-8 overflow-hidden pt-12 pr-12">
        <div className="flex flex-col w-full space-y-4 text-2xl font-gm text-center">
          <p className="">
            This project has been discontinued due to poor performance
          </p>
          <p className="">You can still check out the code and website</p>
        </div>
      </div>
    </div>
  );
};

export default SaleSight;
