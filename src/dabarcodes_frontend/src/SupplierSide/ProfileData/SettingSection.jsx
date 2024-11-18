
// import React from "react";

// const SettingSection = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Settings</h2>

//       {/* Change Password */}
//       <h3 className="font-semibold text-lg mb-4">Change Password</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <input
//           type="password"
//           placeholder="Current Password"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//         />
//         <input
//           type="password"
//           placeholder="New Password"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//         />
//       </div>

//       {/* Two-Factor Authentication */}
//       <h3 className="font-semibold text-lg mb-4">Two-Factor Authentication</h3>
//       <div className="flex items-center mb-4">
//         <input type="checkbox" className="h-4 w-4 text-blue-600" />
//         <label className="ml-2 text-gray-800">
//           You will receive OTP on your phone number.
//         </label>
//       </div>

//       {/* add */}

//       <div className="flex flex-col gap-6 my-4">
//         <Switch
//           id="email-notifications-switch"
//           text="Email Notifications"
//           checked={formData.emailNotifications}
//           onChange={() => handleSwitchChange("emailNotifications")}
//         />
//         <Checkbox
//           id="email-options-all-skUs"
//           label="All SKUs and Reminders"
//           text="Notify me of all SKUs and reminders that have been created"
//           checked={formData.emailOptions.allSKUs}
//           onChange={() => handleCheckboxChange("emailOptions", "allSKUs")}
//           disabled={!formData.emailNotifications}
//         />
//         <Checkbox
//           id="email-options-skus-only"
//           label="SKUs only"
//           text="Notify me of SKUs only"
//           checked={formData.emailOptions.skusOnly}
//           onChange={() => handleCheckboxChange("emailOptions", "skusOnly")}
//           disabled={!formData.emailNotifications}
//         />
//         <Checkbox
//           id="email-options-important-reminders-only"
//           label="Important Reminders only"
//           text="Notify me of important reminders only"
//           checked={formData.emailOptions.importantRemindersOnly}
//           onChange={() =>
//             handleCheckboxChange("emailOptions", "importantRemindersOnly")
//           }
//           disabled={!formData.emailNotifications}
//         />
//       </div>

//       {/* Mobile Notifications */}
//       <div className="flex flex-col gap-6 my-4">
//         <Switch
//           id="mobile-notifications-switch"
//           text="Mobile Notifications"
//           checked={formData.mobileNotifications}
//           onChange={() => handleSwitchChange("mobileNotifications")}
//         />
//         <Checkbox
//           id="mobile-options-all-skUs"
//           label="All SKUs and Reminders"
//           text="Notify me of all SKUs and reminders that have been created"
//           checked={formData.mobileOptions.allSKUs}
//           onChange={() => handleCheckboxChange("mobileOptions", "allSKUs")}
//           disabled={!formData.mobileNotifications}
//         />
//         <Checkbox
//           id="mobile-options-skus-only"
//           label="SKUs only"
//           text="Notify me of SKUs only"
//           checked={formData.mobileOptions.skusOnly}
//           onChange={() => handleCheckboxChange("mobileOptions", "skusOnly")}
//           disabled={!formData.mobileNotifications}
//         />
//         <Checkbox
//           id="mobile-options-important-reminders-only"
//           label="Important Reminders only"
//           text="Notify me of important reminders only"
//           checked={formData.mobileOptions.importantRemindersOnly}
//           onChange={() =>
//             handleCheckboxChange("mobileOptions", "importantRemindersOnly")
//           }
//           disabled={!formData.mobileNotifications}
//         />
//       </div>
//     </div>
//   );
// };

// export default SettingSection;
// import React, {useState} from "react";

// const SettingSection = () => {
//   const [formData, setFormData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//     twoFactorAuth: false,
//     emailNotifications: {
//       all: true,
//       promotionsOnly: true,
//       productChanges: true,
//       supplierActivities: false,
//     },
//     mobileNotifications: {
//       all: false,
//       promotionsOnly: false,
//       supplierRequests: false,
//       importantDeadlines: false,
//     },
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prev) => ({...prev, [name]: value}));
//   };

