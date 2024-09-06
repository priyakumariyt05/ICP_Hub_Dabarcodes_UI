import React, { useState } from 'react';

const SessionExpiredModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    if (username && password) {
      alert(`Logging in with username: ${username}`);
      // Implement your login logic here
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 font-roboto">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-10 h-10 text-blue-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8C6.48 8 2 12.48 2 18s4.48 10 10 10 10-4.48 10-10h-4.5" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-4">Your session has expired due to inactivity</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              aria-label="Username"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              aria-label="Password"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionExpiredModal;
