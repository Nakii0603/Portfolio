'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={` ${isDarkMode ? 'bg-[#000000]' : 'bg-[white]'}`}>
      <div className='max-w-[1400px] m-auto  '>
        <div className='flex items-center flex-col '>
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
