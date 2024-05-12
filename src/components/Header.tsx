import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type PropsType = {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
};
const Header = ({ isDarkMode, toggleDarkMode }: PropsType) => {
  return (
    <header
      className={`p-4 flex justify-between all-1000 ${isDarkMode ? "bg-[black]" : "bg-[white]"}`}
    >
      <h1 className={`${isDarkMode ? "text-white" : ""} text-[28px]`}>Nakii</h1>
      <div className="flex gap-10 items-center">
        <p className={`${isDarkMode ? "text-white" : ""}`}>home</p>
        <p className={`${isDarkMode ? "text-white" : ""}`}>About</p>
        <p className={`${isDarkMode ? "text-white" : ""}`}>Project</p>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30} />
      </div>
    </header>
  );
};

export default Header;
