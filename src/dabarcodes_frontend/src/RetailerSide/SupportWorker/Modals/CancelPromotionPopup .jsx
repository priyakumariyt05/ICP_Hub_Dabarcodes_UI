import React, {useState} from "react";

const CancelPromotionPopup = ({onCancel, onConfirm}) => {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    // Add your confirmation logic here, using the reason if needed
    onConfirm(reason);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold text-center">
          Do you really want to cancel the promotion?
        </h2>

        <div className="text-center mt-4">
          <h3 className="text-md font-medium">Promotion Details</h3>
          <p className="text-lg font-semibold">20% off on Blueberries</p>
          <p className="text-sm text-gray-500">by Appy Limited</p>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-1">
            Provide reason for rejection <span className="text-red-500">*</span>
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Message..."
          ></textarea>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            No
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelPromotionPopup;



// import React, { useState } from 'react';
// import CancelPromotionPopup from './CancelPromotionPopup';

// const App = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleCancel = () => {
//     setIsPopupVisible(false);
//   };

//   const handleConfirm = (reason) => {
//     // Add your logic for confirmation using the reason
//     setIsPopupVisible(false);
//     console.log('Promotion canceled with reason:', reason);
//   };

//   return (
//     <div className="App">
//       <button
//         onClick={() => setIsPopupVisible(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Cancel Promotion
//       </button>

//       {isPopupVisible && (
//         <CancelPromotionPopup onCancel={handleCancel} onConfirm={handleConfirm} />
//       )}
//     </div>
//   );
// };

// export default App;
