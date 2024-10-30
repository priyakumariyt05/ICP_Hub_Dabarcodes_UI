
import { useState, useEffect } from "react";
import BackButton from "../../Reusable/BackButton";
import StatsCard from "../../Reusable/StatsCard";
import TransactionalChart from "../../Reusable/Chart/TransactionalChart";
import Donut from "../../Reusable/Chart/Donut";
import PromotionChart from "../../Reusable/Chart/PromotionChart";

const SupplierDetailPage = ({ supplierData }) => {
  const [supplierInfo, setSupplierInfo] = useState({
    supplierId: "",
    supplierType: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    logo: "",
   
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (supplierData) {
      setSupplierInfo(supplierData);
    }
  }, [supplierData]);

  const validate = () => {
    const newErrors = {};
    if (!supplierInfo.supplierId) newErrors.supplierId = "Supplier ID is required";
    if (!supplierInfo.supplierType) newErrors.supplierType = "Supplier Type is required";
    if (!supplierInfo.email.includes("@")) newErrors.email = "Enter a valid email address";
    if (!supplierInfo.phoneNumber.match(/^\d{10}$/)) 
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (key, value) => {
    setSupplierInfo({ ...supplierInfo, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Supplier details submitted:", supplierInfo);
    }
  };
  const data = [
    {title: "Total Sales", value: "$75,000", percentageChange: 1},
    {title: "Unique Customer Count", value: "5,000", percentageChange: 1},
    {title: "Total Customer", value: "75,000", percentageChange: 1},

  ];
  const TransactionalData = [
    {month: "Jan", count: 20},
    {month: "Feb", count: 30},
    {month: "Mar", count: 50},
    {month: "Apr", count: 40},
    {month: "May", count: 45},
    {month: "Jun", count: 80},
    {month: "Jul", count: 30},
    {month: "Aug", count: 20},
    {month: "Sept", count: 20},
    {month: "Oct", count: 20},
    {month: "Nov", count: 20},
    {month: "Dec", count: 20},
  ];
  const doughnutData = {
    labels: [
      "Whole Grain Oats",
      "Dairy Milk",
      "Nestle Coffee",
      "Salmon",
      "Fruits",
    ],
    datasets: [
      {
        data: [120, 120, 120, 120, 120],
        backgroundColor: [
          "#29b6f6",
          "#0277bd",
          "#0288d1",
          "#26c6da",
          "#00acc1",
        ],
        hoverOffset: 4,
        cutout: "70%",
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        labels: {
          boxWidth: 15,
          padding: 20,
        },
      },
      title: {
        display: true,
        //  text: "Top 5 Products",
        font: {
          size: 16,
        },
      },
    },
  };
  const PromotionChartData = [120, 120, 60];
  return (
    <div className="mx-auto mt-8">
      <div className="flex flex-start">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4">Supplier Details</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-start mb-8">
          {/* Logo Section */}
          <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
            <img
              src={supplierInfo.logo || "/image/reliance.png"}
              alt="Supplier Logo"
            />
          </div>

          {/* Supplier Information */}
          <div className="ml-8 w-full px-8">
            <h2 className="text-xl font-medium mb-4">Supplier Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Supplier ID", key: "supplierId" },
                { label: "Supplier Type", key: "supplierType" },
                { label: "Brand Name", key: "brandName" },
                { label: "Umbrella Brand Name", key: "umbrellaBrandName" },
              ].map(({ label, key }) => (
                <div className="flex flex-col" key={key}>
                  <label htmlFor={key} className="text-sm font-medium mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    id={key}
                    className={`border p-2 rounded-md ${
                      errors[key] ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    value={supplierInfo[key] || ""}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                  {errors[key] && (
                    <span className="text-red-500 text-sm">{errors[key]}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Address Section */}
            <h2 className="text-xl font-medium mb-4">Supplier Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {["country", "state", "city", "postalCode"].map((field) => (
                <div className="flex flex-col" key={field}>
                  <label htmlFor={field} className="text-sm font-medium mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={field}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={supplierInfo[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <h2 className="text-xl font-medium mb-4">Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className={`border p-2 rounded-md ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={supplierInfo.phoneNumber || ""}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  className={`border p-2 rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={supplierInfo.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            percentageChange={item.percentageChange}
          />
        ))}
      </div>
 </form>
 <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2">
 <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
            <div className="bg-white shadow rounded p-4">
              <h3 className="text-sm text-gray-500">Total Sales</h3>
              <p className="text-xl font-bold">$11,300</p>
              <p className="text-sm text-green-500">+3.25% This Week</p>
            </div>

            <div className="bg-white shadow rounded p-4">
              <h3 className="text-sm text-gray-500">Total Suppliers</h3>
              <p className="text-xl font-bold">11,300</p>
            </div>
          </div>

          {/* Average Products Redemption Rate */}
          <div className="p-4">
        {/* <TransactionalChart data={TransactionalData} /> */}
        <TransactionalChart
          data={TransactionalData}
          title="Total Sale in USD"
        />
      </div>
    </div>

    {/* Product promotion */}
    <div className="min-h-screen mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex-1">
              <Donut
                data={doughnutData}
                options={doughnutOptions}
                title="Top 5 Product"
              />
            </div>
            <PromotionChart data={PromotionChartData} />
            {/* Stores Table for Top 5 Stores */}
            {/* <StoreTable stores={storesData} /> */}
          </div>
        </div>
    </div>
  );
};

export default SupplierDetailPage;
