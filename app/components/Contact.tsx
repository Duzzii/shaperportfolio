'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
          <p className="mb-6 leading-relaxed">
            I’m always open to discussing web development or any project ideas you have in mind. Feel free to drop a message and I’ll do my best to get back to you soon!
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-6">
            <div>
              <span className="font-bold">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/mduduzi-sibiya-b48192192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600"
              >
                www.linkedin.com/in/mduduzi-sibiya-b48192192
              </a>
            </div>
            <div>
              <span className="font-bold">Email:</span>{' '}
              <a href="mailto:mduduzi.sibiya1920@gmail.com" className="text-purple-400 hover:text-purple-600">
               mduduzi.sibiya1920@gmail.com
              </a>
            </div>
            <div>
              <span className="font-bold">Phone:</span>{' '}
              <a href="tel:+27609060777" className="text-purple-400 hover:text-purple-600">
                +27 (609) 060-777
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            {/* Social Icons */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="...github icon path..." />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mduduzi-sibiya-b48192192"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="...linkedin icon path..." />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleInputChange}
                placeholder="What would you like to talk about?"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-600 h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
