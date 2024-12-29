"use client";
import React from "react";
import { Screen } from "../global/Screen";
import { useScramble } from "use-scramble";

const Main = () => {
  const { started } = useScramble({
    text: "06/02/24",
  });

  return (
    <div className="min-h-screen flex flex-col py-10 px-16">
      {/* Top Row with Title and Dates */}
      <div className="flex flex-row justify-between items-center pb-6 pt-12">
        <h1 className="text-4xl font-bold">NoteSlide</h1>
        <div className="flex text-2xl space-x-16">
          <div className="flex flex-row space-x-2">
            <span>Started: </span>
            <p ref={started} />
          </div>
          <div className="flex flex-row space-x-2">
            <span>Laucnhed: </span>
            <span>08/31/2024</span>
          </div>
          <div className="flex flex-row space-x-2">
            <span>Updated: </span>
            <span>12/28/2024</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex space-x-8">
        {/* Left Column */}
        <div className="flex flex-col w-3/5">
          {/* Demo */}
          <div className="mb-4 w-full h-[360px] rounded-lg">
            <Screen />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/5 space-y-8 pt-6">
          {/* Gray Div */}
          <div className="rounded-lg h-80 bg-gray-200"></div>

          {/* Icon and Button Row */}
          <div className="flex items-center space-x-4">
            <i className="fas fa-heart text-red-500"></i>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Click Me
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 pt-20">
        <div className="bg-blue-200 p-4 rounded-lg flex-1">
          <h3 className="text-lg font-semibold">TechStack</h3>
          <p>Some information text here.</p>
        </div>
        <div className="bg-green-200 p-4 rounded-lg flex-1">
          <h3 className="text-lg font-semibold">Links</h3>
          <p>Some link text here.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
