import React, { useState } from 'react';
import TitleHeader from './TitleHeader';
import { useNavigate } from 'react-router-dom';
const RetailerList = () => {
    const navigate = useNavigate()
    const [retailers, setRetailers] = useState([
        { id: 'S00012', name: 'Reliance Market', location: 'Bangalore, India', totalProducts: 567, totalPromotions: 567 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
         { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
        { id: 'S00013', name: 'Coke', location: 'Pune, India', totalProducts: 398, totalPromotions: 398 },
  
    ]);

    const [page, setPage] = useState(1);

    // Pagination controls
    const handleNext = () => setPage((prev) => prev + 1);
    const handlePrevious = () => setPage((prev) => Math.max(prev - 1, 1));
const handleClick = ()=>{
navigate("/supplier/supplier-home")
}
const handleDraftPromotion =()=>{
    navigate("/supplier/promotion-management/draft-promotion")
}
    return (
        <div className=" ">
         <TitleHeader title="Retailer List" />
            {/* Table */}
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4"><input type="checkbox" /></th>
                        <th className="py-2 px-4">Retailer ID</th>
                        <th className="py-2 px-4">Retailer Name</th>
                        <th className="py-2 px-4">Location</th>
                        <th className="py-2 px-4">Total Products</th>
                        <th className="py-2 px-4">Total Promotions</th>
                    </tr>
                </thead>
                <tbody>
                    {retailers.map((retailer, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4"><input type="checkbox" /></td>
                            <td className="py-2 px-4">{retailer.id}</td>
                            <td className="py-2 px-4">{retailer.name}</td>
                            <td className="py-2 px-4">{retailer.location}</td>
                            <td className="py-2 px-4">{retailer.totalProducts}</td>
                            <td className="py-2 px-4">{retailer.totalPromotions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
             {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePrevious}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md"
                >
                    Previous
                </button>
                <p>Page {page} of 10</p>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md"
                >
                    Next
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center flex-col mt-4 space-x-4">
                <button  onClick={handleClick}
                className="px-6 py-2 bg-[#0D90C1] text-white rounded-md">
               Activate Promotion
                </button>
                <button onClick={handleDraftPromotion}
                className="px-6 py-2 text-blue-600 underline">
                    Draft Promotion
                </button>
            </div>
        </div>
    );
};

export default RetailerList;
