"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import React, { useState } from "react";
import Articles from "@/components/Articles";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <div className="duration-500 transition-all  max-w-[1400px] mx-auto">
      <header className={`p-4 flex justify-between  ${isDarkMode ? "bg-black" : "bg-[#9d7373]"}`}>
        <h1 className={`${isDarkMode ? "text-white" : ""} text-[28px]`}>Nakii</h1>
        <div className="flex gap-3 items-center">
          <p className={`${isDarkMode ? "text-white" : ""}`}>home</p>
          <p className={`${isDarkMode ? "text-white" : ""}`}>About</p>
          <p className={`${isDarkMode ? "text-white" : ""}`}>Project</p>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30} />
        </div>
      </header>
      <Articles isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
