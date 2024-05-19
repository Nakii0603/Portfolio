import { TypeAnimation } from "react-type-animation";

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      className="text-[#4AF626] vt323-regular"
      sequence={["MERN stack devloper.", 1000]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
