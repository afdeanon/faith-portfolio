import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const SlideTabsExample = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
}

const NavBar = () => {
  const [position, setPosition] = useState({
    x: 0, // Changed from 'left' to 'x'
    width: 0,
    opacity: 0,
  });

  return (
    <ul 
      onMouseLeave={()=>{
        setPosition(pv => ({
          ...pv,
          opacity:0,
        }))
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-gray bg-white p-1">
      <Tab setPosition={setPosition}><a href="/">Home</a></Tab>
      <Tab setPosition={setPosition}><a href="#about">About Me</a></Tab>
      <Tab setPosition={setPosition}><a href="#projects">Projects</a></Tab>
      <Tab setPosition={setPosition}><a href="#skills">Skills</a></Tab>
      <Tab setPosition={setPosition}><a href="#experience">Experience</a></Tab>
      <Tab setPosition={setPosition}><a href="#education">Education</a></Tab>
      <Tab setPosition={setPosition}><a href="#contact">Contact</a></Tab>
      
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        // const ulLeft = ref.current.parentNode.getBoundingClientRect().left;
        setPosition({
          x: ref.current.offsetLeft, // Calculate the x position relative to the parent ul
          width,
          opacity: 1,
        });
      }}
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base'>
      {children}
    </li>
  );
}

const Cursor = ({ position }) => {
  return (
    <motion.li
      className='absolute z-0 h-7 rounded-full bg-gray-200 md:h-12'
      style={{ width: position.width, x: position.x }} // Use inline style for width and x
      animate={{ opacity: position.opacity }} // Animate opacity
      transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Add transition for smooth animation
    />
  );
}

export default NavBar;