"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = () => {
  const content = [
    {
      title: "Captain + Champion",
      description: (
        <ul className="list-disc space-y-2">
          <li className="font-gm text-base text-neutral-800">
            Regional Geometry Individual 1st Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            Regional Frosh/Soph Dou 1st Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            Regional Algebra1 Individual 3rd Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            State Geometry Team 9th Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            State Algebra1 Team 8th Place
          </li>
        </ul>
      ),
      content: (
        <div className="w-full h-80 flex justify-center items-center object-cover rounded-lg border-2 border-[#ec4e39]">
          <p className="uppercase font-gm text-4xl text-black text-center">
            Math Team
          </p>
        </div>
      ),
    },
    {
      title: "Member + Champion",
      description: (
        <ul className="list-disc space-y-2">
          <li className="font-gm text-base text-neutral-800">
            Regional Invitational Tourney 1st Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            Regional Invitational Tourney 2nd Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            Regional Invitational Tourney 2nd Place
          </li>
          <li className="font-gm underline hover:text-black text-base text-neutral-800">
            <a
              href="https://postings.speechwire.com/r-comp.php?compid=622920&seasonid=17"
              target="_blank"
            >
              List of all awards
            </a>
          </li>
        </ul>
      ),
      content: (
        <div className="w-full h-80 flex justify-center items-center object-cover rounded-lg border-2 border-[#ec4e39]">
          <p className="uppercase font-gm text-4xl text-black text-center">
            Speech
          </p>
        </div>
      ),
    },
    {
      title: "Exec + Champion",
      description: (
        <ul className="list-disc space-y-2">
          <li className="font-gm text-base text-neutral-800">
            State Web Design 1st Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            State Cybersecurity 3rd Place
          </li>
          <li className="font-gm text-base text-neutral-800">
            State Extemperaneous Speaking 3rd Place
          </li>
        </ul>
      ),
      content: (
        <div className="w-full h-80 flex justify-center items-center object-cover rounded-lg border-2 border-[#ec4e39]">
          <p className="uppercase font-gm text-4xl text-black text-center">
            Skills USA
          </p>
        </div>
      ),
    },
    {
      title: "Committee Chair",
      description: (
        <ul className="list-disc space-y-2">
          <li className="font-gm text-base text-neutral-800">
            Co-Founder of First Winter Wishes Bingo
          </li>
          <li className="font-gm text-base text-neutral-800">
            40+ Hours of Service + Volunteering
          </li>
          <li className="font-gm text-base text-neutral-800">
            Organizer of main donation drives
          </li>
        </ul>
      ),
      content: (
        <div className="w-full h-80 flex justify-center items-center object-cover rounded-lg border-2 border-[#ec4e39]">
          <p className="uppercase font-gm text-4xl text-black text-center">
            Student Council
          </p>
        </div>
      ),
    },
    {
      title: "Exec Board",
      description: (
        <ul className="list-disc space-y-2">
          <li className="font-gm text-base text-neutral-800">
            Manager of Logistics and Admission
          </li>
          <li className="font-gm text-base text-neutral-800">
            30+ Hours of Service and Volunteering
          </li>
          <li className="font-gm text-base text-neutral-800">
            Inducted Memeber of Mu Alpha Theta
          </li>
        </ul>
      ),
      content: (
        <div className="w-full h-80 flex justify-center items-center object-cover rounded-lg border-2 border-[#ec4e39]">
          <p className="uppercase font-gm text-4xl text-black text-center">
            Math Honors Society
          </p>
        </div>
      ),
    },
  ];

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < (Math.abs(latest - cardsBreakpoints[acc]) * 12) / 5) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="flex justify-center relative space-x-10 rounded-md pt-2"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 min-h-60 pt-10">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-bold font-afc text-black"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-neutral-900 max-w-sm mt-6"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="">
        {" "}
        {/* Adjust the max height */}
        <div className="hidden lg:block w-96 pt-20 rounded-md bg-none sticky top-20 overflow-hidden">
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
