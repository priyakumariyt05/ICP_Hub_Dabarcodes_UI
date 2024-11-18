// import React from 'react';
// import { AiOutlineDown } from 'react-icons/ai'; // Importing the down arrow icon
// const PromotionTable = ({ data }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="text-left bg-gray-100 text-gray-600 font-semibold">
//             {/* <th className="px-4 py-4 ">Product SKU</th>
//             <th className="px-4 py-4 ">Promotion ID</th>
//             <th className="px-4 py-4 ">Product Name</th>
//             <th className="px-4 py-4 ">Sub Brand</th>
      
//             <th className="px-4 py-4 ">Start Date</th>
//             <th className="px-4 py-4 ">End Date</th>
//             <th className="px-4 py-4">Discount</th> */}
//             <th className="px-4 py-4 whitespace-nowrap">
//                Product SKU <AiOutlineDown className="inline " />
//              </th>
//              <th className="px-4 py-4 whitespace-nowrap">
//                Promotion ID <AiOutlineDown className="inline " />
//              </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//                Product Name <AiOutlineDown className="inline " />
//              </th>
//              <th className="px-4 py-4 whitespace-nowrap">
//                Sub Brand <AiOutlineDown className="inline " />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//                Start Date <AiOutlineDown className="inline " />
//              </th>
//              <th className="px-4 py-4 whitespace-nowrap">
//                End Date <AiOutlineDown className="inline " />
//              </th>
//            <th className="px-4 py-4 whitespace-nowrap">
//               Discount <AiOutlineDown className="inline" />
//              </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50 border-b">
//               <td className="px-4 py-4 text-gray-700">{item.sku}</td>
//               <td className="px-4 py-4 text-gray-700">{item.promotionId}</td>
//               <td className="px-4 py-4 text-gray-700">{item.productName}</td>
//               <td className="px-4 py-4 text-gray-700">{item.subBrand}</td>
//               <td className="px-4 py-4 text-gray-700">{item.startDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.endDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.discount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PromotionTable;
// import React from 'react';
// import { AiOutlineDown } from 'react-icons/ai'; // Importing the down arrow icon
// const PromotionTable = ({ data }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="text-left bg-gray-100 text-gray-600 font-semibold">

//             <th className="px-4 py-4 whitespace-nowrap">
//                Product SKU <AiOutlineDown className="inline " />
//              </th>
//              <th className="px-4 py-4 whitespace-nowrap">
//                Promotion ID <AiOutlineDown className="inline " />
//              </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//                Product Name <AiOutlineDown className="inline " />
//              </th>
//              <th className="px-4 py-4 whitespace-nowrap">
//                Sub Brand <AiOutlineDown className="inline " />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//                Start Date <AiOutlineDown className="inline " />
//              </th>
//              <th className="px-4 py-4 whitespace-nowrap">
//                End Date <AiOutlineDown className="inline " />
//              </th>
//            <th className="px-4 py-4 whitespace-nowrap">
//               Discount <AiOutlineDown className="inline" />
//              </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50 border-b">
//               <td className="px-4 py-4 text-gray-700">{item.sku}</td>
//               <td className="px-4 py-4 text-gray-700">{item.promotionId}</td>
//               <td className="px-4 py-4 text-gray-700">{item.productName}</td>
//               <td className="px-4 py-4 text-gray-700">{item.subBrand}</td>
//               <td className="px-4 py-4 text-gray-700">{item.startDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.endDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.discount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PromotionTable;



// import React from 'react';
// import { AiOutlineDown } from 'react-icons/ai';

// const PromotionTable = ({ data, onRowClick }) => {
   
//         const handleClick = (rowData) => {
//           if (onRowClick) {
//             onRowClick(rowData); // Only call if onRowClick is provided
//           }
//         };
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="text-left bg-gray-100 text-gray-600 font-semibold">
//             <th className="px-4 py-4 whitespace-nowrap">Product SKU <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Promotion ID <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Product Name <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Sub Brand <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Start Date <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">End Date <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Discount <AiOutlineDown className="inline" /></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr
//               key={index}
//               className="hover:bg-gray-50 border-b cursor-pointer"
//               onClick={() => onRowClick(item)} // Call the handler passed from parent
//             >
//               <td className="px-4 py-4 text-gray-700">{item.sku}</td>
//               <td className="px-4 py-4 text-gray-700">{item.promotionId}</td>
//               <td className="px-4 py-4 text-gray-700">{item.productName}</td>
//               <td className="px-4 py-4 text-gray-700">{item.subBrand}</td>
//               <td className="px-4 py-4 text-gray-700">{item.startDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.endDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.discount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PromotionTable;

