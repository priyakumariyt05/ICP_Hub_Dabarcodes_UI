import React from 'react'

const SkuTable = () => {

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (

    <div className="p-4 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto text-left ">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                <th
                  className="p-2 cursor-pointer"

                >
                  Product ID
                </th>
                <th
                  className="p-2 cursor-pointer"

                >
                  Product Image
                </th>
                <th
                  className="p-2 cursor-pointer"

                >
                  Product Name
                </th>
                <th
                  className="p-2 cursor-pointer"

                >
                  Category
                </th>
                <th
                  className="p-2 cursor-pointer"

                >
                  Brand Name
                </th>
                <th className="p-2">Umbrella Brand Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Promotion Price</th>
                <th className="p-2">Store Name</th>
                <th className="p-2">Store Id</th>
                <th className="p-2">Supplier Name</th>
              </tr>
            </thead>

            <tbody className="border-l-4 border-blue-400">
              {displayedProducts.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedProduct?.id === product.id}
                      onChange={() => handleCheckboxClick(product)}
                    />
                  </td>
                  <td className="p-2">{product.id}</td>
                  <td className="p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.category}</td>
                  <td className="p-2">{product.brand}</td>
                  <td className="p-2">{product.umbrellaBrandName}</td>
                  <td className="p-2">{product.price}</td>
                  <td className="p-2">{product.promotionPrice}</td>
                  <td className="p-2">{product.store}</td>
                  <td className="p-2">{product.storeId}</td>
                  <td className="p-2">{product.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>



    </div>
  )
}

export default SkuTable