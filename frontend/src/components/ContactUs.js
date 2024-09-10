import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/contact`, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Get in Touch</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Feel free to reach out to us using the contact form below or visit us at our location.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 active:bg-red-800 hover:rounded-full transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>

            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
          </div>

          <div className="bg-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3684846671026!2d80.90350877489318!3d26.860031462353472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd97daddc2c3%3A0x91b9e939faf990f1!2sAKBARI%20GATE!5e0!3m2!1sen!2sin!4v1725511108559!5m2!1sen!2sin"
                style={{ border: '0' }}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 flex justify-center items-center space-x-6">
            <span className="flex items-center">
              <i className="fas fa-phone-alt text-red-600 mr-2"></i>
              <span className="font-semibold">Phone:</span> 9305595655
            </span>
            <span className="flex items-center">
              <i className="fas fa-envelope text-red-600 mr-2"></i>
              <span className="font-semibold">Email:</span> support@yam.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
