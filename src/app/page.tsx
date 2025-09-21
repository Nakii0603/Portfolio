"use client";
import { useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import CursorFollower from "@/components/CursorFollower";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isMongolian, setIsMongolian] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setIsMongolian(!isMongolian);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <StarsBackground isDarkMode={isDarkMode} />
      <CursorFollower isDarkMode={isDarkMode} />
      <Header
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isMongolian={isMongolian}
        toggleLanguage={toggleLanguage}
      />
      <main className="pt-20">
        <About isDarkMode={isDarkMode} isMongolian={isMongolian} />
        <Skills isDarkMode={isDarkMode} isMongolian={isMongolian} />
        <Projects isDarkMode={isDarkMode} isMongolian={isMongolian} />
        <Footer isDarkMode={isDarkMode} isMongolian={isMongolian} />
      </main>
    </div>
  );
}

export default App;
