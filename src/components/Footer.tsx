import { DarkModeType } from "@/type/Types";

export default function Footer({ isDarkMode }: DarkModeType) {
  const JumpCv = () => {
    window.open("https://www.figma.com/design/jtmZ4zYEZ8Kn0ZnOxm4laF/Untitled?node-id=0-1&t=WZaujNPdF2LoLj1J-0");
  };

  return (
    <div
      id="contact"
      className={`p-4 py-[100px] flex gap-3 w-[100vw] flex-col items-center  ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <p className={` text-[50px] font-bold cursor-pointer underline ${isDarkMode ? "text-white" : ""}`} onClick={JumpCv}>
        CV
      </p>
    </div>
  );
}
