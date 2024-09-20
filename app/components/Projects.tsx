'use client';

import React, { useState } from 'react';

const codingProjects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio to showcase my web development skills and projects. Built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/Duzzii/shaperportfolio',
  },
  {
    title: 'xPOSE Project',
    description:
      'xPOSE is a photo-sharing app for events that allows users to create events, invite participants, and share event or QR codes.',
    technologies: ['Angular', 'Node.js', 'MongoDB'],
    link: 'https://github.com/COS301-SE-2023/xPOSE',
  },
  {
    title: 'E-commerce (eMzansiPlaza)',
    description:
      'An e-commerce platform with payment gateway integration for selling products online. Built with Angular and Spring Boot.',
    technologies: ['Angular', 'PostgresSQL', 'Rest API'],
    link: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Temp Chat Application',
    description:
      'A real-time chat application built with WebSocket and Angular, featuring group chats.',
    technologies: ['Angular', 'Socket.io', 'Express'],
    link: 'https://github.com/Duzzii/Logi_Chat',
  },
  {
    title: 'Twenty4',
    description:
      'A social media application that re-incentivizes users for quality content and reminds us that time is valuable.',
    technologies: ['Angular', 'Firebase'],
    link: 'https://github.com/SwagDemons69/COS301MP',
  },
];

const movieProjects = [
  {
    title: 'Blinded Getaway (Short Film)',
    description:
      'A visually captivating short film with amazing sound effects. A journey into suspense and action.',
    technologies: ['Blender', 'FL-Studio', 'Dji'],
    link: 'https://www.youtube.com/watch?v=bxedLW7W42Y',
    video: 'https://path/to/video-file.mp4',
  },
  {
    title: 'The Web (Short Film)',
    description:
      'A suspenseful short film that explores the depths of human connection in the digital age.',
    technologies: ['Blender', 'FL-Studio', 'Dji'],
    link: 'https://drive.google.com/file/d/1bH6L0Y-1q3ki5UIwMmQraSwheY2yvITl/view',
    video: 'https://path/to/another-video-file.mp4',
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('coding'); // Default tab is 'coding'

  const renderProjects = () => {
    const projects = activeTab === 'coding' ? codingProjects : movieProjects;
    return projects.map((project, index) => (
      <div id="projects" key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
        {/* Video Background for Movie Projects */}
        {activeTab === 'movie' && project.video && (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Technologies:</span>
            <ul className="list-none space-y-1 mt-2">
              {project.technologies.map((tech, i) => (
                <li key={i} className="inline-block bg-purple-600 text-xs px-2 py-1 rounded-full mr-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors inline-block"
          >
            View Project
          </a>
        </div>

        {/* Overlay to darken the video for better text readability */}
        {activeTab === 'movie' && (
          <div className="absolute inset-0 bg-black opacity-30 z-5"></div>
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 mt-20"> {/* Add mt-20 to create space below the navbar */}
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-6 py-2 rounded-md text-lg font-semibold ${
            activeTab === 'coding' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
          } transition-colors duration-300`}
          onClick={() => setActiveTab('coding')}
        >
          Coding Projects
        </button>
        <button
          className={`px-6 py-2 rounded-md text-lg font-semibold ${
            activeTab === 'movie' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
          } transition-colors duration-300`}
          onClick={() => setActiveTab('movie')}
        >
          Extra Project 
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderProjects()}
      </div>
    </div>
  );
};

export default Projects;
