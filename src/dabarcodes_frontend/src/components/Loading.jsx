import React from "react";

const Loading = () => {
  return (
  <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
       
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        <p className="mt-4 text-lg font-medium text-gray-500">
          Loading, please wait...
        </p>
      </div>
    </div>
    </>
  );
};

export default Loading;