//   const handleSwitchChange = (category) => {
//     setFormData((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const handleCheckboxChange = (notificationType, key) => {
//     setFormData((prev) => ({
//       ...prev,
//       [notificationType]: {
//         ...prev[notificationType],
//         [key]: !prev[notificationType][key],
//       },
//     }));
//   };

//   const validatePasswords = () => {
//     const newErrors = {};
//     if (!formData.currentPassword) newErrors.currentPassword = "Required";
//     if (!formData.newPassword) newErrors.newPassword = "Required";
//     if (formData.newPassword !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validatePasswords()) {
//       console.log("Form data submitted:", formData);
//       alert("Settings updated successfully!");
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Settings</h2>

//       {/* Change Password Section */}
//       <h3 className="font-semibold text-lg mb-4">Change Password</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div>
//             <input
//               type="password"
//               name="currentPassword"
//               placeholder="Current Password"
//               className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.currentPassword}
//               onChange={handleInputChange}
//             />
//             {errors.currentPassword && (
//               <p className="text-red-500 text-sm">{errors.currentPassword}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="newPassword"
//               placeholder="New Password"
//               className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.newPassword}
//               onChange={handleInputChange}
//             />
//             {errors.newPassword && (
//               <p className="text-red-500 text-sm">{errors.newPassword}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//             )}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//         >
//           Save Password
//         </button>
//       </form>

//       {/* Two-Factor Authentication Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4">
//         Two-Factor Authentication
//       </h3>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           className="h-4 w-4 text-blue-600"
//           checked={formData.twoFactorAuth}
//           onChange={() => handleSwitchChange("twoFactorAuth")}
//         />
//         <label className="ml-2 text-gray-800">
//           You will receive OTP on your phone number and email.
//         </label>
//       </div>

//       {/* Email Notifications Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4">Email Notifications</h3>
//       {renderNotificationOptions(
//         "emailNotifications",
//         formData.emailNotifications
//       )}

//       {/* Mobile Notifications Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4">Mobile Notifications</h3>
//       {renderNotificationOptions(
//         "mobileNotifications",
//         formData.mobileNotifications
//       )}
//     </div>
//   );

//   function renderNotificationOptions(category, options) {
//     return (
//       <div className="flex flex-col gap-4">
//         {Object.entries(options).map(([key, value]) => (
//           <div key={key} className="flex items-center">
//             <input
//               type="checkbox"
//               id={`${category}-${key}`}
//               checked={value}
//               onChange={() => handleCheckboxChange(category, key)}
//               className="h-4 w-4"
//             />
//             <label
//               htmlFor={`${category}-${key}`}
//               className="ml-2 text-gray-800"
//             >
//               {getNotificationLabel(key)}
//             </label>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   function getNotificationLabel(key) {
//     switch (key) {
//       case "all":
//         return "All Notifications - Receive notifications for all activities related to Products, suppliers, and promotions.";
//       case "promotionsOnly":
//         return "Promotions Only - Get notified only about new promotions, approvals, and expiry dates.";
//       case "productChanges":
//         return "Product Changes - Receive updates when new Products are added, updated, or removed.";
//       case "supplierActivities":
//         return "Supplier Activities - Get notifications for supplier requests, promotions, and changes in supplier details.";
//       case "supplierRequests":
//         return "Supplier Requests - Get mobile notifications when suppliers request promotions or make changes.";
//       case "importantDeadlines":
//         return "Important Deadlines - Be notified about important deadlines for suppliers and promotions.";
//       default:
//         return key;
//     }
//   }
// };

// export default SettingSection;

// import React, {useState} from "react";

// const SettingSection = () => {
//   const [formData, setFormData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//     twoFactorAuth: false,
//     emailNotifications: {
//       all: true,
//       promotionsOnly: true,
//       productChanges: true,
//       supplierActivities: false,
//     },
//     mobileNotifications: {
//       all: false,
//       promotionsOnly: false,
//       supplierRequests: false,
//       importantDeadlines: false,
//     },
//   });

