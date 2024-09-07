import React, { useState } from "react";
const SkuModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFixedSkuClick = () => {
    console.log("Link as Fixed SKU");
    handleClose();
  };

  const handleFloatingSkuClick = () => {
    console.log("Link as Floating SKU");
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative text-center">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1"
            >
              &times;
            </button>
            <p className="text-gray-700 mb-4">
              You&apos;re about to link this SKU to your account. Once linked,
              this action is irreversible.
            </p>
            <p className="text-gray-700 mb-4">
              Are you sure you want to proceed?
            </p>
            <div className="flex flex-col justify-center space-y-4 mb-4">
              <button
                onClick={handleFixedSkuClick}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Link as Fixed SKU
              </button>
              <button
                onClick={handleFloatingSkuClick}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Link as Floating SKU
              </button>
            </div>
            <p className="text-gray-700">
              Available Utility Tokens: <span className="font-bold">04</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SkuModal;
