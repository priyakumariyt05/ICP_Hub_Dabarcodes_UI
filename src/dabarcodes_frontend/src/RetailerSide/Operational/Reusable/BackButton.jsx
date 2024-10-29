import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa6";
const BackButton = () => {
      const navigate = useNavigate();
  return (
    <>
      <button
        className="mb-4 text-[#0D90C1]  underline flex items-center"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        <FaArrowLeft className="mr-4 border border-black border-spacing-1 rounded-full text-4xl p-2" />{" "}
        {/* Arrow icon */}
      </button>
    </>
  );
}

export default BackButton