//   const [toggleStates, setToggleStates] = useState({
//     twoFactor: true,
//     emailNotifications: true,
//     mobileNotifications: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prev) => ({...prev, [name]: value}));
//   };

//   const handleSwitchChange = (category) => {
//     setFormData((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const handleCheckboxChange = (notificationType, key) => {
//     setFormData((prev) => ({
//       ...prev,
//       [notificationType]: {
//         ...prev[notificationType],
//         [key]: !prev[notificationType][key],
//       },
//     }));
//   };

//   const validatePasswords = () => {
//     const newErrors = {};
//     if (!formData.currentPassword) newErrors.currentPassword = "Required";
//     if (!formData.newPassword) newErrors.newPassword = "Required";
//     if (formData.newPassword !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validatePasswords()) {
//       console.log("Form data submitted:", formData);
//       alert("Settings updated successfully!");
//     }
//   };

//   const toggleCheckboxState = (category) => {
//     setToggleStates((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   return (
//     <div className=" p-6 rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Settings</h2>

//       {/* Change Password Section */}
//       <h3 className="font-semibold text-lg mb-4">Change Password</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div>
//             <input
//               type="password"
//               name="currentPassword"
//               placeholder="Current Password"
//               className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.currentPassword}
//               onChange={handleInputChange}
//             />
//             {errors.currentPassword && (
//               <p className="text-red-500 text-sm">{errors.currentPassword}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="newPassword"
//               placeholder="New Password"
//               className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.newPassword}
//               onChange={handleInputChange}
//             />
//             {errors.newPassword && (
//               <p className="text-red-500 text-sm">{errors.newPassword}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//             )}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//         >
//           Save Password
//         </button>
//       </form>

//       {/* Two-Factor Authentication Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
//         Two-Factor Authentication
//         <ToggleSwitch
//           isChecked={toggleStates.twoFactor}
//           onToggle={() => toggleCheckboxState("twoFactor")}
//         />
//       </h3>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           className="h-4 w-4 text-blue-600"
//           checked={formData.twoFactorAuth}
//           onChange={() => handleSwitchChange("twoFactorAuth")}
//           disabled={!toggleStates.twoFactor}
//         />
//         <label className="ml-2">
//           You will receive OTP on your phone number and email.
//         </label>
//       </div>

//       {/* Email Notifications Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
//         Email Notifications
//         <ToggleSwitch
//           isChecked={toggleStates.emailNotifications}
//           onToggle={() => toggleCheckboxState("emailNotifications")}
//         />
//       </h3>
//       {renderNotificationOptions(
//         "emailNotifications",
//         formData.emailNotifications,
//         toggleStates.emailNotifications
//       )}

//       {/* Mobile Notifications Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
//         Mobile Notifications
//         <ToggleSwitch
//           isChecked={toggleStates.mobileNotifications}
//           onToggle={() => toggleCheckboxState("mobileNotifications")}
//         />
//       </h3>
//       {renderNotificationOptions(
//         "mobileNotifications",
//         formData.mobileNotifications,
//         toggleStates.mobileNotifications
//       )}
//     </div>
//   );

//   function renderNotificationOptions(category, options, isEnabled) {
//     return (
//       <div className="flex flex-col gap-4">
//         {Object.entries(options).map(([key, value]) => (
//           <div key={key} className="flex items-center">
//             <input
//               type="checkbox"
//               id={`${category}-${key}`}
//               checked={value}
//               onChange={() => handleCheckboxChange(category, key)}
//               className="h-4 w-4"
//               disabled={!isEnabled} // Disable checkbox if toggle is off
//             />
//             <label
//               htmlFor={`${category}-${key}`}
//               className="ml-2"
//             >
//               {getNotificationLabel(key)}
//             </label>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   function getNotificationLabel(key) {
//     switch (key) {
//       case "all":
//         return "All Notifications - Receive notifications for all activities related to Products, suppliers, and promotions.";
//       case "promotionsOnly":
//         return "Promotions Only - Get notified only about new promotions, approvals, and expiry dates.";
//       case "productChanges":
//         return "Product Changes - Receive updates when new Products are added, updated, or removed.";
//       case "supplierActivities":
//         return "Supplier Activities - Get notifications for supplier requests, promotions, and changes in supplier details.";
//       case "supplierRequests":
//         return "Supplier Requests - Get mobile notifications when suppliers request promotions or make changes.";
//       case "importantDeadlines":
//         return "Important Deadlines - Be notified about important deadlines for suppliers and promotions.";
//       default:
//         return key;
//     }
//   }
// };