// import React from 'react';
// import { AiOutlineDown } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const PromotionTable = ({ data }) => {
//   const navigate = useNavigate();

//   // Handle row click to navigate to a new page using promotionId
//   const handleClick = (promotionId) => {
//     // Navigate to the detail page using the promotionId
//     navigate(`/supplier/promotion-management/promotion-details/${promotionId}`);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="text-left bg-gray-100 text-gray-600 font-semibold">
//             <th className="px-4 py-4 whitespace-nowrap">Product SKU <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Promotion ID <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Product Name <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Sub Brand <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Start Date <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">End Date <AiOutlineDown className="inline" /></th>
//             <th className="px-4 py-4 whitespace-nowrap">Discount <AiOutlineDown className="inline" /></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr
//               key={index}
//               className="hover:bg-gray-50 border-b cursor-pointer"
//               onClick={() => handleClick(item.promotionId)} // Use promotionId to navigate
//             >
//               <td className="px-4 py-4 text-gray-700">{item.sku}</td>
//               <td className="px-4 py-4 text-gray-700">{item.promotionId}</td>
//               <td className="px-4 py-4 text-gray-700">{item.productName}</td>
//               <td className="px-4 py-4 text-gray-700">{item.subBrand}</td>
//               <td className="px-4 py-4 text-gray-700">{item.startDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.endDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.discount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PromotionTable;


// last change 
import { useNavigate } from "react-router-dom";
import { AiOutlineDown } from 'react-icons/ai';

const PromotionTable = ({ data }) => {
    const navigate = useNavigate();
  
    // Handle row click to navigate to a new page using promotionId
    const handleClick = (promotionId) => {
      // Navigate to the detail page using the promotionId
      navigate(`/supplier/promotion-management/promotion-details/${promotionId}`);
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="text-left bg-gray-100 text-gray-600 font-semibold">
              <th className="px-2 py-4 whitespace-nowrap">Product SKU <AiOutlineDown className="inline" /></th>
              <th className="px-2 py-4 whitespace-nowrap">Promotion ID <AiOutlineDown className="inline" /></th>
              <th className="px-2 py-4 whitespace-nowrap">Product Name <AiOutlineDown className="inline" /></th>
              <th className="px-2 py-4 whitespace-nowrap">Sub Brand <AiOutlineDown className="inline" /></th>
              <th className="px-2 py-4 whitespace-nowrap">Start Date <AiOutlineDown className="inline" /></th>
              <th className="px-2 py-4 whitespace-nowrap">End Date <AiOutlineDown className="inline" /></th>
              <th className="px-2 py-4 whitespace-nowrap">Discount <AiOutlineDown className="inline" /></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.promotionId}
                className="hover:bg-gray-50 border-b cursor-pointer"
                onClick={() => handleClick(item.promotionId)} 
              >
                <td className="px-4 py-4 text-gray-700">{item.sku}</td>
                <td className="px-4 py-4 text-gray-700">{item.promotionId}</td>
                <td className="px-4 py-4 text-gray-700">{item.productName}</td>
                <td className="px-4 py-4 text-gray-700">{item.subBrand}</td>
                <td className="px-4 py-4 text-gray-700">{item.startDate}</td>
                <td className="px-4 py-4 text-gray-700">{item.endDate}</td>
                <td className="px-4 py-4 text-gray-700">{item.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default PromotionTable
















// import React from 'react';
// import { AiOutlineDown } from 'react-icons/ai';

// const PromotionTable = ({ data }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border-l-4 border-blue-500"> {/* Left border only */}
//         <thead>
//           <tr className="bg-gray-100 text-gray-600 font-semibold">
//             <th className="px-4 py-4 whitespace-nowrap">
//               Product SKU <AiOutlineDown className="inline ml-1" />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//               Promotion ID <AiOutlineDown className="inline ml-1" />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//               Product Name <AiOutlineDown className="inline ml-1" />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//               Sub Brand <AiOutlineDown className="inline ml-1" />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//               Start Date <AiOutlineDown className="inline ml-1" />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//               End Date <AiOutlineDown className="inline ml-2" />
//             </th>
//             <th className="px-4 py-4 whitespace-nowrap">
//               Discount <AiOutlineDown className="inline ml-1" />
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50 border-b">
//               <td className="px-4 py-4 text-gray-700">{item.sku}</td>
//               <td className="px-4 py-4 text-gray-700">{item.promotionId}</td>
//               <td className="px-4 py-4 text-gray-700">{item.productName}</td>
//               <td className="px-4 py-4 text-gray-700">{item.subBrand}</td>
//               <td className="px-4 py-4 text-gray-700">{item.startDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.endDate}</td>
//               <td className="px-4 py-4 text-gray-700">{item.discount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PromotionTable;

