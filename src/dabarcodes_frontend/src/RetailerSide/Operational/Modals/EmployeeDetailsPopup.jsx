import React, {useState} from "react";


const generateRandomPassword = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const EmployeeDetailsPopup = ({closePopup}) => {
  const [name, setName] = useState("Arjun Patel");
  const [employeeId, setEmployeeId] = useState("R1234567");
  const [email, setEmail] = useState("arjun.patel@gmail.com");
  const [phone, setPhone] = useState("+91 7527 220 145");
  const [assignedStore, setAssignedStore] = useState("ABC Store");
  const [assignedRole, setAssignedRole] = useState("Manager");
  const [password, setPassword] = useState("****");
  const [showPassword, setShowPassword] = useState(false);

  // Generate a new random password
  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword();
    setPassword(newPassword);
  };

  return (
    <div className=" inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-lg">
        {/* Header */}
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Employee Details</h2>
          <button
            onClick={closePopup}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div> */}
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold mx-auto">Employee Details</h2>
          <button
            onClick={closePopup}
            className=" right-6 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Assigned Store
              </label>
              <input
                type="text"
                value={assignedStore}
                onChange={(e) => setAssignedStore(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Assigned Role
              </label>
              <input
                type="text"
                value={assignedRole}
                onChange={(e) => setAssignedRole(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2 w-1/2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <button
                type="button"
                onClick={handleGeneratePassword}
                className="text-blue-500 hover:text-blue-700 text-sm underline"
              >
                Generate Password
              </button>
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="showPassword"
                className="ml-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                Show Password
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <label htmlFor="sendEmail" className="text-sm text-gray-700">
                <input type="checkbox" id="sendEmail" className="mr-2" />
                Send password through email
              </label>
            </div>
            <div>
              <label htmlFor="logoutDevices" className="text-sm text-gray-700">
                <input type="checkbox" id="logoutDevices" className="mr-2" />
                Logout from all devices
              </label>
            </div>
            <div>
              <label
                htmlFor="forceResetPassword"
                className="text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  id="forceResetPassword"
                  className="mr-2"
                />
                Force to reset password on login
              </label>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Deactivate Employee
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to deactivate this employee? Once
              deactivated, the employee will no longer have access to their
              account or any system resources. You can reactivate them at any
              time from the employee management section.
            </p>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Deactivate Employee
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              onClick={closePopup}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDetailsPopup;

// import React, { useState } from 'react';
// import EmployeeDetailsPopup from './EmployeeDetailsPopup'; // Import the popup component

// const ParentComponent = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the popup

//   // Function to open the popup
//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   // Function to close the popup
//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="p-4">
//       {/* Button to open the popup */}
//       <button
//         onClick={openPopup}
//         className="px-4 py-2 bg-blue-600 text-white rounded-md"
//       >
//         Open Employee Details
//       </button>

//       {/* Conditionally render the popup */}
//       {isPopupOpen && <EmployeeDetailsPopup closePopup={closePopup} />}
//     </div>
//   );
// };

// export default ParentComponent;