// // Toggle Switch Component
// const ToggleSwitch = ({isChecked, onToggle}) => {
//   return (
//     <div className="relative">
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={onToggle}
//         className="hidden"
//       />
//       <div
//         className={`toggle-switch w-12 h-6 flex items-center bg-blue-200 rounded-full p-1 cursor-pointer ${
//           isChecked ? "bg-blue-600" : ""
//         }`}
//         onClick={onToggle}
//       >
//         <div
//           className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
//             isChecked ? "translate-x-6" : ""
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default SettingSection;
// import React, {useState} from "react";

// const SettingSection = () => {
//   const [formData, setFormData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//     twoFactorAuth: false,
//     emailNotifications: {
//       all: true,
//       promotionsOnly: true,
//       productChanges: true,
//       supplierActivities: false,
//     },
//     mobileNotifications: {
//       all: false,
//       promotionsOnly: false,
//       supplierRequests: false,
//       importantDeadlines: false,
//     },
//   });

//   const [toggleStates, setToggleStates] = useState({
//     twoFactor: true,
//     emailNotifications: true,
//     mobileNotifications: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const {name, value} = e.target;
//     setFormData((prev) => ({...prev, [name]: value}));
//   };

//   const handleSwitchChange = (category) => {
//     setFormData((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const handleCheckboxChange = (notificationType, key) => {
//     setFormData((prev) => ({
//       ...prev,
//       [notificationType]: {
//         ...prev[notificationType],
//         [key]: !prev[notificationType][key],
//       },
//     }));
//   };

//   const validatePasswords = () => {
//     const newErrors = {};
//     if (!formData.currentPassword) newErrors.currentPassword = "Required";
//     if (!formData.newPassword) newErrors.newPassword = "Required";
//     if (formData.newPassword !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validatePasswords()) {
//       console.log("Form data submitted:", formData);
//       alert("Settings updated successfully!");
//     }
//   };

//   const toggleCheckboxState = (category) => {
//     setToggleStates((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   return (
//     <div className="p-6 rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Settings</h2>

//       {/* Change Password Section */}
//       <h3 className="font-semibold text-lg mb-4">Change Password</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div>
//             <input
//               type="password"
//               name="currentPassword"
//               placeholder="Current Password"
//               className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.currentPassword}
//               onChange={handleInputChange}
//             />
//             {errors.currentPassword && (
//               <p className="text-red-500 text-sm">{errors.currentPassword}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="newPassword"
//               placeholder="New Password"
//               className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.newPassword}
//               onChange={handleInputChange}
//             />
//             {errors.newPassword && (
//               <p className="text-red-500 text-sm">{errors.newPassword}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//             )}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//         >
//           Save Password
//         </button>
//       </form>

//       {/* Two-Factor Authentication Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
//         Two-Factor Authentication
//         <ToggleSwitch
//           isChecked={toggleStates.twoFactor}
//           onToggle={() => toggleCheckboxState("twoFactor")}
//         />
//       </h3>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           className="h-4 w-4 text-blue-600"
//           checked={formData.twoFactorAuth}
//           onChange={() => handleSwitchChange("twoFactorAuth")}
//           disabled={!toggleStates.twoFactor}
//         />
//         <label className="ml-2">
//           You will receive OTP on your phone number and email.
//         </label>
//       </div>

