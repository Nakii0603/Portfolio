import React from "react";
import { DarkModeType } from "./Types";
import { ExampleComponent } from "./Type";
import MernImg from "../../public/img";

export default function About({ isDarkMode }: DarkModeType) {
  return (
    <div
      className={`gap-[50px] w-[100vw] h-[100vh] flex justify-center all-1000 ${
        isDarkMode ? "bg-[black]" : "bg-[white]"
      }`}
    >
      <div className="mt-[250px] ">
        <div className="flex justify-between w-[1400px] ">
          <div className="w-[450px] ">
            <p className={`all-1000 text-[40px]  ${isDarkMode ? "text-white" : ""}`}> Hi, I am Natsagdorj</p>
            <ExampleComponent />
            <p className={`all-1000 text-[20px]  ${isDarkMode ? "text-[grey]" : ""}`}>
              Passionate IT professional with a drive for innovation and a dedication to helping companies succeed.
              Skilled at adapting to different situations, achieving goals, and collaborating with diverse teams.
              Possesses a flexible leadership style suited for working towards common objectives in any setting.
            </p>
          </div>
          <MernImg />
        </div>
      </div>
    </div>
  );
}
