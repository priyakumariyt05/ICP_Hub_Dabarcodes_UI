// import React, {useState} from "react";

// const AddEmployeePopup = (closePopup) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("****");
//   const generateRandomPassword = () => {
//     const chars =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = "";
//     for (let i = 0; i < 8; i++) {
//       password += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return password;
//   };
//     const handleGeneratePassword = () => {
//       const newPassword = generateRandomPassword();
//       setPassword(newPassword);
//     };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
//         {/* <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-semibold">Add Employee</h2>
//           <button className="text-gray-500 hover:text-gray-700 text-2xl">
//             &times;
//           </button>
//         </div> */}
//         <div className="flex items-center mb-6">
//           <h2 className="text-2xl font-semibold mx-auto">Employee Details</h2>
//           <button
//             onClick={closePopup}
//             className=" right-6 text-gray-500 hover:text-gray-700 text-2xl"
//           >
//             &times;
//           </button>
//         </div>

//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="Arjun Patel"
//               />
//             </div>

//             {/* Employee ID */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Employee ID
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="R1234567"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="arjun.patel@gmail.com"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="+91 7527 220 145"
//               />
//             </div>

//             {/* Assigned Store */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Assigned Store
//               </label>
//               <select className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
//                 <option>Store Name</option>
//               </select>
//             </div>

//             {/* Assigned Role */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Assigned Role
//               </label>
//               <select className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
//                 <option>Assigned Role</option>
//               </select>
//             </div>
//           </div>

//           {/* Password Field */}
         
//           <div className="space-y-2 w-1/2">
//             <div className="flex justify-between items-center">
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <button
//                 type="button"
//                 onClick={handleGeneratePassword}
//                 className="text-blue-500 hover:text-blue-700 text-sm underline"
//               >
//                 Generate Password
//               </button>
//             </div>
//             <div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <label
//                 htmlFor="showPassword"
//                 className="ml-2 text-sm text-gray-700"
//               >
//                 <input
//                   type="checkbox"
//                   id="showPassword"
//                   checked={showPassword}
//                   onChange={() => setShowPassword(!showPassword)}
//                   className="mr-2"
//                 />
//                 Show Password
//               </label>
//             </div>
//           </div>

//           {/* Checkboxes */}
//           <div className="space-y-3">
//             <div>
//               <input
//                 type="checkbox"
//                 id="sendPasswordEmail"
//                 className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="sendPasswordEmail"
//                 className="text-sm text-gray-700"
//               >
//                 Send password through email
//               </label>
//             </div>

//             <div>
//               <input
//                 type="checkbox"
//                 id="logoutDevices"
//                 className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label htmlFor="logoutDevices" className="text-sm text-gray-700">
//                 Logout from all devices
//               </label>
//             </div>

//             <div>
//               <input
//                 type="checkbox"
//                 id="resetPasswordOnLogin"
//                 className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="resetPasswordOnLogin"
//                 className="text-sm text-gray-700"
//               >
//                 Force to reset password on login
//               </label>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center space-x-4">
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Add employee
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeePopup;
// its orignial
// import React, {useState} from "react";

// const AddEmployeePopup = ({closePopup}) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("****");
//   const [name, setName] = useState("");
//   const [employeeId, setEmployeeId] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [assignedStore, setAssignedStore] = useState("");
//   const [assignedRole, setAssignedRole] = useState("");
//   const [sendPasswordEmail, setSendPasswordEmail] = useState(false);
//   const [logoutDevices, setLogoutDevices] = useState(false);
//   const [resetPasswordOnLogin, setResetPasswordOnLogin] = useState(false);

//   const generateRandomPassword = () => {
//     const chars =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = "";
//     for (let i = 0; i < 8; i++) {
//       password += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return password;
//   };

//   const handleGeneratePassword = () => {
//     const newPassword = generateRandomPassword();
//     setPassword(newPassword);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic
//     console.log({
//       name,
//       employeeId,
//       email,
//       phone,
//       assignedStore,
//       assignedRole,
//       password,
//       sendPasswordEmail,
//       logoutDevices,
//       resetPasswordOnLogin,
//     });
//     closePopup(); // Close the popup after form submission
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
//         <div className="flex items-center mb-6">
//           <h2 className="text-2xl font-semibold mx-auto"> Add Employee </h2>
//           <button
//             onClick={closePopup}
//             className="right-6 text-gray-500 hover:text-gray-700 text-2xl"
//           >
//             &times;
//           </button>
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="Arjun Patel"
//               />
//             </div>

//             {/* Employee ID */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Employee ID
//               </label>
//               <input
//                 type="text"
//                 value={employeeId}
//                 onChange={(e) => setEmployeeId(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="R1234567"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="arjun.patel@gmail.com"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="+91 7527 220 145"
//               />
//             </div>

