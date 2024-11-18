import React from "react";
import {useNavigate} from "react-router-dom";
import BackButton from "../../Dashboard/Reusable/BackButton";


const Documentation = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="p-6">
      {/* Back button with arrow icon */}
      <div className="flex flex-grow">
        <BackButton/>
        <h1 className="text-2xl font-bold ">Documentations</h1>
      </div>

      <div className=" pt-4">
        <p className="font-semibold mb-6">
          Learn how to get started as a Retailer
        </p>

        {/* Documentation sections */}
        <div className="mb-6">
          <p className="text-gray-600">
            There will be the documentation to get started with the daBarcodes
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            There will be the documentation to get started with the daBarcodes
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            There will be the documentation to get started with the daBarcodes
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            There will be the documentation to get started with the daBarcodes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
