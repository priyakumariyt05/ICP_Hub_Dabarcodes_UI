import React from 'react'

const SupplierRequest = () => {
  return (
    <>
                <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Suppliers Requests</h2>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <p>
              Current Utility Tokens: <strong>03</strong>
            </p>
            <div className="mt-4">
              <p className="mb-2">
                Pending Requests: <strong>11,300</strong>
              </p>
              <p>
                Approved Requests: <strong>11,300</strong>
              </p>
            </div>
          </div>
    </>
  )
}

export default SupplierRequest