//       {/* Email Notifications Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
//         Email Notifications
//         <ToggleSwitch
//           isChecked={toggleStates.emailNotifications}
//           onToggle={() => toggleCheckboxState("emailNotifications")}
//         />
//       </h3>
//       {renderNotificationOptions(
//         "emailNotifications",
//         formData.emailNotifications,
//         toggleStates.emailNotifications
//       )}

//       {/* Mobile Notifications Section */}
//       <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
//         Mobile Notifications
//         <ToggleSwitch
//           isChecked={toggleStates.mobileNotifications}
//           onToggle={() => toggleCheckboxState("mobileNotifications")}
//         />
//       </h3>
//       {renderNotificationOptions(
//         "mobileNotifications",
//         formData.mobileNotifications,
//         toggleStates.mobileNotifications
//       )}
//     </div>
//   );

//   function renderNotificationOptions(category, options, isEnabled) {
//     return (
//       <div className="flex flex-col gap-4">
//         {Object.entries(options).map(([key, value]) => (
//           <div key={key} className="flex items-center">
//             <input
//               type="checkbox"
//               id={`${category}-${key}`}
//               checked={value}
//               onChange={() => handleCheckboxChange(category, key)}
//               className="h-4 w-4"
//               disabled={!isEnabled} // Disable checkbox if toggle is off
//             />
//             <label htmlFor={`${category}-${key}`} className="ml-2">
//               {getNotificationLabel(key)}
//             </label>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   function getNotificationLabel(key) {
//     switch (key) {
//       case "all":
//         return "All Notifications - Receive notifications for all activities related to Products, suppliers, and promotions.";
//       case "promotionsOnly":
//         return "Promotions Only - Get notified only about new promotions, approvals, and expiry dates.";
//       case "productChanges":
//         return "Product Changes - Receive updates when new Products are added, updated, or removed.";
//       case "supplierActivities":
//         return "Supplier Activities - Get notifications for supplier requests, promotions, and changes in supplier details.";
//       case "supplierRequests":
//         return "Supplier Requests - Get mobile notifications when suppliers request promotions or make changes.";
//       case "importantDeadlines":
//         return "Important Deadlines - Be notified about important deadlines for suppliers and promotions.";
//       default:
//         return key;
//     }
//   }
// };

// // Toggle Switch Component
// const ToggleSwitch = ({isChecked, onToggle}) => {
//   return (
//     <div className="relative">
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={onToggle}
//         className="hidden"
//       />
//       <div
//         className={`toggle-switch w-12 h-6 flex items-center bg-blue-200 rounded-full p-1 cursor-pointer ${
//           isChecked ? "bg-blue-600" : ""
//         }`}
//         onClick={onToggle}
//       >
//         <div
//           className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
//             isChecked ? "translate-x-6" : ""
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default SettingSection;
import React, {useState} from "react";

