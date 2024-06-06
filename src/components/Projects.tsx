import React from "react";
import { DarkModeType } from "./Types";

export default function Project({ isDarkMode }: DarkModeType) {
  return (
    <div className={`p-4 flex flex-col  ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <h2>Works</h2>
      <div className="flex justify-between ">
        <div className="bg-[purple] w-[400px] h-[350px] ">123</div>
        <div className="bg-[purple] w-[400px] h-[350px] ">123</div>
        <div className="bg-[purple] w-[400px] h-[350px] ">123</div>
      </div>
    </div>
  );
}
