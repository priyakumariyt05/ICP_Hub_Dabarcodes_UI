// import React from 'react';
// const Asidebar = ({ sidebarOpen }) => {
//   return (
//     <div
//       className={`bg-[#D1EDFF] w-2/3 md:w-1/3 p-6 rounded-lg transition-transform duration-300 ease-in-out 
//         ${sidebarOpen ? "fixed top-0 left-0 h-full z-40" : "hidden"} md:block`}
//     >
//       <div className="mb-8">
//         <img
//           src="/image/image 40.png"
//           alt="Logo"
//           className="h-8 w-auto mb-8"
//         />
//       </div>
//       <h2 className="text-xl font-bold mb-8">Become Our Retailer</h2>
//       <img src="/image/dash.png" alt="" />
//     </div>
//   );
// };

// export default Asidebar;
import React from 'react';

const Asidebar = ({ sidebarOpen, title }) => {
  return (
    <div
      className={`bg-[#D1EDFF] w-2/3 md:w-1/3 p-6 rounded-lg transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "fixed top-0 left-0 h-full z-40" : "hidden"} md:block`}
    >
      <div className="mb-8">
        <img
          src="/image/image 40.png"
          alt="Logo"
          className="h-8 w-auto mb-8"
        />
      </div>
      <h2 className="text-xl font-bold mb-8">{title}</h2>
      <img src="/image/dash.png" alt="" />
    </div>
  );
};

export default Asidebar;
