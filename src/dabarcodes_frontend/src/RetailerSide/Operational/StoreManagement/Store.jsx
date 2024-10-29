
import React, {useState, useEffect} from "react";
import {IoSearchOutline} from "react-icons/io5";
import {HiAdjustmentsHorizontal} from "react-icons/hi2";
import HeaderWithButton from "../Reusable/HeaderWithButton";
import AddStoreModal from "../Modals/AddStoreModal";
import StoreUploadModal from "../Modals/StoreUploadModal";
import {MdOutlineModeEdit} from "react-icons/md";
import {MdDeleteOutline} from "react-icons/md";

const Store = () => {
  const [data, setData] = useState([
    {
      id: "S001",
      name: "Reliance Fresh",
      location: "Mumbai, India",
      type: "Supermarket",
      suppliers: 560,
      products: 5005,
      activePromotions:2,
    },
    {
      id: "S002",
      name: "Reliance Mart",
      location: "Delhi, India",
      type: "Hypermarket",
      suppliers: 120,
      products: 12000,
    },
    {
      id: "S003",
      name: "Reliance Trends",
      location: "Bangalore, India",
      type: "Supermarket",
      suppliers: 480,
      products: 4005,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to add a new store to the list
  const handleAddStore = (newStore) => {
    setData((prevData) => [...prevData, newStore]);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const toggleSortOrder = () =>
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  const filteredData = data
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
    );

  const modalOptions = [
    {
      label: "Add Single Store",
      component: (closeModal) => (
        <AddStoreModal onClose={closeModal} handleAddStore={handleAddStore} />
      ),
    },
    {
      label: "Add Multiple Store",
      component: (closeModal) => (
        <StoreUploadModal isOpen={true} closeModal={closeModal} />
      ),
    },
  ];

  return (
    <div className="p-4 ">
      <HeaderWithButton
        heading="All Store"
        buttonText="Add New Store"
        modalOptions={modalOptions}
      />

      <div className="flex flex-wrap justify-between items-center mb-4 mt-4 gap-2">
        <div className="flex flex-wrap gap-2 justify-start">
          <button>
            <MdOutlineModeEdit className="text-2xl" />
          </button>

          {/* Modal Component */}

          <button>
            <MdDeleteOutline className="text-2xl" />
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={toggleSortOrder}
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
              onChange={handleSearch}
              className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">
              <input type="checkbox" />
            </th>
            <th className="py-2 px-4 cursor-pointer">Store ID</th>
            <th className="py-2 px-4">Store Name</th>
            <th className="py-2 px-4">Store Location</th>
            <th className="py-2 px-4">Store Type</th>
            <th className="py-2 px-4">Associated Suppliers</th>
            <th className="py-2 px-4">Total Products</th>
            <th className="py-2 px-4">Active Promotions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.location}</td>
              <td className="py-2 px-4">{item.type}</td>
              <td className="py-2 px-4">{item.suppliers}</td>
              <td className="py-2 px-4">{item.products}</td>
              <td className="py-2 px-4">{item.activePromotions}</td>
            </tr>
          ))}
        </tbody>
      </table>
   

      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 border rounded-lg">Previous</button>
        <p>Page 1 of 10</p>
        <button className="px-4 py-2 border rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default Store;








































