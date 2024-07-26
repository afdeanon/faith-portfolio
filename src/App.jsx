import NavBar from './components/NavBar';
import Experience from './components/Experience';
import React, { useEffect } from 'react';

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
      <header>
        <NavBar />
      </header>
      <main>
        <div className ="flex flex-col justify-center items-center bg-gray-900 text-white text-base pb-8">
          <Experience />
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