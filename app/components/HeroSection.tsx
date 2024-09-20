"use client";

import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [roles, setRoles] = useState([
    "Web Developer",
    "UI/UX Designer",
    "Creator",
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#0d0d0d] to-[#121212] text-white font-sans">
      {/* Left Half */}
      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-tl from-purple-600 to-blue-500 flex flex-col justify-center pl-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d94] to-[#ff6bd6]">
            {roles[currentRoleIndex]}.
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Crafting beautiful web experiences with creativity and code.
        </p>
        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <a href="#contact">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white font-semibold hover:bg-opacity-80">
              Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* Right Half with Image */}
      <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] rounded-full bg-white/[.1] shadow-lg p-8">
          <img
            src="https://www.shareicon.net/data/128x128/2016/01/24/708382_people_512x512.png"
            alt="Profile picture"
            className="rounded-full w-full h-full object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