//             {/* Assigned Store */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Assigned Store
//               </label>
//               <select
//                 value={assignedStore}
//                 onChange={(e) => setAssignedStore(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="select">Select Store</option>
//                 <option value="manager">Manager</option>
//                 {/* Add store options here */}
//               </select>
//             </div>

//             {/* Assigned Role */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Assigned Role
//               </label>
//               <select
//                 value={assignedRole}
//                 onChange={(e) => setAssignedRole(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="select">Select Role</option>
//                 <option value="manager">Manager</option>
//                 {/* Add role options here */}
//               </select>
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="space-y-2 w-1/2">
//             <div className="flex justify-between items-center">
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <button
//                 type="button"
//                 onClick={handleGeneratePassword}
//                 className="text-blue-500 hover:text-blue-700 text-sm underline"
//               >
//                 Generate Password
//               </button>
//             </div>
//             <div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <label
//                 htmlFor="showPassword"
//                 className="ml-2 text-sm text-gray-700"
//               >
//                 <input
//                   type="checkbox"
//                   id="showPassword"
//                   checked={showPassword}
//                   onChange={() => setShowPassword(!showPassword)}
//                   className="mr-2"
//                 />
//                 Show Password
//               </label>
//             </div>
//           </div>

//           {/* Checkboxes */}
//           <div className="space-y-3">
//             <div>
//               <input
//                 type="checkbox"
//                 id="sendPasswordEmail"
//                 checked={sendPasswordEmail}
//                 onChange={() => setSendPasswordEmail(!sendPasswordEmail)}
//                 className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="sendPasswordEmail"
//                 className="text-sm text-gray-700"
//               >
//                 Send password through email
//               </label>
//             </div>

//             <div>
//               <input
//                 type="checkbox"
//                 id="logoutDevices"
//                 checked={logoutDevices}
//                 onChange={() => setLogoutDevices(!logoutDevices)}
//                 className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label htmlFor="logoutDevices" className="text-sm text-gray-700">
//                 Logout from all devices
//               </label>
//             </div>

//             <div>
//               <input
//                 type="checkbox"
//                 id="resetPasswordOnLogin"
//                 checked={resetPasswordOnLogin}
//                 onChange={() => setResetPasswordOnLogin(!resetPasswordOnLogin)}
//                 className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="resetPasswordOnLogin"
//                 className="text-sm text-gray-700"
//               >
//                 Force to reset password on login
//               </label>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center space-x-4">
//             <button
//               type="button"
//               onClick={closePopup}
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Add employee
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeePopup;
// its working
// import { useState } from "react";
// const AddEmployeePopup = ({onClose, handleAddEmployee}) => {
//   const [newEmployee, setNewEmployee] = useState({
//     id: "",
//     name: "",
//     store: "",
//     role: "",
//     category: "",
//     email: "",
//   });

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setNewEmployee((prev) => ({...prev, [name]: value}));
//   };

//   const handleAdd = () => {
//     handleAddEmployee(newEmployee);
//     onClose(); // Close modal after adding
//   };

//   return (
//     <div className="modal">
//       {/* Modal content */}
//       <input
//         name="name"
//         value={newEmployee.name}
//         onChange={handleInputChange}
//         placeholder="Employee Name"
//       />
//       {/* Other input fields */}
//       <button onClick={handleAdd}>Add Employee</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// };

// export default AddEmployeePopup;

// working..............................

import React, {useState} from "react";

