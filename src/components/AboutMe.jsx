import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className=" mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/300" // Replace with your own image
              alt="Profile"
              className="rounded-full shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2 px-4">
            <p className="text-lg mb-4">
              Hello! I'm [Your Name], a passionate software engineer with a love for creating innovative solutions and improving user experiences. I have experience in various technologies including JavaScript, React, and mobile development. I thrive in collaborative environments and enjoy taking on challenging projects.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside mb-4">
              <li>JavaScript / TypeScript</li>
              <li>React / React Native</li>
              <li>Node.js / Express</li>
              <li>HTML & CSS / Tailwind CSS</li>
              <li>Mobile App Development</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-lg">
              Feel free to reach out to me via email at <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
