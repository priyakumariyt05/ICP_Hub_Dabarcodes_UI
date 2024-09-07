import React, { useState, useEffect } from "react";

const SessionTimeoutModal = () => {
  const [timeLeft, setTimeLeft] = useState(62); // 1 min 2 sec
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Optionally handle timeout logic here
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} min ${secs} sec`; // Use backticks for template literals
  };

  const handleContinue = () => {
    // Logic for continue action
    alert("Continue working");
    setIsOpen(false); // Close the modal after continuing
  };

  const handleLogOff = () => {
    // Logic for log off action
    alert("Logging off");
    setIsOpen(false); // Close the modal after logging off
  };

  const handleClose = () => {
    setIsOpen(false); // Logic for closing the modal
  };

  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 font-roboto">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold">Session Timeout</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-600">
            <span className="text-blue-600">
              &#x1F551; Your session is expiring in
            </span>
          </p>
          <p className="text-center text-2xl font-semibold mt-2">
            {formatTime(timeLeft)}
          </p>
          <p className="text-center text-gray-600 mt-4">
            Please click <span className="font-semibold">"Continue"</span> to
            keep working; or click{" "}
            <span className="font-semibold">"Log off"</span> to end your session
            now.
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleContinue}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Continue
          </button>
          <button
            onClick={handleLogOff}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Log off
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeoutModal;
