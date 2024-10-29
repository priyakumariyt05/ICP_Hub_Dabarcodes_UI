import React, {useState, useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import BackButton from "../Reusable/BackButton";

// Mock Data
const promotions = [
  {
    id: 1,
    promotionId: 524,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "10.09.2024",
    endDate: "19.09.2024",
    qrCode: "/image/qr.png",
  },
  {
    id: 2,
    promotionId: 159,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "12.09.2024",
    endDate: "18.10.2024",
    qrCode: "/image/qr.png",
  },
  {
    id: 3,
    promotionId: 155,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "12.09.2024",
    endDate: "18.10.2024",
    qrCode: "/image/qr.png",
  },
  {
    id: 4,
    promotionId: 154,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "12.09.2024",
    endDate: "18.10.2024",
    qrCode: "/image/qr.png",
  },
  {
    id: 5,
    promotionId: 153,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "12.09.2024",
    endDate: "18.10.2024",
    qrCode: "/image/qr.png",
  },
  {
    id: 6,
    promotionId: 152,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "12.09.2024",
    endDate: "18.10.2024",
    qrCode: "/image/qr.png",
  },
  {
    id: 7,
    promotionId: 22,
    productName: "Organic Blueberries",
    supplierName: "Apply Limited",
    startDate: "12.09.2024",
    endDate: "18.10.2024",
    qrCode: "/image/qr.png",
  },
  // Add more mock data here...
];

const ProductOnPromotion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const filteredPromotions = promotions.filter((promotion) =>
    promotion.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIdx = (currentPage - 1) * rowsPerPage;
  const currentRows = filteredPromotions.slice(
    startIdx,
    startIdx + rowsPerPage
  );

  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between ">
        <div className="flex flex-start">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">
            Products On Promotions
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center my-4">
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
      <div className="flex justify-end items-center mb-4">
        <div className="flex space-x-2">
          <select className="border p-2 rounded">
            <option>Sort</option>
            <option>Promotion ID</option>
            <option>Product Name</option>
            {/* Add more sort options */}
          </select>
          <div className="flex items-center border p-2 rounded">
            <input
              type="text"
              className="outline-none"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="text-gray-500 mr-2" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Product ID</th>
              <th className="p-3 border">Promotion ID</th>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Supplier Name</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">End Date</th>
              <th className="p-3 border">QR Code</th>
            </tr>
          </thead>
          <tbody className="border-l-4 border-blue-400">
            {currentRows.map((promotion) => (
              <tr key={promotion.id} className="border-t">
                <td className="p-3">{promotion.id}</td>
                <td className="p-3">{promotion.promotionId}</td>
                <td className="p-3">{promotion.productName}</td>
                <td className="p-3">{promotion.supplierName}</td>
                <td className="p-3">{promotion.startDate}</td>
                <td className="p-3">{promotion.endDate}</td>

                <td className="p-3">
                  <img
                    src={promotion.qrCode}
                    alt={promotion.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 border rounded"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev * rowsPerPage < promotions.length ? prev + 1 : prev
            )
          }
          className="p-2 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductOnPromotion;
