
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    products.length > 0 && (
      <div className="mt-8 mb-4">
        <h3 className="text-xl font-bold mb-4">Product Details</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
            <th className="py-2 px-4 border-b">Product Image</th>
              <th className="py-2 px-4 border-b">Product SKU</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">subBrand Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              {/* <th className="py-2 px-4 border-b">Product Type</th> */}
              {/* <th className="py-2 px-4 border-b">Size</th>
              <th className="py-2 px-4 border-b">Description</th> */}
              {/* <th className="py-2 px-4 border-b">Subcategory</th> */}
              {/* <th className="py-2 px-4 border-b">Price</th> */}
        
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
              <td className="py-2 px-4 border-b">
                  {product.image ? (
                    <img
                      src={URL.createObjectURL(product.image)} // Display the uploaded image
                      alt="Product"
                      className="w-16 h-16 object-cover "
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td className="py-2 px-4 border-b">{product.sku}</td>
                <td className="py-2 px-4 border-b">{product.productName}</td>
                <td className="py-2 px-4 border-b">{product.subBrand}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                {/* <td className="py-2 px-4 border-b">{product.productType}</td> */}
                {/* <td className="py-2 px-4 border-b">{product.size}</td> */}
                {/* <td className="py-2 px-4 border-b">{product.description}</td> */}
                {/* <td className="py-2 px-4 border-b">{product.subcategory}</td> */}
                {/* <td className="py-2 px-4 border-b">{product.price}</td> */}
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default ProductTable;
