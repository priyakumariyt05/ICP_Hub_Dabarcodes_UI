// Sidebar.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Asidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'block' : 'hidden'
      } md:block`}
    >
      <button
        onClick={toggleSidebar}
        className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md self-start"
      >
        <FaTimes />
      </button>
      <div className="mb-8">
        <img
          src="/image/image 40.png"
          alt="Logo"
          className="h-8 w-auto mb-8"
        />
      </div>
      <h2 className="text-xl font-bold mb-8">Become Our Retailer</h2>
      <img src="/image/dash.png" alt="" />
    </div>
  );
};

export default Asidebar;