const AddEmployeePopup = ({onClose, handleAddEmployee}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("****");
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [assignedStore, setAssignedStore] = useState("");
  const [assignedRole, setAssignedRole] = useState("");
  const [sendPasswordEmail, setSendPasswordEmail] = useState(false);
  const [logoutDevices, setLogoutDevices] = useState(false);
  const [resetPasswordOnLogin, setResetPasswordOnLogin] = useState(false);

  // Generate random password
  const generateRandomPassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // Handle password generation
  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword();
    setPassword(newPassword);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      name,
      employeeId,
      email,
      phone,
      assignedStore,
      assignedRole,
      password,
      sendPasswordEmail,
      logoutDevices,
      resetPasswordOnLogin,
    };

    console.log("Employee Data:", newEmployee); // Log employee data
    handleAddEmployee(newEmployee); // Add employee
    onClose(); // Close popup
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
        {/* Header with close button */}
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold mx-auto">Add Employee</h2>
          <button
            onClick={onClose}
            className="right-6 text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Arjun Patel"
              />
            </div>

            {/* Employee ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="R1234567"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="arjun.patel@gmail.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="+91 7527 220 145"
              />
            </div>

            {/* Assigned Store */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Assigned Store
              </label>
              <select
                value={assignedStore}
                onChange={(e) => setAssignedStore(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="select">Select Store</option>
                <option value="store1">Store 1</option>
                <option value="store2">Store 2</option>
              </select>
            </div>

            {/* Assigned Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Assigned Role
              </label>
              <select
                value={assignedRole}
                onChange={(e) => setAssignedRole(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="select">Select Role</option>
                <option value="manager">Manager</option>
                <option value="cashier">Cashier</option>
              </select>
            </div>
          </div>

          {/* Password Field */}
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
              <label className="ml-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                Show Password
              </label>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div>
              <input
                type="checkbox"
                checked={sendPasswordEmail}
                onChange={() => setSendPasswordEmail(!sendPasswordEmail)}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">
                Send password through email
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                checked={logoutDevices}
                onChange={() => setLogoutDevices(!logoutDevices)}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">
                Logout from all devices
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                checked={resetPasswordOnLogin}
                onChange={() => setResetPasswordOnLogin(!resetPasswordOnLogin)}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">
                Force to reset password on login
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeePopup;





// working......................
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const AddEmployeePopup = ({ onClose, handleAddEmployee }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("****");
//   const [name, setName] = useState("");
//   const [employeeId, setEmployeeId] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [assignedStore, setAssignedStore] = useState("");
//   const [assignedRole, setAssignedRole] = useState("");
//   const [sendPasswordEmail, setSendPasswordEmail] = useState(false);
//   const [logoutDevices, setLogoutDevices] = useState(false);
//   const [resetPasswordOnLogin, setResetPasswordOnLogin] = useState(false);

//   // Generate random password
//   const generateRandomPassword = () => {
//     const chars =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let password = "";
//     for (let i = 0; i < 8; i++) {
//       password += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return password;
//   };

//   // Handle password generation
//   const handleGeneratePassword = () => {
//     const newPassword = generateRandomPassword();
//     setPassword(newPassword);
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newEmployee = {
//       name,
//       employeeId,
//       email,
//       phone,
//       assignedStore,
//       assignedRole,
//       password,
//       sendPasswordEmail,
//       logoutDevices,
//       resetPasswordOnLogin,
//     };

//     console.log("Employee Data:", newEmployee); // Log employee data
//     handleAddEmployee(newEmployee); // Add employee

//     // Show success toast
//     toast.success("Employee added successfully!");

//     // Optional: Clear form inputs
//     setName("");
//     setEmployeeId("");
//     setEmail("");
//     setPhone("");
//     setAssignedStore("");
//     setAssignedRole("");
//     setPassword("****");

//     onClose(); // Close popup
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
//         {/* Toast Container */}
//         <ToastContainer position="top-right" autoClose={3000} />

//         {/* Header with close button */}
//         <div className="flex items-center mb-6">
//           <h2 className="text-2xl font-semibold mx-auto">Add Employee</h2>
//           <button
//             onClick={onClose}
//             className="right-6 text-gray-500 hover:text-gray-700 text-2xl"
//           >
//             &times;
//           </button>
//         </div>

//         {/* Form */}
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="Arjun Patel"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Employee ID
//               </label>
//               <input
//                 type="text"
//                 value={employeeId}
//                 onChange={(e) => setEmployeeId(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="R1234567"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="arjun.patel@gmail.com"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 placeholder="+91 7527 220 145"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Assigned Store
//               </label>
//               <select
//                 value={assignedStore}
//                 onChange={(e) => setAssignedStore(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="select">Select Store</option>
//                 <option value="store1">Store 1</option>
//                 <option value="store2">Store 2</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Assigned Role
//               </label>
//               <select
//                 value={assignedRole}
//                 onChange={(e) => setAssignedRole(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               >
//                 <option value="select">Select Role</option>
//                 <option value="manager">Manager</option>
//                 <option value="cashier">Cashier</option>
//               </select>
//             </div>
//           </div>

//           <div className="space-y-2 w-1/2">
//             <div className="flex justify-between items-center">
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <button
//                 type="button"
//                 onClick={handleGeneratePassword}
//                 className="text-blue-500 hover:text-blue-700 text-sm underline"
//               >
//                 Generate Password
//               </button>
//             </div>
//             <div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <label className="ml-2 text-sm text-gray-700">
//                 <input
//                   type="checkbox"
//                   checked={showPassword}
//                   onChange={() => setShowPassword(!showPassword)}
//                   className="mr-2"
//                 />
//                 Show Password
//               </label>
//             </div>
//           </div>

//           <div className="flex justify-center space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Add Employee
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeePopup;
