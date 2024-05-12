"use client";
import { useState } from "react";
import Articles from "@/components/Articles";
import Header from "@/components/Header";
import About from "@/components/About";
import Img from "../../public/img";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <div className="bg-image absolute z-[-1]">
          <img src="" alt="" />
        </div>
        <About isDarkMode={isDarkMode} />
        {/* <Articles isDarkMode={isDarkMode} /> */}

      </div>
    </div>
  );
}

export default App;
