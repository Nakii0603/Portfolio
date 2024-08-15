import { skills } from "@/data/constants";
import { DarkModeType } from "../type/Types";

const Skills = ({ isDarkMode }: DarkModeType) => {
  return (
    <div
      className={`flex flex-col justify-center max-w-[1400px] items-center pb-[80px] ${isDarkMode ? "bg-black" : "bg-white"}`}
      id="skills"
    >
      <div
        className={`flex justify-between items-center flex-col w-[100%] gap-3 flex-wrap ${
          isDarkMode ? "" : ""
        }`}
      >
        <p
          className={`all-1000 text-[42px] text-center font-semibold mt-[20px] max-md:text-[32px] max-md:mt-[12px] ${
            isDarkMode ? "text-white" : ""
          }`}
        >
          Skills
        </p>
        <div
          className={` w-[100%] flex flex-wrap mt-[30px] mb-[50px] gap-[30px] justify-center ${isDarkMode ? "" : ""}`}
        >
          {skills.map((skill, index) => (
            <div
              className={` w-[100%] max-w-[500px] border-[2px] border-[#854ce6] border-[solid] rounded-[16px] p-[18px 36px] max-md:max-w-[400px] max-sm:max-w-[330px] max-sm:p-[10px 36px]  ${
                isDarkMode ? "bg-[#120c17]" : "bg-[white] border-[#cdbde8]"
              }`}
              key={index}
            >
              <p
                className={`all-1000 text-[28px] font-semibold mb-[20px] text-center ${
                  isDarkMode ? "text-[#b4b4b4]" : ""
                }`}
              >
                {skill.title}
              </p>
              <div className={`flex justify-center flex-wrap gap-3 mb-[20px]  ${isDarkMode ? "" : ""}`}>
                {skill.skills.map((item, index) => (
                  <div
                    className={` text-[16px] border-[1px] border-[#b4b4b4] border-solid font-normal rounded-[12px] py-[12px] px-[16px] flex items-center justify-center gap-2 max-md:text-[14px] max-md:py-[8px] max-md:px-[12px] max-sm:py-[6px] max-sm:px-[12px] ${
                      isDarkMode ? "" : ""
                    }`}
                    key={index}
                  >
                    <img className="w-[24px] h-[24px] " src={item.image} />
                    <p className={` all-1000 ${isDarkMode ? "text-white" : ""}`}>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
