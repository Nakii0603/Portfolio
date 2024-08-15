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
  const JumpCv = () => {
    window.open(
      "https://www.figma.com/design/jtmZ4zYEZ8Kn0ZnOxm4laF/Untitled?node-id=0-1&t=WZaujNPdF2LoLj1J-0"
    );
  };

  return (
    <header className="w-100vw">
      <div className="flex justify-between w-[100%] fixed p-4 border-box  ">
        <h1
          className={`roboto font-medium text-[24px] all-1000 ${
            isDarkMode ? "text-white" : ""
          } text-[28px]`}
        >
          Nakii
        </h1>
        <div className="flex gap-10 max-sm:gap-[10px] max-md:gap-5 items-center">
          <p
            className={`hover-underline-animation cursor-pointer all-1000 ${
              isDarkMode ? "text-white" : ""
            }`}
            onClick={() => scrollToSection("about")}
          >
            About
          </p>
          <p
            className={`hover-underline-animation cursor-pointer all-1000 ${
              isDarkMode ? "text-white" : ""
            }`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </p>
          <p
            className={`hover-underline-animation cursor-pointer all-1000 ${
              isDarkMode ? "text-white" : ""
            }`}
            onClick={() => scrollToSection("project")}
          >
            Projects
          </p>
          <p
            className={`hover-underline-animation cursor-pointer all-1000 ${
              isDarkMode ? "text-white" : ""
            }`}
            onClick={JumpCv}
          >
            CV
          </p>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
