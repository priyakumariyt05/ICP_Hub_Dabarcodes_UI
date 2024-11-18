// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { TfiMedall } from "react-icons/tfi";

// const Sidebar = ({ sections }) => {
//   const [openSection, setOpenSection] = useState(""); 
//   const location = useLocation(); 

//   const handleToggle = (section) => {
//     setOpenSection((prev) => (prev === section ? "" : section));
//   };

//   return (
//     <div className="w-full md:w-1/4 p-4 shadow-lg rounded-lg md:h-[calc(100vh-2rem)]">
//       <ul className="mt-10">
//         {sections.map((section) => (
//           <li key={section.name} className="px-6 py-3 hover:bg-gray-200 cursor-pointer" onClick={() => handleToggle(section.name)}>
//             <div className="flex justify-between items-center">
//               <Link to={section.path} className="flex items-center">
//                 {section.icon} {section.name}
//               </Link>
//               {openSection === section.name ? <AiOutlineMinus /> : <AiOutlinePlus />}
//             </div>

//             {openSection === section.name && section.subsections && (
//               <ul className="ml-8">
//                 {section.subsections.map((sub) => (
//                   <li
//                     key={sub.name}
//                     className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${location.pathname === sub.path ? "bg-sky-300" : ""}`}
//                   >
//                     <Link to={sub.path}>
//                       <AiOutlineMinus className="inline-block mr-2" /> {sub.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
