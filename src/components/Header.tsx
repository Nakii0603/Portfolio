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
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
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
              Skills
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
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={downloadCv}
              className={`hidden sm:block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
              }`}
            >
              Download CV
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
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200/20">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Projects
            </button>
            <button
              onClick={downloadCv}
              className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              }`}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
