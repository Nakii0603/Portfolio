import { TypeAnimation } from "react-type-animation";

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      className="text-[#4AF626] vt323-regular mb-2"
      sequence={[
        "💻 Full Stack Developer",
        1000,
        "🚀 Passionate Coder",
        1000,
        "🎯 Problem Solver",
        1000,
        "",
        500,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "24px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
