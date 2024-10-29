import React from "react";

const ConfirmDeactivationPopup = ({onCancel, onConfirm}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Confirm Deactivation</h2>
          <button
            onClick={onCancel}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-700 mt-4">
          This action will revoke the employee's access immediately. Do you want
          to proceed?
        </p>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeactivationPopup;
// import React, { useState } from 'react';
// import ConfirmDeactivationPopup from './ConfirmDeactivationPopup';

// const App = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handleCancel = () => {
//     setIsPopupVisible(false);
//   };

//   const handleConfirm = () => {
//     // Add your confirmation logic here
//     setIsPopupVisible(false);
//     console.log('Employee deactivated');
//   };

//   return (
//     <div className="App">
//       <button
//         onClick={() => setIsPopupVisible(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Deactivate Employee
//       </button>

//       {isPopupVisible && (
//         <ConfirmDeactivationPopup onCancel={handleCancel} onConfirm={handleConfirm} />
//       )}
//     </div>
//   );
// };

// export default App;
