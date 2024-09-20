'use client';  // Add this at the top of the file to designate it as a Client Component

import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills'); // Default active tab is 'skills'

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <ul className="list-disc pl-6">
            <li>Next.js</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
          </ul>
        );
      case 'education':
        return (
          <ul className="list-disc pl-6">
            <li>BSc in Computer Science - University of Pretoria</li>
            <li>Fullstack Development Learnership - Shaper </li>
            {/* <li>JavaScript Mastery Course - Online</li> */}
          </ul>
        );
      case 'certifications':
        return (
          <ul className="list-disc pl-6">
            <li>Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</li>
            <li>Microsoft Certified: Azure AI Fundamentals</li>
            {/* <li>AWS Certified Solutions Architect</li> */}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className=" w-full p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex justify-center">
        <img
            src="https://cloud.z.com/vn/wp-content/uploads/2023/06/top-ide-software-770x433-1.jpeg" // Correct path based on your file structure
            alt="Computer setup"
            className="rounded-md shadow-lg object-cover"
        />


        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="mb-6 leading-relaxed">
            I am a passionate full-stack developer with expertise in building interactive
            and responsive web applications. I have hands-on experience with
            JavaScript, TypeScript, React, Next.js, Node.js, Express, and more.
            I'm always keen to learn new technologies and improve my skills.
            I thrive in collaborative environments and enjoy working with teams
            to build amazing applications that solve real-world problems.
          </p>

          {/* Tab buttons */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 'skills' ? 'bg-purple-600' : 'bg-gray-700'
              } hover:bg-purple-700`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 'education' ? 'bg-purple-600' : 'bg-gray-700'
              } hover:bg-purple-700`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 'certifications' ? 'bg-purple-600' : 'bg-gray-700'
              } hover:bg-purple-700`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
          </div>

          {/* Tab content */}
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
