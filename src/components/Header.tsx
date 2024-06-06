import { DarkModeSwitch } from "react-toggle-dark-mode";

type PropsType = {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
};
const Header = ({ isDarkMode, toggleDarkMode }: PropsType) => {
  return (
    <header
      className={`p-4 border-box flex fixed max-w-[1400px] w-[100vw] justify-between  ${
        isDarkMode ? "bg-[black]" : "bg-[white]"
      }`}
    >
      <h1 className={`roboto font-medium text-[24px] all-1000 ${isDarkMode ? "text-white" : ""} text-[28px]`}>Nakii</h1>
      <div className="flex gap-10 max-sm:gap-[10px] max-md:gap-5   items-center">
        <p className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}>Home</p>
        <p className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}>About</p>
        <p className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}>Project</p>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30} />
      </div>
    </header>
  );
};

export default Header;
