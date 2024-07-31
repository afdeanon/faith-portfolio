import NavBar from './components/NavBar';
import Experience from './components/Experience';
import React, { useEffect } from 'react';
import AboutMe from './components/AboutMe';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <main>
        <div className='container mx-auto px-4'>
          <div id="experience" className ="content pb-20 flex flex-col justify-center items-center bg-white text-black text-base pb-8">
            <AboutMe />
            <Experience />
          </div>
          <div className = "fixed bottom-10 left-0 w-full">
          <NavBar />
        </div>
        </div>
          {/* <Home />
          <AboutMe />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact /> */}
      </main>
    </div>
  );
}

export default App;