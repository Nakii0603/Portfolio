import { DarkModeSwitch } from "react-toggle-dark-mode";
import { LanguageType } from "../type/Types";
import { useState } from "react";

type PropsType = {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
  isMongolian: boolean;
  toggleLanguage: () => void;
};

const Header = ({
  isDarkMode,
  toggleDarkMode,
  isMongolian,
  toggleLanguage,
}: PropsType) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Language content for header
  const headerContent = {
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      downloadCV: "Download CV",
    },
    mn: {
      about: "Миний тухай",
      skills: "Чадварууд",
      projects: "Төслүүд",
      downloadCV: "CV Татах",
    },
  };

  const currentHeaderContent = isMongolian
    ? headerContent.mn
    : headerContent.en;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Natsagdorj_CV.pdf";
    link.click();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800/50"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="absolute left-6">
            <h1
              className={`text-2xl font-bold bg-gradient-to-r ${
                isDarkMode
                  ? "from-white via-purple-200 to-blue-200"
                  : "from-gray-900 via-purple-600 to-blue-600"
              } bg-clip-text text-transparent`}
            >
              Nakii
            </h1>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {currentHeaderContent.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {currentHeaderContent.skills}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {currentHeaderContent.projects}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="absolute right-6 flex items-center space-x-4">
            <button
              onClick={downloadCv}
              className={`hidden sm:block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
              }`}
            >
              {currentHeaderContent.downloadCV}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {isMongolian ? "EN" : "МN"}
            </button>

            <div
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={24}
              />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                  } ${isDarkMode ? "bg-white" : "bg-gray-900"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  } ${isDarkMode ? "bg-white" : "bg-gray-900"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 mt-1 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  } ${isDarkMode ? "bg-white" : "bg-gray-900"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pt-4 border-t border-gray-200/20">
            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-2 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {currentHeaderContent.about}
              </button>
              <button
                onClick={() => {
                  scrollToSection("skills");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-2 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {currentHeaderContent.skills}
              </button>
              <button
                onClick={() => {
                  scrollToSection("project");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-2 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {currentHeaderContent.projects}
              </button>
              <button
                onClick={() => {
                  downloadCv();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-2 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                }`}
              >
                {currentHeaderContent.downloadCV}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
