
import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSupport = () => {
 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const contactEmail = 'support@yourcompany.com';
  const contactPhone = '+91 98183 23 2309';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4 font-roboto">Contact Support</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-roboto font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-roboto font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-roboto font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-roboto font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 font-roboto rounded-lg">
          Submit
        </button>
      </form>

      {/* Reach Out Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 font-roboto">Reach out to us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg  p-3">
            <FaEnvelope className="text-3xl text-blue-500 mr-3 bg-blue-200 rounded-full p-2" />
            <div>
              <p className="font-semibold font-roboto">Email</p>
              <p>{contactEmail}</p>
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaPhone className="text-3xl text-blue-500 mr-3 bg-blue-200 rounded-full p-2" />
            <div>
              <p className="font-semibold font-roboto">Phone</p>
              <p>{contactPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
