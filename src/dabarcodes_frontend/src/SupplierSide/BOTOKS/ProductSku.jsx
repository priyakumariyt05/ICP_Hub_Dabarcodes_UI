import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import BackButton from "../../Dashboard/Reusable/BackButton";


const ProductSku = () => {
    const [products, setProducts] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: "id",
        direction: "asc",
    });
    const [filter, setFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = [
                {
                    id: 1,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",
                    image: "/image/drink.png",
                    price: "25",
                    promotion: "yes",
                    status: "deactivate",
                },
                {
                    id: 2,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",
                    image: "/image/token.png",
                    price: "25",
                    promotion: "no",
                    status: "Active",
                },
                {
                    id: 3,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",

                    image: "/image/drink.png",
                    price: "25",
                    promotion: "no",
                    status: "Active",
                },
                {
                    id: 4,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",

                    image: "/image/token.png",
                    price: "25",
                    promotion: "no",
                    status: "Active",
                },
                {
                    id: 5,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",
                    image: "/image/drink.png",
                    price: "25",
                    promotion: "yes",
                    status: "deactivate",
                },
                {
                    id: 6,
                    name: "Baverage Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",

                    image: "/image/token.png",
                    price: "25",
                    promotion: "yes",
                    status: "deactivate",
                },
                {
                    id: 7,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",
                    image: "/image/drink.png",
                    price: "25",
                    promotion: "yes",
                    status: "deactivate",
                },
                {
                    id: 8,
                    name: "FreshCo Organic Almond",
                    category: "Bakery",
                    brand: "FreshCo Brands",

                    image: "/image/drink.png",
                    price: "25",
                    promotion: "yes",
                    status: "deactivate",
                },
            ];
            setProducts(data);
        };

        fetchProducts();
    }, []);
    const totalPages = Math.ceil(products.length / rowsPerPage);

    // Filter and search logic
    const filteredAndSearchedProducts = products.filter((product) => {
        const matchesFilter = filter ? product.category === filter : true;
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const displayedProducts = filteredAndSearchedProducts.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Sorting functionality
    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });

        const sortedProducts = [...products].sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        });

        setProducts(sortedProducts);
    };
    const handleRowClick = (product) => {
        navigate(`/supplier/botok/product-sku/${product.id}`);
    };


    return (
        <div className="mx-auto p-4">
            <div className="flex flex-start">
                <BackButton />

                <h1 className="text-2xl font-semibold mb-4">Product SKU</h1>
            </div>
            <ToastContainer />

            {/* Filter and Search */}
            <div className="flex items-center justify-end my-4">
                <div className="relative flex items-center mr-2">
                    <select
                        className="w-full rounded px-3 py-1 pr-10 appearance-none"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">Filter</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Beverages">Beverages</option>
                        {/* Add more categories as needed */}
                    </select>

                    <HiAdjustmentsHorizontal
                        size={24}
                        className="absolute right-3 text-gray-600"
                    />
                </div>

                {/* Search */}
                <div className="flex items-center border border-gray-300 rounded">
                    <input
                        type="text"
                        placeholder="Search "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-2 py-1 focus:outline-none"
                    />
                    <IoSearchOutline size={24} className="text-gray-600 mx-2" />
                </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto w-full">
                <table className="min-w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">
                                <input type="checkbox" />
                            </th>
                            <th
                                className="p-4 cursor-pointer"
                                onClick={() => handleSort("image")}
                            >
                                Product Image
                            </th>
                            <th
                                className="p-4 cursor-pointer"
                                onClick={() => handleSort("name")}
                            >
                                Product Name
                            </th>
                            <th
                                className="p-4 cursor-pointer"
                                onClick={() => handleSort("category")}
                            >
                                Category
                            </th>
                            <th
                                className="p-4 cursor-pointer"
                                onClick={() => handleSort("brand")}
                            >
                                Brand Name
                            </th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Promotion</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedProducts.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleRowClick(product)}
                            >
                                <td className="p-2">
                                    <input type="checkbox" />
                                </td>
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
                                <td className="p-2">{product.price}</td>
                                <td className="p-2">{product.promotion}</td>
                                <td className="p-2">{product.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    );
};

export default ProductSku;