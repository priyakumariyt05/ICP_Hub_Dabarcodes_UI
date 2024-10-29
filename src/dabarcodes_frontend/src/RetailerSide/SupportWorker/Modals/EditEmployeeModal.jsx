
import React, {useState, useEffect} from "react";
import Modal from "./Modal";

const EditEmployeeModal = ({isOpen, employee, onClose, onUpdate}) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    assignedStore: "",
    assignedRole: "",
    email: "",
    phone: "",
    password: "",
  });

  // Additional states
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Use effect to populate the form when the modal opens with the selected employee's data
  useEffect(() => {
    if (employee) {
      setFormData({
        employeeId: employee.employeeId,
        name: employee.name,
        assignedStore: employee.assignedStore,
        assignedRole: employee.assignedRole,
        email: employee.email,
        phone: employee.phone,
        password: employee.password,
        category:employee.category,
      });
      setPassword(employee.password);
    }
  }, [employee]);

  // Handle changes in the form fields
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to generate a random password
  const handleGeneratePassword = () => {
    const generatedPassword = Math.random().toString(36).slice(-8);
    setPassword(generatedPassword);
    setFormData((prev) => ({
      ...prev,
      password: generatedPassword,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Pass the updated data back to the parent component
    onClose(); // Close the modal after updating
  };

  return (
    <Modal
      // isOpen={isOpen}
      // onClose={onClose}
      //  mainclass="bg-opacity-50"
      isOpen={isOpen}
      onClose={onClose}
      mainclass="flex justify-center items-center"
      className="w-[700px]"
    >
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6">Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Employee ID */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="employeeId"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Assigned Store */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="assignedStore"
              >
                Assigned Store
              </label>
              <input
                type="text"
                id="assignedStore"
                name="assignedStore"
                value={formData.assignedStore}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Assigned Role */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="assignedRole"
              >
                Assigned Role
              </label>
              <input
                type="text"
                id="assignedRole"
                name="assignedRole"
                value={formData.assignedRole}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Assigned Store */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="assignedCategory"
              >
                Assigned Category
              </label>
              <input
                type="text"
                id="assignedCategory"
                name="assignedCategory"
                value={formData.category}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Assigned Role */}
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="permission"
              >
                Permission
              </label>
              <input
                type="text"
                id="permission"
                name="permission"
                // value={formData.assignedRole}
                // onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2 md:col-span-2">
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

            {/* Additional Options */}
            <div className="space-y-2 md:col-span-2">
              <div>
                <label htmlFor="sendEmail" className="text-sm text-gray-700">
                  <input type="checkbox" id="sendEmail" className="mr-2" />
                  Send password through email
                </label>
              </div>
              <div>
                <label
                  htmlFor="logoutDevices"
                  className="text-sm text-gray-700"
                >
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
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditEmployeeModal;

// import React, {useState, useEffect} from "react";
// import Modal from "./Modal";

// const EditEmployeeModal = ({isOpen, employee, onClose, onUpdate}) => {
//   // State to hold the form data
//   const [formData, setFormData] = useState({
//     employeeId: "",
//     name: "",
//     assignedStore: "",
//     assignedRole: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   // Additional states
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Use effect to populate the form when the modal opens with the selected employee's data
//   useEffect(() => {
//     if (employee) {
//       setFormData({
//         employeeId: employee.employeeId,
//         name: employee.name,
//         assignedStore: employee.assignedStore,
//         assignedRole: employee.assignedRole,
//         email: employee.email,
//         phone: employee.phone,
//         password: employee.password,
//       });
//       setPassword(employee.password);
//     }
//   }, [employee]);

//   // Handle changes in the form fields
//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Function to generate a random password
//   const handleGeneratePassword = () => {
//     const generatedPassword = Math.random().toString(36).slice(-8);
//     setPassword(generatedPassword);
//     setFormData((prev) => ({
//       ...prev,
//       password: generatedPassword,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData); // Pass the updated data back to the parent component
//     onClose(); // Close the modal after updating
//   };

//   // Return null if the modal is not open
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-2xl">
//         <h2 className="text-2xl font-semibold mb-6">Edit Employee</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//                 required
//               />
//             </div>

//             {/* Employee ID */}
//             <div>
//               <label
//                 className="block text-sm font-medium mb-1"
//                 htmlFor="employeeId"
//               >
//                 Employee ID
//               </label>
//               <input
//                 type="text"
//                 id="employeeId"
//                 name="employeeId"
//                 value={formData.employeeId}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//                 required
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="phone">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//                 required
//               />
//             </div>

//             {/* Assigned Store */}
//             <div>
//               <label
//                 className="block text-sm font-medium mb-1"
//                 htmlFor="assignedStore"
//               >
//                 Assigned Store
//               </label>
//               <input
//                 type="text"
//                 id="assignedStore"
//                 name="assignedStore"
//                 value={formData.assignedStore}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//                 required
//               />
//             </div>

//             {/* Assigned Role */}
//             <div>
//               <label
//                 className="block text-sm font-medium mb-1"
//                 htmlFor="assignedRole"
//               >
//                 Assigned Role
//               </label>
//               <input
//                 type="text"
//                 id="assignedRole"
//                 name="assignedRole"
//                 value={formData.assignedRole}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="space-y-2 md:col-span-2">
//               <div className="flex justify-between items-center">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <button
//                   type="button"
//                   onClick={handleGeneratePassword}
//                   className="text-blue-500 hover:text-blue-700 text-sm underline"
//                 >
//                   Generate Password
//                 </button>
//               </div>
//               <div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//                 <label
//                   htmlFor="showPassword"
//                   className="ml-2 text-sm text-gray-700"
//                 >
//                   <input
//                     type="checkbox"
//                     id="showPassword"
//                     checked={showPassword}
//                     onChange={() => setShowPassword(!showPassword)}
//                     className="mr-2"
//                   />
//                   Show Password
//                 </label>
//               </div>
//             </div>

//             {/* Additional Options */}
//             <div className="space-y-2 md:col-span-2">
//               <div>
//                 <label htmlFor="sendEmail" className="text-sm text-gray-700">
//                   <input type="checkbox" id="sendEmail" className="mr-2" />
//                   Send password through email
//                 </label>
//               </div>
//               <div>
//                 <label
//                   htmlFor="logoutDevices"
//                   className="text-sm text-gray-700"
//                 >
//                   <input type="checkbox" id="logoutDevices" className="mr-2" />
//                   Logout from all devices
//                 </label>
//               </div>
//               <div>
//                 <label
//                   htmlFor="forceResetPassword"
//                   className="text-sm text-gray-700"
//                 >
//                   <input
//                     type="checkbox"
//                     id="forceResetPassword"
//                     className="mr-2"
//                   />
//                   Force to reset password on login
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end gap-4 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditEmployeeModal;