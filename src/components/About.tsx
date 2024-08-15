import { DarkModeType } from "../type/Types";
import { ExampleComponent } from "./Type";

export default function About({ isDarkMode }: DarkModeType) {
  return (
    <div
      id="about"
      className={`gap-[50px] p-4  w-[100wv] flex justify-center ${isDarkMode ? "bg-[black]" : "bg-[white]"}`}
    >
      <div className="mt-[250px] max-sm:mt-[100px] max-lg:mt-[200px] ">
        <div className="flex justify-between max-md:justify-center">
          <div className="w-[50%] max-md:w-[100%] ">
            <p className={`all-1000 text-[40px] mb-3 ${isDarkMode ? "text-white" : ""}`}> Hi, I am Natsagdorj</p>
            <ExampleComponent />
            <p className={`all-1000 text-[20px]  ${isDarkMode ? "text-[grey]" : ""}`}>
              Passionate IT professional with a drive for innovation and a dedication to helping companies succeed.
              Skilled at adapting to different situations, achieving goals, and collaborating with diverse teams.
              Possesses a flexible leadership style suited for working towards common objectives in any setting.
            </p>
          </div>
          <div className="img max-xl:bg-[50%] max-md:hidden"></div>
        </div>
      </div>
    </div>
  );
}
