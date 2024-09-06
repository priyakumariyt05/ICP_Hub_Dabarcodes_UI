// import React, { useState } from 'react';

// const ConnectWalletModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* Container to center the button */}
//       <div className="h-screen flex items-center justify-center">
//         <button onClick={openModal} className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//           Open Connect Wallet Modal
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1">
//               ×
//             </button>
//             <h2 className="text-xl font-semibold text-center mb-4">Connect Wallet</h2>
//             <div className="border border-gray-800 rounded-md overflow-hidden">
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-blue-100 border-b border-gray-800">
//                 <img src="/image/1.png" alt="ICP Login" className="mr-4" />
//                 ICP Login
//               </button>
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-purple-100 border-b border-gray-800">
//                 <img src="/image/2.png" alt="NFID" className="mr-4" />
//                 NFID
//               </button>
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-indigo-100 rounded-b-md">
//                 <img src="/image/3.png" alt="Bifinity" className="mr-4" />
//                 Bifinity
//               </button>
//             </div>
//             <div className="my-4 flex items-center">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="px-2 text-gray-500">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//             <div>
//               <input 
//                 type="email" 
//                 placeholder="Continue using email" 
//                 className="w-full p-3 border rounded-md mb-4"
//               />
//               <button className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ConnectWalletModal;
// import React, { useState } from 'react';

// const ConnectWalletModal = () => {
//   // Set the modal to be open by default
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1">
//               ×
//             </button>
//             <h2 className="text-xl font-semibold text-center mb-4">Connect Wallet</h2>
//             <div className="border border-gray-800 rounded-md overflow-hidden">
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-blue-100 border-b border-gray-800">
//                 <img src="/image/1.png" alt="ICP Login" className="mr-4" />
//                 ICP Login
//               </button>
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-purple-100 border-b border-gray-800">
//                 <img src="/image/2.png" alt="NFID" className="mr-4" />
//                 NFID
//               </button>
//               <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-indigo-100 rounded-b-md">
//                 <img src="/image/3.png" alt="Bifinity" className="mr-4" />
//                 Bifinity
//               </button>
//             </div>
//             <div className="my-4 flex items-center">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="px-2 text-gray-500">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//             <div>
//               <input 
//                 type="email" 
//                 placeholder="Continue using email" 
//                 className="w-full p-3 border rounded-md mb-4"
//               />
//               <button className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ConnectWalletModal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ConnectWalletModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextClick = () => {
    navigate('/role-selection'); 
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1">
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">Connect Wallet</h2>
            <div className="border border-gray-800 rounded-md overflow-hidden">
              <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-blue-100 border-b border-gray-800">
                <img src="/image/1.png" alt="ICP Login" className="mr-4" />
                ICP Login
              </button>
              <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-purple-100 border-b border-gray-800">
                <img src="/image/2.png" alt="NFID" className="mr-4" />
                NFID
              </button>
              <button className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-indigo-100 rounded-b-md">
                <img src="/image/3.png" alt="Bifinity" className="mr-4" />
                Bifinity
              </button>
            </div>
            <div className="my-4 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Continue using email" 
                className="w-full p-3 border rounded-md mb-4"
              />
              <button
                onClick={handleNextClick}
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectWalletModal;

