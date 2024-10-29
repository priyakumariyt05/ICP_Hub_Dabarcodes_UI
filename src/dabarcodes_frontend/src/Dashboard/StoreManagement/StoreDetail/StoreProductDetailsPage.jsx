
import React, {useState, useEffect} from "react";
import BackButton from "../../Reusable/BackButton";

import {HiAdjustmentsHorizontal} from "react-icons/hi2";
import {IoSearchOutline} from "react-icons/io5";


const StoreProductsDetailsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id", // Default key for sorting
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 52,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 23,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/token.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 12,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 2,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 56,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 58,
          name: "Baverage Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 56,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 53,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
      ];
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  // Sorting functionality
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({key, direction});

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredProducts(sortedProducts);
  };


  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );




  return (
    <>
      <div className="mx-auto p-4 mt-8">
        <div className="flex flex-start">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">
            Reliance Mart Store 1 All Product Details
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-between items-center my-4 ">
          <div className="flex flex-wrap gap-4">
            <button className="btn">Products</button>
            <button className="btn">Suppliers</button>
            <button className="btn">Promotions</button>
            <button className="btn">Category</button>
            <button className="btn">Brands</button>
          </div>
        </div>
        <hr className="mb-4" />
        {/* Search and Sort */}
        <div className="flex flex-wrap justify-end items-center mb-4 gap-2">
          <div className="flex justify-end">
            <button
              onClick={() => handleSort("id")} // Sorting by Product ID
              className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
            >
              Sort by ID
              <HiAdjustmentsHorizontal className="ml-2" />
            </button>
            <div className="relative ml-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
              />
              <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto text-left ">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="p-2">
                  <input type="checkbox" />
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("id")}
                >
                  Product ID
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("image")}
                >
                  Product Image
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Product Name
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("category")}
                >
                  Category
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => handleSort("brand")}
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
                      // checked={selectedProduct?.id === product.id}
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
    </>
  );
};

export default StoreProductsDetailsPage;
