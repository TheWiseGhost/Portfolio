import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="float-down font-gm right-0 left-0 top-0 px-8 bg-[rgba(255, 255, 255, 0.98)]  backdrop-blur-[5.5px] border border-[rgb(255,255,255, 0.3)] w-1/3 mx-auto z-[100] flex items-center mt-4 py-8 justify-between rounded-full">
      <nav className="absolute left-[50%] top-[55%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-8 list-none shadow-none backdrop-blur-none">
          {["Clubs", "Projects", "Github"].map((text) => (
            <li key={text}>
              <a
                onClick={() => {
                  alert("Scroll down to see more!");
                }}
              >
                <span className="text_button">
                  <span className="span-mother">
                    {[...text].map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                  <span className="span-mother2">
                    {[...text].map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
