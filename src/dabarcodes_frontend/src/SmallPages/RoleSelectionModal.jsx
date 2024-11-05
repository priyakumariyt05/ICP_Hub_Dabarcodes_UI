

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";

// const RoleSelectionModal = ({ onClose }) => {
//   const navigate = useNavigate();

//   const handleRoleSelect = (role) => {
//     navigate(`/role/${role}`);
//     onClose(); // Close the modal after selection
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 font-roboto">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1"
//         >
//           ×
//         </button>
//         <h2 className="text-xl text-blue-400 font-semibold text-center mb-4">
//           Choose Your Role
//         </h2>
//         <div className="border border-gray-800 rounded-md overflow-hidden">
//           <button
//             onClick={() => handleRoleSelect("customer")}
//             className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800"
//           >
//             <img
//               src="/image/4.png"
//               alt="Customer"
//               className="mr-2 w-6 h-6"
//             />
//             Customer
//           </button>
//           <button
//             onClick={() => handleRoleSelect("retailer")}
//             className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800"
//           >
//             <img
//               src="/image/5.png"
//               alt="Retailer"
//               className="mr-2 w-6 h-6"
//             />
//             Retailer
//           </button>
//           <button
//             onClick={() => handleRoleSelect("supplier")}
//             className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 rounded-b-md"
//           >
//             <img
//               src="/image/6.png"
//               alt="Supplier"
//               className="mr-2 w-6 h-6"
//             />
//             Supplier
//           </button>
//         </div>
//         <Link
//           to="/login-page"
//           className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 block text-center"
//         >
//           Continue
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RoleSelectionModal;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RoleSelectionModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null); // Store selected role

  const handleRoleSelect = (role) => {
    setSelectedRole(role); // Set the selected role
  };

  const handleContinue = () => {
    if (selectedRole === "customer") {
      navigate("/login-page");
    } else if (selectedRole === "retailer") {
      navigate("/dashboard/admin-create");
    } else if (selectedRole === "supplier") {
      navigate("/login-page");
    }
    onClose(); // Close the modal after navigation
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 font-roboto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1"
        >
          ×
        </button>
        <h2 className="text-xl text-blue-400 font-semibold text-center mb-4">
          Choose Your Role
        </h2>
        <div className="border border-gray-800 rounded-md overflow-hidden">
          <button
            onClick={() => handleRoleSelect("customer")}
            className={`w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800 ${
              selectedRole === "customer" ? "bg-gray-300" : ""
            }`}
          >
            <img src="/image/4.png" alt="Customer" className="mr-2 w-6 h-6" />
            Customer
          </button>
          <button
            onClick={() => handleRoleSelect("retailer")}
            className={`w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800 ${
              selectedRole === "retailer" ? "bg-gray-300" : ""
            }`}
          >
            <img src="/image/5.png" alt="Retailer" className="mr-2 w-6 h-6" />
            Retailer
          </button>
          <button
            onClick={() => handleRoleSelect("supplier")}
            className={`w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 rounded-b-md ${
              selectedRole === "supplier" ? "bg-gray-300" : ""
            }`}
          >
            <img src="/image/6.png" alt="Supplier" className="mr-2 w-6 h-6" />
            Supplier
          </button>
        </div>
        <button
          onClick={handleContinue}
          disabled={!selectedRole} // Disable button if no role is selected
          className={`mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 block text-center ${
            !selectedRole ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RoleSelectionModal;
