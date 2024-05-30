"use client";
import { useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";


function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`all-1000 ${isDarkMode ? "bg-[black]" : "bg-[white]"}`}>
      <div className="max-w-[1400px] h-[100vh] m-auto all-1000 ">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {/* <div className="flex items-center flex-col ">
          <About isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
