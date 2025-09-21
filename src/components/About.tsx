import { DarkModeType } from "../type/Types";
import { ExampleComponent } from "./Type";

export default function About({ isDarkMode }: DarkModeType) {
  return (
    <div
      id="about"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-blue-500"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-purple-500"
          } blur-3xl`}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="space-y-2">
                <p
                  className={`text-lg font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Hello, I'm
                </p>
                <h1
                  className={`text-5xl lg:text-7xl font-bold bg-gradient-to-r ${
                    isDarkMode
                      ? "from-white via-purple-200 to-blue-200"
                      : "from-gray-900 via-purple-600 to-blue-600"
                  } bg-clip-text text-transparent leading-tight`}
                  style={{ lineHeight: "1.2" }}
                >
                  Natsagdorj
                </h1>
              </div>

              {/* Type Animation */}
              <div className="text-2xl lg:text-3xl">
                <ExampleComponent />
              </div>

              {/* Description */}
              <p
                className={`text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Passionate IT professional with a drive for innovation and a
                dedication to helping companies succeed. Skilled at adapting to
                different situations, achieving goals, and collaborating with
                diverse teams. Possesses a flexible leadership style suited for
                working towards common objectives in any setting.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button
                  onClick={() =>
                    document
                      .getElementById("project")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                  }`}
                >
                  View My Work
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv.pdf";
                    link.download = "Natsagdorj_CV.pdf";
                    link.click();
                  }}
                  className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode
                      ? "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                      : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className={`w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ${
                  isDarkMode ? "shadow-purple-500/20" : "shadow-gray-500/20"
                }`}
              >
                <div className="img w-full h-full bg-cover bg-center"></div>
              </div>
              {/* Floating elements */}
              <div
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${
                  isDarkMode ? "bg-purple-500" : "bg-blue-500"
                } opacity-80 animate-pulse`}
              ></div>
              <div
                className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-purple-500"
                } opacity-80 animate-pulse`}
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
