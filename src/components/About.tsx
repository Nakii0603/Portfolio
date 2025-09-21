import { DarkModeType, LanguageType } from "../type/Types";
import { ExampleComponent } from "./Type";

type AboutProps = DarkModeType & {
  isMongolian: boolean;
};

export default function About({ isDarkMode, isMongolian }: AboutProps) {
  // Language content
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Natsagdorj",
      description:
        "Passionate IT professional with a drive for innovation and a dedication to helping companies succeed. Skilled at adapting to different situations, achieving goals, and collaborating with diverse teams.",
      innovation: "Innovation Focus",
      innovationDesc:
        "Always seeking new technologies and creative solutions to complex problems.",
      collaboration: "Team Collaboration",
      collaborationDesc:
        "Experienced in working with diverse teams and flexible leadership approaches.",
      achievement: "Goal Achievement",
      achievementDesc:
        "Proven track record of delivering results and meeting objectives in any setting.",
      viewWork: "View My Work",
      downloadCV: "Download CV",
    },
    mn: {
      greeting: "Сайн байна уу, би бол",
      name: "Нацагдорж",
      description:
        "Инновацид дуртай, компаниудын амжилтад хувь нэмэр оруулах хүсэл эрмэлзэлтэй IT мэргэжилтэн. Өөр өөр нөхцөл байдалд дасан зохицох, зорилгодоо хүрэх, олон янзын багтай хамтран ажиллах чадвартай.",
      innovation: "Инновацийн Чиглэл",
      innovationDesc:
        "Шинэ технологи болон нарийн төвөгтэй асуудлын бүтээлч шийдлийг хайж байдаг.",
      collaboration: "Багын Хамтын Ажиллагаа",
      collaborationDesc:
        "Олон янзын багтай ажиллах туршлагатай, уян хатан удирдлагын арга барилтай.",
      achievement: "Зорилгодоо Хүрэх",
      achievementDesc:
        "Аливаа нөхцөлд үр дүн гаргах, зорилгодоо хүрэх батлагдсан түүхтэй.",
      viewWork: "Миний Ажлыг Үзэх",
      downloadCV: "CV Татах",
    },
  };

  const currentContent = isMongolian ? content.mn : content.en;
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p
                className={`text-xl font-medium mt-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {currentContent.greeting}
              </p>
              <h1
                className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${
                  isDarkMode
                    ? "from-white via-purple-200 to-blue-200"
                    : "from-gray-900 via-purple-600 to-blue-600"
                } bg-clip-text text-transparent`}
                style={{ lineHeight: "1.2" }}
              >
                {currentContent.name}
              </h1>
            </div>

            {/* Type Animation */}
            <div className="text-3xl md:text-4xl min-h-[3rem] flex items-center justify-center">
              <ExampleComponent />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Primary Description */}
            <p
              className={`text-xl md:text-2xl leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {currentContent.description}
            </p>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/50 border-gray-200"
                } backdrop-blur-sm`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {currentContent.innovation}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {currentContent.innovationDesc}
                </p>
              </div>
              <div
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/50 border-gray-200"
                } backdrop-blur-sm`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {currentContent.collaboration}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {currentContent.collaborationDesc}
                </p>
              </div>
              <div
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/50 border-gray-200"
                } backdrop-blur-sm`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {currentContent.achievement}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {currentContent.achievementDesc}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("project")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                {currentContent.viewWork}
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Natsagdorj_CV.pdf";
                  link.click();
                }}
                className={`px-10 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                    : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {currentContent.downloadCV}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
