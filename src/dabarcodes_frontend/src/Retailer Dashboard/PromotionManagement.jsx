
// import React from 'react';
// import Sidebar from './Sidebar';
// import { FaFilter, FaSearch } from 'react-icons/fa';

// const PromotionManagement = () => {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar />

//       <div className="flex-grow p-8 bg-gray-50 overflow-y-auto md:ml-64">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
//         </header>
        
//         <div className="flex items-center justify-end space-x-4 mb-10">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <button className="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg py-2 px-4">
//             <FaFilter className="text-gray-500" />
//             <span className="text-gray-600">Filters</span>
//           </button>
//         </div>

//         <div className="bg-white shadow rounded-lg overflow-x-auto">
//           <table className="min-w-full table-auto">
//             <thead>
//             <tr className="text-left bg-[#F9F9FD]">
//                   <th className="p-4">Status ↓</th>
//                   <th className="p-4">Promotion Name ↓</th>
//                   <th className="p-4">Start Date ↓</th>
//                   <th className="p-4">End Date ↓</th>
//                   <th className="p-4">Validity Status ↓</th>
//                   <th className="p-4">Decision Status ↓</th>
//                 </tr>
//             </thead>
//             <tbody>
//             <tr className="border-t border-b">
//                 <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//  New
//   </span>
// </td>
//                   <td className="p-4">Promotional Event</td>
//                   <td className="p-4">2024, August 17</td>
//                   <td className="p-4">2024, October 17</td>
                  
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Approved</td>
//                 </tr>
//                 <tr className="border-t border-b">
//                 <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//  New
//   </span>
// </td>
//                   <td className="p-4">$40 off</td>
//                   <td className="p-4">2024, August 12</td>
//                   <td className="p-4">2024, October 17</td>
                  
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Approved</td>
//                 </tr>
//                 <tr className="border-t border-b">
//                 <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//  New
//   </span>
// </td>
//                   <td className="p-4">$40 off</td>
//                   <td className="p-4">2024, August 13</td>
//                   <td className="p-4">2024, October 17</td>
                  
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Approved</td>
//                 </tr>
//                 <tr className="border-t border-b">
//                 <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//  New
//   </span>
// </td>
//                   <td className="p-4">12% off</td>
//                   <td className="p-4">2024, August 17</td>
//                   <td className="p-4">2024, October 17</td>
                  
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Approved</td>
//                 </tr>
//                 <tr className="border-t border-b">
//                 <td className="p-4"></td>
//                   <td className="p-4">30%</td>
//                   <td className="p-4">2024, August 17</td>
//                   <td className="p-4">2024, October 17</td>
                  
//                   <td className="p-4">
//   <span
//     className="inline-block text-[#B42700] rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#FFEBE6' }}
//   >
// Ended
//   </span>
// </td>
// <td className="p-4">Rejected</td>
//                 </tr>
//                 <tr className="border-t border-b">
//                 <td className="p-4"></td>
//                   <td className="p-4">32%</td>
//                   <td className="p-4">2024, September 17</td>
//                   <td className="p-4">2024, October 17</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Rejected</td>
//                 </tr>

//                 <tr className="border-t border-b">
//                 <td className="p-4">
//   <span
//     className="inline-block text-[#716423] rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#FFFAE4' }}
//   >
//     Pending
//   </span>
// </td>
//                   <td className="p-4">32%</td>
//                   <td className="p-4">2024, September 17</td>
//                   <td className="p-4">2024, October 17</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
// Active
//   </span>
// </td>
// <td className="p-4">
// <div className="flex space-x-4">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Approve</button>
//           <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Reject</button>
//         </div>
// </td>

//                 </tr>




//                 <tr className="border-t border-b">
//                 <td className="p-4"></td>
//                   <td className="p-4">32%</td>
//                   <td className="p-4">2024, September 17</td>
//                   <td className="p-4">2024, October 17</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Rejected</td>
//                 </tr>
//                 <tr className="border-t border-b">
//                 <td className="p-4"></td>
//                   <td className="p-4">32%</td>
//                   <td className="p-4">2024, September 17</td>
//                   <td className="p-4">2024, October 17</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     Active
//   </span>
// </td>
// <td className="p-4">Rejected</td>
//                 </tr>
//             </tbody>
//           </table>

//           <div className="flex justify-between items-center mt-4 p-4">
//             <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]">Previous</button>
//             <span className="text-gray-600">Page 1 of 10</span>
//             <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]">Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromotionManagement;

// 1stt
// import React, { useState } from 'react';
// // import Sidebar from './Sidebar';
// import { FaFilter, FaSearch } from 'react-icons/fa';

// const PromotionManagement = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; 

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* <Sidebar /> */}

//       <div className="flex-grow p-8 bg-gray-50 overflow-y-auto md:ml-64">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
//         </header>
        
//         <div className="flex items-center justify-end space-x-4 mb-10">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <button className="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg py-2 px-4">
//             <FaFilter className="text-gray-500" />
//             <span className="text-gray-600">Filters</span>
//           </button>
//         </div>

//         <div className="bg-white shadow rounded-lg overflow-x-auto">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="text-left bg-[#F9F9FD]">
//                 <th className="p-4">Status</th>
//                 <th className="p-4">Promotion Name</th>
//                 <th className="p-4">Start Date</th>
//                 <th className="p-4">End Date</th>
//                 <th className="p-4">Validity Status</th>
//                 <th className="p-4">Decision Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Example rows, replace with actual data */}
//               {[
//                 {
//                   status: 'New',
//                   name: 'Promotional Event',
//                   startDate: '2024, August 17',
//                   endDate: '2024, October 17',
//                   validity: 'Active',
//                   decision: 'Approved'
//                 },
//                 {
//                   status: 'New',
//                   name: '$40 off',
//                   startDate: '2024, August 12',
//                   endDate: '2024, October 17',
//                   validity: 'Active',
//                   decision: 'Approved'
//                 },
//                 // Add more rows as needed
//               ].map((item, index) => (
//                 <tr key={index} className="border-t border-b">
//                   <td className="p-4">
//                     <span
//                       className={`inline-block text-gray-800 rounded-lg px-3 py-1 ${
//                         item.status === 'New'
//                           ? 'bg-[#EAFDEE]'
//                           : item.validity === 'Ended'
//                           ? 'bg-[#FFEBE6] text-[#B42700]'
//                           : 'bg-[#EAFDEE]'
//                       }`}
//                     >
//                       {item.status || item.validity}
//                     </span>
//                   </td>
//                   <td className="p-4">{item.name}</td>
//                   <td className="p-4">{item.startDate}</td>
//                   <td className="p-4">{item.endDate}</td>
//                   <td className="p-4">
//                     <span
//                       className={`inline-block text-gray-800 rounded-lg px-3 py-1 ${
//                         item.validity === 'Active'
//                           ? 'bg-[#EAFDEE]'
//                           : 'bg-[#FFEBE6] text-[#B42700]'
//                       }`}
//                     >
//                       {item.validity}
//                     </span>
//                   </td>
//                   <td className="p-4">{item.decision}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="flex justify-between items-center mt-4 p-4">
//             <button
//               onClick={handlePrevious}
//               disabled={currentPage === 1}
//               className="text-gray-600 border border-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//               className="text-gray-600 border border-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromotionManagement;

