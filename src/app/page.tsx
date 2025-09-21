"use client";
import { useState } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <StarsBackground isDarkMode={isDarkMode} />
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="pt-20">
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
