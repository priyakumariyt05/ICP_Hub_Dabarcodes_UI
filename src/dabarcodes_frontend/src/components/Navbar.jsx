// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import ConnectWalletModal from "../SmallPages/ConnectWalletModal";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="bg-white shadow-lg relative z-10">
//       {/* Top Navbar */}
//       <div className="flex items-center justify-between px-4 py-3 md:px-8">
//         {/* Left section */}
//         <div className="flex items-center space-x-4">
//           <FaBars
//             className="text-2xl cursor-pointer md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//           <div className="text-xl font-bold text-blue-500">
//             <img src="/image/image 40.png" alt="" />
//           </div>
//           <nav className="hidden md:flex space-x-4">
//             <a
//               href="#home"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               About Us
//             </a>
//             <a
//               href="#for-customer"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               For Customers
//             </a>
//             <a
//               href="#for-supplier"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               For Suplier
//             </a>
//             <a
//               href="#for-retailer"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               For Retailer
//             </a>
//             <a
//               href="#for-subscription"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               Subscription
//             </a>
//             <a
//               href="#testimonials"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               Testiomonials
//             </a>
//             <a
//               href="#partner"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               Our Partners
//             </a>
//           </nav>
//         </div>
//         {/* <div className="auth-buttons">
//           <Link to="/connect-wallet" className="no-underline">
//             <button className="login-signup ml-4 text-white font-medium bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-roboto">
//               Login/Signup
//             </button>
//           </Link>
//         </div> */}

//         <div className="auth-buttons">
//           <button
//             onClick={handleOpenModal}
//             className="login-signup ml-4 text-white font-medium bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-roboto"
//           >
//             Login/Signup
//           </button>
//         </div>

//         {/* Render ConnectWalletModal if isModalOpen is true */}
//         {isModalOpen && <ConnectWalletModal onClose={handleCloseModal} />}
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-2 z-20 font-roboto">
//           <a href="/home" className="text-[#171717] hover:text-blue-500">
//             Home
//           </a>
//           <a href="" className="text-[#171717] hover:text-blue-500 font-roboto">
//             About Us
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             For Customers
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             ForSuplier
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             Subscription
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             Testiomnails
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             Our Partners
//           </a>
//         </div>
//       )}

//       <div className="bg-blue-500 text-white text-right py-2 pr-4 font-roboto">
//         How to use daBarcodes
//       </div>

//       {/* <div className="px-4 py-2 text-sm text-gray-600">
//         Home / section1 / section2
//       </div> */}

//       <div className="px-4 py-2 text-sm text-gray-600 font-roboto">
//         <Link to="/" className=" hover:underline">
//           Home
//         </Link>
//         /
//         <Link to="/section1" className=" hover:underline">
//           section1
//         </Link>
//         /
//         <Link to="/homepage" className=" hover:underline">
//           section2
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ConnectWalletModal from "../SmallPages/ConnectWalletModal";
import RoleSelectionModal from "../SmallPages/RoleSelectionModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(false);
  const [isRoleSelectionModalOpen, setIsRoleSelectionModalOpen] = useState(false);

  const handleOpenConnectWalletModal = () => {
    setIsConnectWalletModalOpen(true);
  };

  const handleCloseConnectWalletModal = () => {
    setIsConnectWalletModalOpen(false);
  };

  const handleOpenRoleSelectionModal = () => {
    setIsRoleSelectionModalOpen(true);
  };

  const handleCloseRoleSelectionModal = () => {
    setIsRoleSelectionModalOpen(false);
  };

  const handleNext = () => {
    handleOpenRoleSelectionModal(); // Open the Role Selection modal
  };

  return (
    <div className="bg-white shadow-lg relative z-10">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <FaBars
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div className="text-xl font-bold text-blue-500">
            <img src="/image/image 40.png" alt="" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-[#171717] hover:text-blue-500 font-roboto">Home</a>
            <a href="#about" className="text-[#171717] hover:text-blue-500 font-roboto">About Us</a>
            <a href="#for-customer" className="text-[#171717] hover:text-blue-500 font-roboto">For Customers</a>
            <a href="#for-supplier" className="text-[#171717] hover:text-blue-500 font-roboto">For Supplier</a>
            <a href="#for-retailer" className="text-[#171717] hover:text-blue-500 font-roboto">For Retailer</a>
            <a href="#for-subscription" className="text-[#171717] hover:text-blue-500 font-roboto">Subscription</a>
            <a href="#testimonials" className="text-[#171717] hover:text-blue-500 font-roboto">Testimonials</a>
            <a href="#partner" className="text-[#171717] hover:text-blue-500 font-roboto">Our Partners</a>
          </nav>
        </div>
        
        <div className="auth-buttons">
          <button
            onClick={handleOpenConnectWalletModal}
            className="login-signup ml-4 text-white font-medium bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-roboto"
          >
            Login/Signup
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-2 z-20 font-roboto">
          <a href="/home" className="text-[#171717] hover:text-blue-500">Home</a>
          <a href="#about" className="text-[#171717] hover:text-blue-500">About Us</a>
          <a href="#" className="text-[#171717] hover:text-blue-500">For Customers</a>
          <a href="#" className="text-[#171717] hover:text-blue-500">For Supplier</a>
          <a href="#" className="text-[#171717] hover:text-blue-500">Subscription</a>
          <a href="#" className="text-[#171717] hover:text-blue-500">Testimonials</a>
          <a href="#" className="text-[#171717] hover:text-blue-500">Our Partners</a>
        </div>
      )}

      <div className="bg-blue-500 text-white text-right py-2 pr-4 font-roboto">
        How to use daBarcodes
      </div>

      <div className="px-4 py-2 text-sm text-gray-600 font-roboto">
        <Link to="/" className=" hover:underline">Home</Link> / 
        <Link to="/section1" className=" hover:underline">section1</Link> / 
        <Link to="/homepage" className=" hover:underline">section2</Link>
      </div>

      {/* Render ConnectWalletModal if isConnectWalletModalOpen is true */}
      {isConnectWalletModalOpen && (
        <ConnectWalletModal 
          onClose={handleCloseConnectWalletModal} 
          onNext={handleNext} // Pass handleNext function to ConnectWalletModal
        />
      )}

      {/* Render RoleSelectionModal if isRoleSelectionModalOpen is true */}
      {isRoleSelectionModalOpen && <RoleSelectionModal onClose={handleCloseRoleSelectionModal} />}
    </div>
  );
}

export default Navbar;
