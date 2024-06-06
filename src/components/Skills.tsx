import { backend, others, skills } from "../../public/skill-icons";
import { DarkModeType } from "./Types";

export default function Skills({ isDarkMode }: DarkModeType) {
  return (
    <div className="xl:py-24 fle ">
      {/* <div className="flex xl:gap-[60px] lg:gap-18 md:gap-10 sm:gap-6 max-sm:gap-3 py-4 px-10 center flex-wrap ">
        {skills.map((skill) => {
          return (
            <div className="w-[100px] h-[90px] ">
              <div className="flex flex-col max-sm:flex-wrap ">
                <img style={{ width: "60px", height: "64px" }} src={skill.img} />
                <p className="text-center"> {skill.text}</p>
              </div>
            </div>
          );
        })}
      </div> */}
      {/* <div className="bg-[red]">
        {backend.map((back) => {
          return (
            <div>
              <img src={back.img} alt="" />
            </div>
          );
        })}
      </div> */}
      <div
        className={` flex flex-col rounded-[20px] w-[500px] h-[500px] border-2 border-[#854ce6] ${
          isDarkMode ? "bg-[#00000017]" : "bg-[white]"
        }`}
      >
        <p className={` ${isDarkMode ? "text-[red]" : "bg-[white]"}`}>Frontend</p>
        <div className="flex flex-wrap">
          {others.map((other) => {
            return (
              <div className="w-[150px] flex justify-center h-[90px] ">
                <img style={{ width: "60px", height: "64px" }} src={other.img} alt="" />
                <p>{other.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
