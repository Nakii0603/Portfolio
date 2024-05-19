import React from "react";
import { DarkModeType } from "./Types";
import { ExampleComponent } from "./Type";

export default function About({ isDarkMode }: DarkModeType) {
  return (
    <div
      className={`gap-[50px] w-[100vw] h-[100vh] flex justify-center all-1000 ${
        isDarkMode ? "bg-[black]" : "bg-[white]"
      }`}
    >
      <div className="mt-[250px] ">
        <div className="flex">
          <ExampleComponent />
          <p className={` all-1000 ${isDarkMode ? "bg-[black] text-white" : "bg-[white]"}`}>img</p>
        </div>
      </div>
    </div>
  );
}

// Passionate IT professional with a drive for innovation and a dedication to helping companies succeed.
//             Skilled at adapting to different situations, achieving goals, and collaborating with diverse teams. Flexible
//             leadership style suited for working towards common objectives in any setting.
