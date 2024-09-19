import React from "react";
import { Link } from "react-router-dom";

const GetQrCodeButton = () => {
  return (
   
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-roboto">
  <Link to="/overlay-multiple" className="text-white">
    Get QR Codes
  </Link>
</button>
  );
};

export default GetQrCodeButton;