import { DarkModeType } from "./Types";

export const Skills = ({ isDarkMode }: DarkModeType) => {
  return (
    <div id="Skills" className=" px-4 py-[120px]">
      <p className="w-full text-white text-center text-main text-xl font-bold dark:text-[#D1D5DB] mt-4 mb-12">SKILLS</p>
      <p className="isDarkMode:text-[purple]">dfvdfv</p>
      <p className={`${isDarkMode ? "text-[purple]" : "text-black"}`}>dvfdvgbn</p>
    </div>
  );
};
