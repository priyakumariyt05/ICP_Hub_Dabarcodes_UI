import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { AiOutlineQuestion } from "react-icons/ai";
 function CreateAccountForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f7f7] p-8">
      <div className="bg-white rounded-lg shadow-lg w-[900px] flex ">
        {/* Left Sidebar */}
 
        <div className="w-1/3 bg-[#eaf2f2] rounded-l-lg py-12 px-8 flex flex-col justify-between relative">
          <div>
            <h2 className=" text-2xl font-semibold mb-12 mt-12">Create account</h2>
            <ul className="relative">
              <li className="relative flex items-center mb-12">
                <div className="bg-[#1aaf9a] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">1</div>
                <span className="ml-4 text-[#333] font-medium">Personal Details</span>
                <div className="absolute left-4 top-10  h-[100%] w-[2px] bg-[#ccc]"></div>
              </li>
              <li className="relative flex items-center mb-12">
            
                <div className="bg-[#ccc] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">2</div>
                <span className="ml-4 text-[#999] font-medium">Account Details</span>
                <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#ccc]"></div>
              </li>
              <li className="relative flex items-center mb-12">
                <div className="bg-[#ccc] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">3</div>
                <span className="ml-4 text-[#999] font-medium">Tax Details</span>
                <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#ccc]"></div>
              </li>
              <li className="relative flex items-center mb-12">
                <div className="bg-[#ccc] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">4</div>
                <span className="ml-4 text-[#999] font-medium">Summary</span>
                <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#ccc]"></div>
              </li>
              <li className="relative flex items-center mb-12">
                <div className="bg-[#ccc] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">5</div>
                <span className="ml-4 text-[#999] font-medium">Receipt</span>
              </li>
            </ul>
          </div>
       
        </div>
        {/* Right Content */}
        <div className="w-2/3 py-12 px-12">
          <h3 className=" font-semibold mb-2">Your Personal Details</h3>
          <p className="text-[#888] text-sm mb-4">National Identity Number (ID Number)</p>
          <input
            type="text"
            className=" p-3 mb-6 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            value="123654789"
            readOnly
          />

          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
          </div>

          {/* Residential Address Section */}
          <h4 className=" font-semibold mb-2">Your Residential Address</h4>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Street Address"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
            <input
              type="text"
              placeholder="Street Address (optional)"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Post Code"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
            <input
              type="text"
              placeholder="City"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
            <input
              type="text"
              placeholder="Country"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
            />
          </div>

          {/* Contact Detail Section */}
          <h4 className=" font-semibold mb-2">Contact Details</h4>

          {/* Phone Number  */}
          <div className="flex items-center mb-4">
            <div className=" border border-[#ccc] text-gray-400 p-3 rounded-lg flex items-center mr-4">
              <span role="img" aria-label="flag" className="mr-2"><LiaFlagUsaSolid /></span> +47
            </div>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] "
            />
              <div className="border border-green-500 text-green-500 p-1 w-6 h-6 rounded-full flex items-center justify-center ml-4">
    <AiOutlineQuestion className="text-green-500 w-4 h-4" />
  </div>
 </div>

          {/* Email Input */}
  <div className="mb-6 flex items-center">
  <input
    type="email"
    placeholder="Your Email Address"
    className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] "
  />
  <div className="border border-green-500 text-green-500 p-1 w-6 h-6 rounded-full flex items-center justify-center ml-4">
    <AiOutlineQuestion className="text-green-500 w-4 h-4" />
  </div>
</div>

           <hr className="my-6 border-t border-[#ccc]" />

          <div className="flex justify-end">
          <button className="bg-[#1aaf9a] text-white px-6 py-3 rounded-full hover:bg-[#14887c]">
  Next
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAccountForm;