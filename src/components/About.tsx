import React from "react";
import { DarkModeType } from "./Types";

export default function About({ isDarkMode }: DarkModeType) {
  return (
    <div className="">
      <div className={`p-4 gap-[50px] flex justify-between all-1000 ${isDarkMode ? "bg-[black]" : "bg-[white]"}`}>
        <div className="w-[65%]">
          <h2 className={`text-[24px] ${isDarkMode ? "text-white" : ""} `}>About</h2>
          <p className={`text-[18px] ${isDarkMode ? "text-white" : ""} `}>
            Passionate IT professional with a drive for innovation and a dedication to helping companies succeed.
            Skilled at adapting to different situations, achieving goals, and collaborating with diverse teams. Flexible
            leadership style suited for working towards common objectives in any setting.
          </p>
        </div>
        <div className="w-[40%]">
          <h2 className={`text-[24px] ${isDarkMode ? "text-white" : ""} `}>Tech stack</h2>
          <p className={` font-bold text-[18px] ${isDarkMode ? "text-white" : ""} `}>
            TypeScript, JavaScript,
            <br />
            React, HTML, CSS, Material UI, Tailwind, daisyUI
            <br />
            Node.js, Express.js, Graphql
            <br />
            MongoDB, PostGreSQL
            <br />
            Jest, Cypress
          </p>
        </div>
      </div>
    </div>
  );
}
