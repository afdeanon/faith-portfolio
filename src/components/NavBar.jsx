import React from 'react';
import { useState } from 'react';

const NavBar = () => {
  const [fix, setFix] = useState(false);
  function setFixed(){
    if(window.scrollY >= 392){
      setFix(true)
    } else{
      setFix(false)
    }
  }
  window.addEventListener("scroll", setFixed);
    return (
      <header>
        <nav className={fix ? 'nav fixed' : 'nav'}>
          <ul className = "nav-links">
            <li><a href = "/">Home</a></li>
            <li><a href = "#about">About Me</a></li>
            <li><a href = "#projects">Projects</a></li>
            <li><a href = "#skills">Skills</a></li>
            <li><a href = "#experience">Experience</a></li>
            <li><a href = "#education">Education</a></li>
            <li><a href = "#contact">Contact</a></li>
          </ul>
      </nav>
      </header>
    );
}
export default NavBar