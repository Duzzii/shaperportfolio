'use client';

import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio to showcase my web development skills and projects. Built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Task Management App',
    description:
      'A full-stack task management app that allows users to track their tasks and projects. Built with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'E-commerce Platform',
    description:
      'An e-commerce platform with payment gateway integration for selling products online. Built with React and Firebase.',
    technologies: ['React', 'Firebase', 'Stripe API'],
    link: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    title: 'Chat Application',
    description:
      'A real-time chat application built with WebSocket and React, featuring group chats and notifications.',
    technologies: ['React', 'Socket.io', 'Express'],
    link: 'https://github.com/yourusername/chat-app',
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
