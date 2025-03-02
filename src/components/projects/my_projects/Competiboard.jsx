import CircleButton from "@/components/global/CircleButton";
import StaggeredFade from "@/components/global/StaggeredFade";
import React from "react";

const Competiboard = () => {
  return (
    <div className="w-full bg-white h-full border-4 rounded-xl border-gray-300">
      {/* Big Title */}
      <div className="flex flex-row justify-between ">
        <img src="CompetiboardLogo.png" className="w-20 h-20 m-1" />
        <h1 className="text-8xl font-gs uppercase font-semibold tracking-widest text-center mb-4">
          Competiboard
        </h1>
        <div className="flex justify-center">
          <CircleButton
            text={"VISIT THIS PROJECT"}
            color={"#FF6C63"}
            url={"https://competiboard.com"}
          />
        </div>
      </div>

      <div className="flex flex-row px-8 font-gm items-center justify-center space-x-12 pt-4 pr-12">
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Started: </span>{" "}
          <StaggeredFade
            text="01/27/25"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Launched: </span>{" "}
          <StaggeredFade
            text="02/23/25"
            className="text-black font-gm text-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="pr-1 text-lg">Updated: </span>{" "}
          <StaggeredFade
            text="Recently"
            className="text-black font-gm text-lg"
          />
        </div>
      </div>

      <div className="flex flex-row px-4 overflow-hidden pt-8 pr-8">
        <div className="flex flex-row space-x-4 justify-center items-center w-full">
          <img className="size-12" src="nextjs.svg" />{" "}
          <img className="size-12" src="django.svg" />
          <img
            className="size-12"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png"
          />
          <img className="size-12" src="docker.avif" />
          <img
            className="size-12 rounded-full"
            src="https://pageflows.imgix.net/media/logos/vercel.jpg?auto=compress&ixlib=python-1.1.2&s=739fa680c29caaeb51fc715f22da687c"
          />
          <img className="size-12" src="mongodb.webp" />
          <img
            className="size-12"
            src="https://www.solodev.com/file/2e7ff4de-48b3-11ed-bb2e-0eaef3759f5f/stripe-icon.png"
          />
        </div>
      </div>

      <div className="flex flex-row w-full justify-center bg-white items-center space-x-20 pt-8">
        <button
          className="arrow_button"
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/Competiboard");
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
            window.open("https://competiboard.com");
          }}
        >
          <div className="text">
            <span>View Competiboard</span>
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
            window.open("https://github.com/TheWiseGhost/CompetiboardBackend");
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
          <p className="">Instant leaderboard from your data</p>
          <p className="">
            Made for anyone with user data - SaaS, personal use, or businesses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Competiboard;
