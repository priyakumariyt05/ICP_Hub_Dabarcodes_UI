// import React, { useState } from 'react';

// const AddStoreModal = ({ onClose }) => {
//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     storeName: '',
//     storeType: '',
//     country: '',
//     state: '',
//     city: '',
//     postalCode: '',
//     employeeName: '',
//     email: '',
//     phoneNumber: '',
//     assignedRole: ''
//   });

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., API call)
//     console.log(formData);
//   };

//   return (
//     <div className="inset-0 bg-opacity-50 flex justify-center items-center font-roboto">
//       <div className=" w-full max-w-4xl p-8  m-4">
//         <h2 className="text-center text-2xl font-semibold mb-6">Add New Store</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Store Name and Store Type */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Store Name *</label>
//               <input
//                 type="text"
//                 name="storeName"
//                 value={formData.storeName}
//                 onChange={handleChange}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Store Type *</label>
//               <input
//                 type="text"
//                 name="storeType"
//                 value={formData.storeType}
//                 onChange={handleChange}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//           </div>

//           {/* Store Location */}
//           <h3 className="text-lg font-semibold mb-4">Store Location</h3>
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Country *</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">State *</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">City *</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Select"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Postal Code *</label>
//               <input
//                 type="text"
//                 name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 placeholder="Postal Code"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//           </div>

//           {/* Add Employee */}
//           <h3 className="text-lg font-semibold mb-4">Add Employee</h3>
//           <div className="grid grid-cols-2 gap-6 mb-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Employee Name *</label>
//               <input
//                 type="text"
//                 name="employeeName"
//                 value={formData.employeeName}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Email *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full border border-gray-300 rounded-md p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Phone Number</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Assigned Role</label>
//               <input
//                 type="text"
//                 name="assignedRole"
//                 value={formData.assignedRole}
//                 onChange={handleChange}
//                 placeholder="Assigned Role"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Save details
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddStoreModal;


// working.................................
// import React, {useState} from "react";

// const AddStoreModal = ({onClose, handleAddStore}) => {
//   const [formData, setFormData] = useState({
//     // id: "",
//     // name: "",
//     // location: "",
//     // type: "",
//     // suppliers: 0,
//     // products: 0,
//     storeName: "",
//     storeType: "",
//     country: "",
//     state: "",
//     city: "",
//     postalCode: "",
//     employeeName: "",
//     email: "",
//     phoneNumber: "",
//     assignedRole: "",
//   });

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prevData) => ({...prevData, [name]: value}));
//   };

//   const handleSubmit = () => {
//     // Validate if all fields are filled
//     if (
//       formData.id &&
//       formData.name &&
//       formData.location &&
//       formData.type &&
//       formData.suppliers &&
//       formData.products
//       //     formData.storeType &&
//       // formData.storeName &&
//       // formData.country &&
//       // formData.state &&
//       // formData.city &&
//       // formData.postalCode &&
//       // formData.employeeName &&
//       // formData.email &&
//       //   formData.phoneNumber &&
//       //     formData.assignedRole 
           
//     ) {
//       handleAddStore(formData); // Pass the new store data to parent
//       onClose(); // Close the modal after submission
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <>
//       <div className="p-4">
//       <h2>Add New Store</h2>
//       <div className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="id"
//           placeholder="Store ID"
//           value={formData.id}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Store Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={formData.location}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="type"
//           placeholder="Store Type"
//           value={formData.type}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="number"
//           name="suppliers"
//           placeholder="Number of Suppliers"
//           value={formData.suppliers}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="number"
//           name="products"
//           placeholder="Number of Products"
//           value={formData.products}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//       </div>

//       <div className="mt-4 flex justify-end gap-2">
//         <button onClick={onClose} className="border px-4 py-2 rounded">
//           Cancel
//         </button>
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Store
//         </button>
//       </div>
//     </div>
      
//     </>
//   );
// };

// export default AddStoreModal;
// ..................................................

import React, {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStoreModal = ({onClose, handleAddStore}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
    type: "",
    suppliers: "",
    products: "",
    activePromotions:"",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  const handleSubmit = () => {
    const {id, name, location, type, suppliers, products} = formData;

    if (id && name && location && type && suppliers && products) {
      handleAddStore(formData); // Add store data in the parent
      toast.success("Store added successfully! 🎉");

      // Close the modal after a small delay to ensure the toast renders
      setTimeout(() => {
        onClose();
      }, 3000); // 3-second delay to allow the toast to show
    } else {
      toast.error("Please fill in all the fields.");
    }
  };

  return (
    <>
      <div className="p-4">
        <h2>Add New Store</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="id"
            placeholder="Store ID"
            value={formData.id}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="name"
            placeholder="Store Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="type"
            placeholder="Store Type"
            value={formData.type}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="suppliers"
            placeholder="Number of Suppliers"
            value={formData.suppliers}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="products"
            placeholder="Number of Products"
            value={formData.products}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="activePromotions"
            placeholder="Active Promotion"
            value={formData.activePromotions}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Store
          </button>
        </div>
      </div>

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default AddStoreModal;





// {/* <div className="inset-0 bg-opacity-50 flex justify-center items-center font-roboto">
//   <div className=" w-full max-w-4xl p-8  m-4">
//     <h2 className="text-center text-2xl font-semibold mb-6">Add New Store</h2>

//     <form onSubmit={handleSubmit}>
//       {/* Store Name and Store Type */}{" "}
//       <div className="grid grid-cols-2 gap-6 mb-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Store Name *</label>
//           <input
//             type="text"
//             name="storeName"
//             value={formData.storeName}
//             onChange={handleChange}
//             placeholder="Select"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Store Type *</label>
//           <input
//             type="text"
//             name="storeType"
//             value={formData.storeType}
//             onChange={handleChange}
//             placeholder="Select"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//       </div>
//       {/* Store Location */}
//       <h3 className="text-lg font-semibold mb-4">Store Location</h3>
//       <div className="grid grid-cols-2 gap-6 mb-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Country *</label>
//           <input
//             type="text"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             placeholder="Select"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">State *</label>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             placeholder="Select"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">City *</label>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Select"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Postal Code *
//           </label>
//           <input
//             type="text"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             placeholder="Postal Code"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//       </div>
//       {/* Add Employee */}
//       <h3 className="text-lg font-semibold mb-4">Add Employee</h3>
//       <div className="grid grid-cols-2 gap-6 mb-6">
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Employee Name *
//           </label>
//           <input
//             type="text"
//             name="employeeName"
//             value={formData.employeeName}
//             onChange={handleChange}
//             placeholder="Name"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Email *</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Assigned Role
//           </label>
//           <input
//             type="text"
//             name="assignedRole"
//             value={formData.assignedRole}
//             onChange={handleChange}
//             placeholder="Assigned Role"
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//       </div>
//       {/* Buttons */}
//       <div className="flex justify-center gap-4">
//         <button
//           type="button"
//           onClick={onClose}
//           className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Save details
//         </button>
//       </div>
//     </form>
//   </div>
// </div>; */}
