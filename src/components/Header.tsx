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
        isDarkMode ? "bg-black backdrop-blur-md" : "bg-white backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
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
              className={`relative text-sm font-medium transition-all duration-300 md:hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 md:hover:text-white"
                  : "text-gray-600 md:hover:text-gray-900"
              }`}
            >
              {currentHeaderContent.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 md:hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`relative text-sm font-medium transition-all duration-300 md:hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 md:hover:text-white"
                  : "text-gray-600 md:hover:text-gray-900"
              }`}
            >
              {currentHeaderContent.skills}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 md:hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className={`relative text-sm font-medium transition-all duration-300 md:hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 md:hover:text-white"
                  : "text-gray-600 md:hover:text-gray-900"
              }`}
            >
              {currentHeaderContent.projects}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 md:hover:w-full"></span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 z-50">
            <button
              onClick={downloadCv}
              className={`hidden sm:block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform md:hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white md:hover:shadow-lg md:hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white md:hover:shadow-lg md:hover:shadow-purple-500/25"
              }`}
            >
              {currentHeaderContent.downloadCV}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 md:hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border border-purple-500/30 md:hover:from-purple-600/30 md:hover:to-blue-600/30"
                  : "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-300 md:hover:from-purple-200 md:hover:to-blue-200"
              }`}
            >
              {isMongolian ? "EN" : "МN"}
            </button>

            <div
              className={`p-2 rounded-full transition-all duration-300 md:hover:scale-110 ${
                isDarkMode ? "md:hover:bg-gray-800" : "md:hover:bg-gray-100"
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
              className={`md:hidden p-3 rounded-lg transition-all duration-300 relative z-50 ${
                isDarkMode
                  ? "text-gray-300 active:text-white active:bg-gray-800"
                  : "text-gray-600 active:text-gray-900 active:bg-gray-100"
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  // X Icon
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 relative z-30 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pt-4 mb-5 border-t border-gray-200/20">
            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 active:text-white active:bg-gray-800"
                    : "text-gray-600 active:text-gray-900 active:bg-gray-100"
                }`}
              >
                {currentHeaderContent.about}
              </button>
              <button
                onClick={() => {
                  scrollToSection("skills");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 active:text-white active:bg-gray-800"
                    : "text-gray-600 active:text-gray-900 active:bg-gray-100"
                }`}
              >
                {currentHeaderContent.skills}
              </button>
              <button
                onClick={() => {
                  scrollToSection("project");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 active:text-white active:bg-gray-800"
                    : "text-gray-600 active:text-gray-900 active:bg-gray-100"
                }`}
              >
                {currentHeaderContent.projects}
              </button>
              <button
                onClick={() => {
                  downloadCv();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-center py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 ${
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
