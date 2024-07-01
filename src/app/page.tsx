"use client";
import { useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={` ${isDarkMode ? "bg-[#000000]" : "bg-[white]"}`}>
      <div className="max-w-[1400px] max-h-[100vh] m-auto  ">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="flex items-center flex-col ">
          <About isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