const SettingSection = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
    emailNotifications: {
      all: true,
      promotionsOnly: true,
      productChanges: true,
      supplierActivities: false,
    },
    mobileNotifications: {
      all: false,
      promotionsOnly: false,
      supplierRequests: false,
      importantDeadlines: false,
    },
  });

  const [toggleStates, setToggleStates] = useState({
    twoFactor: true,
    emailNotifications: true,
    mobileNotifications: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSwitchChange = (category) => {
    setFormData((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleCheckboxChange = (notificationType, key) => {
    setFormData((prev) => ({
      ...prev,
      [notificationType]: {
        ...prev[notificationType],
        [key]: !prev[notificationType][key],
      },
    }));
  };

  const validatePasswords = () => {
    const newErrors = {};
    if (!formData.currentPassword) newErrors.currentPassword = "Required";
    if (!formData.newPassword) newErrors.newPassword = "Required";
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      console.log("Form data submitted:", formData);
      alert("Settings updated successfully!");
    }
  };

  const toggleCheckboxState = (category) => {
    setToggleStates((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      {/* Change Password Section */}
      <h3 className="font-semibold text-lg mb-4">Change Password</h3>
      {/* <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
              value={formData.currentPassword}
              onChange={handleInputChange}
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm">{errors.currentPassword}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Save Password
        </button>
      </form> */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
              value={formData.currentPassword}
              onChange={handleInputChange}
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm">{errors.currentPassword}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border border-gray-600 p-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <a href="" className="text-blue-600 underline hover:text-blue-800">
          Forgot Password?
        </a>
      </form>

      {/* Two-Factor Authentication Section */}
      <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
        Two-Factor Authentication
        <ToggleSwitch
          isChecked={toggleStates.twoFactor}
          onToggle={() => toggleCheckboxState("twoFactor")}
        />
      </h3>
      <div className="flex items-center mb-4">
      
        <div className="flex flex-col">
          <li> You will receive OTP on your phone number </li>
          <li> You will receive OTP on your email.</li>
        </div>
      </div>

      {/* Email Notifications Section */}
      <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
        Email Notifications
        <ToggleSwitch
          isChecked={toggleStates.emailNotifications}
          onToggle={() => toggleCheckboxState("emailNotifications")}
        />
      </h3>
      {renderNotificationOptions(
        "emailNotifications",
        formData.emailNotifications,
        toggleStates.emailNotifications
      )}

      {/* Mobile Notifications Section */}
      <h3 className="font-semibold text-lg mt-8 mb-4 flex justify-between items-center">
        Mobile Notifications
        <ToggleSwitch
          isChecked={toggleStates.mobileNotifications}
          onToggle={() => toggleCheckboxState("mobileNotifications")}
        />
      </h3>
      {renderNotificationOptions(
        "mobileNotifications",
        formData.mobileNotifications,
        toggleStates.mobileNotifications
      )}
    </div>
  );

  function renderNotificationOptions(category, options, isEnabled) {
    return (
      <div className="flex flex-col gap-4">
        {Object.entries(options).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`${category}-${key}`}
                checked={value}
                onChange={() => handleCheckboxChange(category, key)}
                className="h-4 w-4"
                disabled={!isEnabled} // Disable checkbox if toggle is off
              />
              <label
                htmlFor={`${category}-${key}`}
                className={`ml-2 font-bold ${
                  key === "all" ? "font-bold text-gray-800" : ""
                }`}
              >
                {getNotificationLabel(key)}
              </label>
            </div>
            <p className="ml-6 text-gray-600 text-sm">
              {getNotificationDescription(key)}
            </p>
          </div>
        ))}
      </div>
    );
  }

  function getNotificationLabel(key) {
    switch (key) {
      case "all":
        return "All Notifications";
      case "promotionsOnly":
        return "Promotions Only";
      case "productChanges":
        return "Product Changes";
      case "supplierActivities":
        return "Supplier Activities";
      case "supplierRequests":
        return "Supplier Requests";
      case "importantDeadlines":
        return "Important Deadlines";
      default:
        return key;
    }
  }

  function getNotificationDescription(key) {
    switch (key) {
      case "all":
        return "Receive notifications for all activities related to Products, suppliers, and promotions.";
      case "promotionsOnly":
        return "Get notified only about new promotions, promotion approvals, and expiry dates.";
      case "productChanges":
        return "Receive updates when new Products are added, updated, or removed.";
      case "supplierActivities":
        return "Get notifications for supplier requests, promotions, and changes in supplier details.";
      case "supplierRequests":
        return "Get instant notifications when suppliers request promotions or make changes.";
      case "importantDeadlines":
        return "Be notified about important deadlines for promotions, Product uploads, or supplier agreements.";
      default:
        return "";
    }
  }
};

// Toggle Switch Component
const ToggleSwitch = ({isChecked, onToggle}) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className="hidden"
      />
      <div
        className={`toggle-switch w-12 h-6 flex items-center bg-blue-200 rounded-full p-1 cursor-pointer ${
          isChecked ? "bg-blue-600" : ""
        }`}
        onClick={onToggle}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isChecked ? "translate-x-6" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default SettingSection;


