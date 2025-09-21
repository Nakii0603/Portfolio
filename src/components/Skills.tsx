import { skills } from "@/data/constants";
import { DarkModeType } from "../type/Types";

type SkillsProps = DarkModeType & {
  isMongolian: boolean;
};

const Skills = ({ isDarkMode, isMongolian }: SkillsProps) => {
  // Language content
  const content = {
    en: {
      title: "Skills & Technologies",
      subtitle: "Technologies and tools I work with to bring ideas to life.",
      additionalInfo:
        "Always learning and exploring new technologies to stay current with industry trends.",
      skillCategories: {
        frontend: "Frontend",
        backend: "Backend",
        others: "Others",
      },
    },
    mn: {
      title: "Чадвар & Технологи",
      subtitle:
        "Миний санааг амьдралд хэрэгжүүлэхэд ашигладаг технологи болон хэрэгслүүд.",
      additionalInfo:
        "Салбарын чиг хандлагатай хөл нийлүүлэн байхын тулд шинэ технологийг суралцаж, судалж байдаг.",
      skillCategories: {
        frontend: "Frontend",
        backend: "Backend",
        others: "Бусад",
      },
    },
  };

  const currentContent = isMongolian ? content.mn : content.en;
  return (
    <div
      className={`relative py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
      id="skills"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-blue-500"
          } blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-purple-500"
          } blur-3xl`}
        ></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-6xl font-bold mb-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
            style={{ lineHeight: "1.2" }}
          >
            {currentContent.title}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {currentContent.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            // Map skill titles to language content
            const getSkillTitle = (title: string) => {
              switch (title.toLowerCase()) {
                case "frontend":
                  return currentContent.skillCategories.frontend;
                case "backend":
                  return currentContent.skillCategories.backend;
                case "others":
                  return currentContent.skillCategories.others;
                default:
                  return title;
              }
            };

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50"
                    : "bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50 hover:border-purple-500/50 shadow-lg hover:shadow-2xl"
                } backdrop-blur-sm`}
              >
                {/* Card Header */}
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {getSkillTitle(skill.title)}
                  </h3>
                  <div
                    className={`w-16 h-1 mx-auto rounded-full ${
                      isDarkMode
                        ? "bg-gradient-to-r from-purple-500 to-blue-500"
                        : "bg-gradient-to-r from-purple-600 to-blue-600"
                    }`}
                  ></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skill.skills.map((item, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group/skill flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                        isDarkMode
                          ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 hover:border-purple-500/30"
                          : "bg-white/50 hover:bg-gray-100/50 border border-gray-200/30 hover:border-purple-500/30"
                      } backdrop-blur-sm`}
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode
                            ? "text-gray-200 group-hover/skill:text-white"
                            : "text-gray-700 group-hover/skill:text-gray-900"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {currentContent.additionalInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
