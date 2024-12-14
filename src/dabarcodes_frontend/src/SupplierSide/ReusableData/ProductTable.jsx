// import React from 'react';
// const ProductTable = ({ products }) => {
//   return (
//     products.length > 0 && (
//       <div className="mt-8 mb-4">
//         <h3 className="text-xl font-bold mb-4">Product Details</h3>
//         <table className="min-w-full bg-white border">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left">Product Image</th>
//               <th className="py-2 px-4 border-b text-left">Product SKU</th>
//               <th className="py-2 px-4 border-b text-left">Product Name</th>
//               <th className="py-2 px-4 border-b text-left">SubBrand Name</th>
//               <th className="py-2 px-4 border-b text-left">Category</th>
//              </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index}>
//                 <td className="py-2 px-4 border-b text-left">
//                   {product.image ? (
//                     <img
//                       src={URL.createObjectURL(product.image)}
//                       alt="Product"
//                       className="w-16 h-16 object-cover "
//                     />
//                   ) : (
//                     'No Image'
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border-b text-left">{product.sku}</td>
//                 <td className="py-2 px-4 border-b text-left">{product.productName}</td>
//                 <td className="py-2 px-4 border-b text-left">{product.subBrand}</td>
//                 <td className="py-2 px-4 border-b text-left">{product.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     )
//   );
// };

// export default ProductTable;
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    products.length > 0 && (
      <div className="mt-8 mb-4">
        <h3 className="text-xl font-bold mb-4">Product Details</h3>
        {/* Add horizontal scrolling */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Product Image</th>
                <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Product SKU</th>
                <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Product Name</th>
                <th className="py-2 px-4 border-b text-left text-sm sm:text-base">SubBrand Name</th>
                <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-left">
                    {product.image ? (
                      <img
                        src={URL.createObjectURL(product.image)}
                        alt="Product"
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <span className="text-sm sm:text-base">No Image</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-left text-sm sm:text-base">{product.sku}</td>
                  <td className="py-2 px-4 border-b text-left text-sm sm:text-base">{product.productName}</td>
                  <td className="py-2 px-4 border-b text-left text-sm sm:text-base">{product.subBrand}</td>
                  <td className="py-2 px-4 border-b text-left text-sm sm:text-base">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default ProductTable;
