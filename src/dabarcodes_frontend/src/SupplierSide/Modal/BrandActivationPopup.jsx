import React from "react";

const BrandActivationPopup = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      {/* <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-lg"> */}
      <div
        className="bg-white w-full max-w-5xl p-6 rounded-md shadow-lg overflow-y-auto"
        style={{maxHeight: "90vh"}} // Limit height to 90% of viewport
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Brand Activation Campaign
        </h2>

        <form>
          {/* First Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product SKU
              </label>
              <input
                type="text"
                defaultValue="S052"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Name
              </label>
              <input
                type="text"
                defaultValue="Nestle Coffee"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                defaultValue="Coffee"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Brand Name
              </label>
              <input
                type="text"
                defaultValue="Nestle"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Umbrella Brand Name
              </label>
              <select className="w-full border p-2 rounded">
                <option>Nestle</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Original Price
              </label>
              <input
                type="text"
                defaultValue="$45"
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Product Description
            </label>
            <textarea
              rows="2"
              placeholder="Product Description"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Second Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                BATOK Token Allocation
              </label>
              <input
                type="text"
                defaultValue="3 Tokens"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Brand Promotion Name
              </label>
              <input
                type="text"
                defaultValue="Coca-Cola Lime Holiday Rewards"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Type of Release
              </label>
              <select className="w-full border p-2 rounded">
                <option>Prize/Reward</option>
              </select>
            </div>
          </div>

          {/* Third Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Prize/Reward Details
              </label>
              <input
                type="text"
                defaultValue="Win Coca-Cola Lime-themed coolers"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Value of Reward
              </label>
              <input
                type="text"
                defaultValue="$10.00"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Reward Allocation
              </label>
              <select className="w-full border p-2 rounded">
                <option>First 100 Customers</option>
              </select>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Eligibility Criteria
            </label>
            <textarea
              rows="2"
              placeholder="Must purchase at least 3 Coca-Cola Lime bottles during campaign period"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Fourth Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Redemption Method
              </label>
              <select className="w-full border p-2 rounded">
                <option>Redeem at POS by scanning the ...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Maximum Redemption
              </label>
              <input
                type="text"
                defaultValue="1 Redemption"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Expiry Date
              </label>
              <input
                type="date"
                defaultValue="2028-12-10"
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-300 text-black rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md"
            >
              Use BATOKS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandActivationPopup;