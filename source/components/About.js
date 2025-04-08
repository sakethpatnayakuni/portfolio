import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-6 flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-80 shadow-lg rounded-lg my-8"
    >
      <img
        src="/Saketh Profile.jpg"
        alt="Saketh Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md transition-transform hover:scale-105 duration-300"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-gray-600 max-w-xl">
          I’m Saketh, a passionate data engineer and full-stack developer. I love solving real-world problems
          through clean code, APIs, and UI/UX design. Skilled in Python, Spring Boot, React.js, and Deep Learning.
        </p>
      </div>
    </section>
  );
};

export default About;
