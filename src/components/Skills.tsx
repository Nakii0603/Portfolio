import React from "react";
import { DarkModeType } from "./Types";
import { ExampleComponent } from "./Type";

export default function Skills({ isDarkMode }: DarkModeType) {
  return (
    <div
      className={`gap-[50px] w-[100vw] h-[100vh] flex justify-center all-1000 ${
        isDarkMode ? "bg-[black]" : "bg-[white]"
      }`}
    >
      <p className="text-white">Skills</p>
    </div>
  );
}
