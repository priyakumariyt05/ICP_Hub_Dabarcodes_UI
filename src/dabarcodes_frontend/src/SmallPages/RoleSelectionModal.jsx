
// import React, { useState } from 'react';

// const RoleSelectionModal = () => {
//   // State to manage modal 
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* Button to open the modal */}
//       <div className="h-screen flex items-center justify-center">
//         <button onClick={openModal} className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//           Open Role Selection Modal
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full relative">
//             <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1">
//               &times;
//             </button>
//             <h2 className="text-xl text-blue-400 font-semibold text-center m-6">Choose your Role</h2>
//             <div className="border border-gray-800 rounded-md overflow-hidden">
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800">
//                 <img src="/image/4.png" alt="Customer" className="mr-2 w-6 h-6" />
//                 Customer
//               </button>
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800">
//                 <img src="/image/5.png" alt="Retailer" className="mr-2 w-6 h-6" />
//                 Retailer
//               </button>
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 rounded-b-md">
//                 <img src="/image/6.png" alt="Supplier" className="mr-2 w-6 h-6" />
//                 Supplier
//               </button>
//             </div>
//             <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default RoleSelectionModal;


import React, { useState } from 'react';

const RoleSelectionModal = () => {
  // State to manage modal 
  const [isModalOpen, setIsModalOpen] = useState(true); 

 
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1">
              &times;
            </button>
            <h2 className="text-xl text-blue-400 font-semibold text-center m-6">Choose your Role</h2>
            <div className="border border-gray-800 rounded-md overflow-hidden">
              <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800">
                <img src="/image/4.png" alt="Customer" className="mr-2 w-6 h-6" />
                Customer
              </button>
              <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 border-b border-gray-800">
                <img src="/image/5.png" alt="Retailer" className="mr-2 w-6 h-6" />
                Retailer
              </button>
              <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-gray-300 rounded-b-md">
                <img src="/image/6.png" alt="Supplier" className="mr-2 w-6 h-6" />
                Supplier
              </button>
            </div>
            <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RoleSelectionModal;
