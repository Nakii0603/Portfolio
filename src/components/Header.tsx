import { DarkModeSwitch } from "react-toggle-dark-mode";

type PropsType = {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
};

const Header = ({ isDarkMode, toggleDarkMode }: PropsType) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`p-4 border-box flex fixed max-w-[1400px] w-[100vw] justify-between  ${
        isDarkMode ? "bg-[#00000000]" : "bg-[#ffffff00]"
      }`}
    >
      <h1 className={`roboto font-medium text-[24px] all-1000 ${isDarkMode ? "text-white" : ""} text-[28px]`}>Nakii</h1>
      <div className="flex gap-10 max-sm:gap-[10px] max-md:gap-5 items-center">
        <p
          className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          About
        </p>
        <p
          className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </p>
        <p
          className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}
          onClick={() => scrollToSection("project")}
        >
          Projects
        </p>
        <p
          className={`hover-underline-animation cursor-pointer all-1000 ${isDarkMode ? "text-white" : ""}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </p>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={30} />
      </div>
    </header>
  );
};

export default Header;
