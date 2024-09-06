import React, { useState } from 'react';
import { FaCheck, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    country: '',
    state: '',
    city: '',
    postal: '',
    timeAtAddress: '',
    shoppingPreferences: '',
    influencerReferralId: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8">
      {/* Toggle Button for smaller screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md self-start"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg md:block transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <div className="mb-8">
          <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
        </div>
        <h2 className="text-xl font-bold mb-8">Create Account</h2>

        <ul className="relative">
          <li className="relative flex items-center mb-12">
            <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              <FaCheck />
            </div>
            <span className="ml-4 text-[#333] font-medium">Personal Details</span>
            <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#89c2fa]"></div>
          </li>
          <li className="relative flex items-center mb-12">
            <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              2
            </div>
            <span className="ml-4 text-[#333] font-medium">Contact Details</span>
            <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
          </li>
          <li className="relative flex items-center mb-12">
            <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              3
            </div>
            <span className="ml-4 text-[#333] font-medium">Additional Information</span>
            <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
          </li>
          <li className="relative flex items-center mb-12">
            <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              4
            </div>
            <span className="ml-4 text-[#333] font-medium">Privacy Preferences</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
          sidebarOpen ? 'ml-0' : 'md:ml-1/3'
        } transition-all duration-300 ease-in-out`}
      >
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
    
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
                  Phone Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col">
                <label htmlFor="country" className="text-gray-800 py-2 font-semibold">
                  Country
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {/* Add country options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="text-gray-800 py-2 font-semibold">
                  State
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-800 py-2 font-semibold">
                  City
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="city"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {/* Add city options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="postal" className="text-gray-800 py-2 font-semibold">
                  Postal Code
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="postal"
                  type="text"
                  placeholder="Postal Code"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.postal}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="timeAtAddress" className="text-gray-800 py-2 font-semibold">
                  Time at this address
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeAtAddress"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.timeAtAddress}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {/* Add time options here */}
                </select>
              </div>
            </div>
            <h2 className="text-gray-700 font-bold py-6">
              Preferences and Referral Information
              <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="shoppingPreferences" className="text-gray-700 font-bold py-2">
                  Shopping Preferences
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="shoppingPreferences"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="influencerReferralId" className="text-gray-700 py-2 font-semibold">
                  Influencer Referral ID
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="influencerReferralId"
                  type="text"
                  placeholder="Influencer Referral ID"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                />
              </div>
              </div>
     
            
          </form>
        </div>

        {/* <div className="flex justify-between mt-8">
          <button
            type="button"
            className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
          >
            Next
          </button>
        </div> */}
        <div className="flex justify-between mt-8">
      <Link to="/personal-details">
        <button
          type="button"
          className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
        >
          Back
        </button>
      </Link>
      <Link to="/additional-information">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
        >
          Next
        </button>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default ContactDetails;



// import React, { useState } from 'react';

// const ContactDetails = () => {
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [country, setCountry] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [postal, setPostal] = useState('');
//   const [timeAtAddress, setTimeAtAddress] = useState('');
//   const [shoppingPreferences, setShoppingPreferences] = useState('');
//   const [influencerReferralId, setInfluencerReferralId] = useState('');

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8">
//       {/* Sidebar and other content */}
      
//       <div className="bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
//                   Phone Number
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   type="text"
//                   placeholder="Phone Number"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
//                   Email Address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-4 mt-6">
//               <div className="flex flex-col">
//                 <label className="text-gray-700 font-bold py-4">
//                   Address Information
//                   <span className="text-red-500">*</span>
//                 </label>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex flex-col">
//                     <label htmlFor="country" className="text-gray-800 py-2 font-semibold">
//                       Country
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       id="country"
//                       className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                       value={country}
//                       onChange={(e) => setCountry(e.target.value)}
//                     >
//                       <option value="">Select</option>
//                     </select>
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="state" className="text-gray-800 py-2 font-semibold">
//                       State
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       id="state"
//                       className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                       value={state}
//                       onChange={(e) => setState(e.target.value)}
//                     >
//                       <option value="">Select</option>
//                     </select>
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="city" className="text-gray-800 py-2 font-semibold">
//                       City
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       id="city"
//                       className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                       value={city}
//                       onChange={(e) => setCity(e.target.value)}
//                     >
//                       <option value="">Select</option>
//                     </select>
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="postal" className="text-gray-800 py-2 font-semibold">
//                       Postal Code
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       id="postal"
//                       type="text"
//                       placeholder="Postal Code"
//                       className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                       value={postal}
//                       onChange={(e) => setPostal(e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="timeAtAddress" className="text-gray-800 py-2 font-semibold">
//                       Time at this address
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       id="timeAtAddress"
//                       className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                       value={timeAtAddress}
//                       onChange={(e) => setTimeAtAddress(e.target.value)}
//                     >
//                       <option value="">Select</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="shoppingPreferences" className="text-gray-800 py-2 font-semibold">
//                   Shopping Preferences
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="shoppingPreferences"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                   value={shoppingPreferences}
//                   onChange={(e) => setShoppingPreferences(e.target.value)}
//                 >
//                   <option value="">Select</option>
//                 </select>
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="influencerReferralId" className="text-gray-800 py-2 font-semibold">
//                   Influencer Referral ID
//                 </label>
//                 <input
//                   id="influencerReferralId"
//                   type="text"
//                   placeholder="Enter Referral ID"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                   value={influencerReferralId}
//                   onChange={(e) => setInfluencerReferralId(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-[#0E95F5] text-white py-2 px-6 rounded-lg hover:bg-[#007ACC]"
//               >
//                 Save & Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetails;