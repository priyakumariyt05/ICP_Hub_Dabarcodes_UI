import React from "react";

const PromotionalDetailsPopup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-50">
      {/* QR code */}

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="/image/image 63.png"
            alt="QR Code"
          />
        </div>
        <h2 className="text-center text-xl font-bold mb-6">
          Promotional Details
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                value="Nestle Coffee"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Supplier Name
              </label>
              <input
                type="text"
                value="Nestle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand Name
              </label>
              <input
                type="text"
                value="Nestle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Umbrella Brand Name
              </label>
              <input
                type="text"
                value="Nestle"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Original Price
              </label>
              <input
                type="text"
                value="$45"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price after Promotion
              </label>
              <input
                type="text"
                value="$38"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Promotional Description
            </label>
            <textarea
              value="20% off on all Deluxe Beach Towel Sets for the summer season"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromotionalDetailsPopup;
// import React, {useState} from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const PromotionalDetailsPopup = ({closePopup}) => {
//   // Form state management
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);
//   const [formData, setFormData] = useState({
//     productName: "Nestle Coffee",
//     supplierName: "Nestle",
//     brandName: "Nestle",
//     umbrellaBrandName: "Nestle",
//     originalPrice: "$45",
//     priceAfterPromotion: "$38",
//     description: "20% off on all Deluxe Beach Towel Sets for the summer season",
//   });

//   // Validation state
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle date validation
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (endDate && startDate && endDate < startDate) {
//       setErrorMessage("End date must be after start date.");
//       return;
//     }
//     setErrorMessage("");
//     // Submit form logic here...
//     console.log("Form submitted:", formData, startDate, endDate);
//     closePopup(); // Close the popup after submission
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         {/* QR code */}
//         <div className="flex justify-center mb-4">
//           <img
//             src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.example.com"
//             alt="QR Code"
//           />
//         </div>

//         <h2 className="text-center text-xl font-bold mb-6">
//           Promotional Details
//         </h2>

//         {/* Error message */}
//         {errorMessage && (
//           <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
//             {errorMessage}
//           </div>
//         )}

//         <form onSubmit={handleFormSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             {/* Product Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.productName}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 readOnly
//               />
//             </div>

//             {/* Supplier Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Supplier Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.supplierName}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 readOnly
//               />
//             </div>

//             {/* Brand Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Brand Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.brandName}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 readOnly
//               />
//             </div>

//             {/* Umbrella Brand Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Umbrella Brand Name
//               </label>
//               <input
//                 type="text"
//                 value={formData.umbrellaBrandName}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 readOnly
//               />
//             </div>

//             {/* Start Date */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Start Date
//               </label>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 dateFormat="dd.MM.yyyy"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>

//             {/* End Date */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 End Date
//               </label>
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date) => setEndDate(date)}
//                 dateFormat="dd.MM.yyyy"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>

//             {/* Original Price */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Original Price
//               </label>
//               <input
//                 type="text"
//                 value={formData.originalPrice}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 readOnly
//               />
//             </div>

//             {/* Price After Promotion */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Price after Promotion
//               </label>
//               <input
//                 type="text"
//                 value={formData.priceAfterPromotion}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 readOnly
//               />
//             </div>
//           </div>

//           {/* Promotional Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Promotional Description
//             </label>
//             <textarea
//               value={formData.description}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               rows="3"
//               readOnly
//             />
//           </div>

//           {/* Close and Submit buttons */}
//           <div className="flex justify-end space-x-4 mt-6">
//             <button
//               type="button"
//               onClick={closePopup}
//               className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//             >
//               Close
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PromotionalDetailsPopup;
