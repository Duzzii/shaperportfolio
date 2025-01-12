'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';

export type FormData = {
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  async function onSubmit(data: FormData) {
    setIsSending(true);
    setStatusMessage(null);

    try {
      await sendEmail(data);
      setStatusMessage('Your message has been sent successfully! 🎉');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send your message. Please try again later. 😔');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Let’s Get In Touch</h2>
          <p className="mb-6 leading-relaxed">
            I’m always open to discussing web development or any project ideas you have in mind. Feel free to drop a
            message, and I’ll get back to you soon!
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <span className="font-bold">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/mduduzi-sibiya-b48192192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600"
              >
                www.linkedin.com/in/mdu-sibiya
              </a>
            </div>
            <div>
              <span className="font-bold">Email:</span>{' '}
              <a
                href="mailto:mduduzi.sibiya1920@gmail.com"
                className="text-purple-400 hover:text-purple-600"
              >
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
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="What would you like to talk about?"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-600"
                {...register('subject', { required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-600 h-32"
                {...register('message', { required: true })}
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {statusMessage && (
            <p
              className={`mt-4 text-center ${
                statusMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
