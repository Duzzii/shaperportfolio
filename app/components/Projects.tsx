'use client';

import React from 'react';

const projects = [
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
    title: 'E-commerce Platform',
    description:
      'An e-commerce platform with payment gateway integration for selling products online. Built with Angular and Spring Boot.',
    technologies: ['Angular', 'postgresSQL', 'Rest API'],
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
      'A social media application that: Re-incentives users for quality content, rewards users for accurate content and reminds us that time is valuable.',
    technologies: ['Angular', 'Firebase'],
    link: 'https://github.com/SwagDemons69/COS301MP',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
