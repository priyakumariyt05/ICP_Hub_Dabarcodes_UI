// import React from "react";
// import { FaCheck } from "react-icons/fa";

// const ProfileSidebar = ({ sidebarOpen, currentStep }) => {
//   const steps = [
//     { label: "Personal Details", step: 1 },
//     { label: "Contact Details", step: 2 },
//     { label: "Additional Information", step: 3 },
//     { label: "Privacy Preferences", step: 4 },
//     { label: "Create Password", step: 5 },
//   ];

//   return (
//     <div
//       className={`bg-[#D1EDFF] w-2/3 md:w-1/3 p-6 rounded-lg transition-transform duration-300 ease-in-out 
//         ${sidebarOpen ? "fixed top-0 left-0 h-full z-40" : "hidden"} md:block`}
//     >
//       <div className="mb-8">
//         <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
//       </div>
//       <h2 className="text-xl font-bold mb-8">Create Account</h2>

//       <ul className="relative">
//         {steps.map(({ label, step }, index) => (
//           <li key={step} className="relative flex items-center mb-12">
//             <div
//               className={`w-8 h-8 flex items-center justify-center rounded-full relative z-10 ${
//                 currentStep >= step
//                   ? "bg-[#0E95F5] text-white"
//                   : "bg-[#b9bfc4] text-white"
//               }`}
//             >
//               {currentStep > step ? <FaCheck /> : step}
//             </div>
//             <span
//               className={`ml-4 text-[#333] font-medium ${
//                 currentStep === step ? "font-bold" : ""
//               }`}
//             >
//               {label}
//             </span>
//             {/* Render line only if currentStep is greater than the step */}
//             {currentStep > step && (
//               <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#0E95F5]"></div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProfileSidebar;
import React from "react";
import VerticalStep from "./VerticalStep";
import HorizontalStep from "./HorizontalStep";

const ProfileSidebar = ({sidebarOpen, currentStep}) => {
  return (
    // <div
    //   className={`md:bg-[#D1EDFF] bg-transparent md:w-1/3 w-full p-6 rounded-lg transition-transform duration-300 ease-in-out 
    //     ${sidebarOpen ? "fixed top-0 left-0 h-full z-40" : "hidden"} md:block`}
    // >
    <div
      className={`w-full md:w-1/4 bg-[#B5E8FB] md:bg-[#D1EDFF] p-4 shadow-lg bg-transparent rounded-lg md:h-[calc(100vh-2rem)] 
        ${sidebarOpen ? "fixed top-0 left-0 h-full z-40" : "hidden"} md:block`}
    >
      <div className="md:mb-8 hidden md:block">
        <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
      </div>
      <h2 className="text-xl font-bold mb-8 md:block hidden">Create Account</h2>

      {/* Render Vertical Stepper on Large Screens */}
      <VerticalStep currentStep={currentStep} />

      {/* Render Horizontal Stepper on Medium and Small Screens */}
      <HorizontalStep currentStep={currentStep} />
    </div>
  );
};

export default ProfileSidebar;




