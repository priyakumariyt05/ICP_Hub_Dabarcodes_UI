// import React from "react";
// import {Link} from "react-router-dom";
// import BackButton from "../../Reusable/BackButton";

// const StoreDashboard = () => {
//   const sections = [
//     {
//       title: "Store Details",
//       description:
//         "View store location, type, and associated contact information",
//       link: "/dashboard/store-dashboard/store-details-page",
//     },
//     {
//       title: "Products Details",
//       description: "Add, edit, and track Product performance",
//       link: "/dashboard/store-dashboard/store-products-details-page",
//     },
//     {
//       title: "Employee Details",
//       description: "Manage permissions, performance and roles",
//       link: "/employee-details",
//     },
//     {
//       title: "Analytics and Reports",
//       description:
//         "View insights for store, product, performance and promotions",
//       link: "/analytics-reports",
//     },
//     {
//       title: "Supplier Details",
//       description: "View, approve or request supplier promotions",
//       link: "/supplier-details",
//     },
//     {
//       title: "Promotion Details",
//       description: "View all promotions",
//       link: "/promotion-details",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-start p-8">
     
//       <div className="flex justify-between ">
//         <div className="flex flex-start">
//           <BackButton />
//           <h1 className="text-2xl font-semibold mb-4">Reliance Mart Store 1</h1>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//         {sections.map((section, index) => (
//           <Link to={section.link} key={index}>
//             <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
//               <h2 className="text-lg font-medium">{section.title}</h2>
//               <p className="text-sm text-gray-600 mt-2">
//                 {section.description}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StoreDashboard;
import React from "react";
import {Link, useParams} from "react-router-dom";
import BackButton from "../../Reusable/BackButton";

const StoreDashboard = () => {
  const sections = [
    {
      title: "Store Details",
      description:
        "View store location, type, and associated contact information",
      link: "/support-worker/store-dashboard/store-details-page",
    },
    {
      title: "Products Details",
      description: "Add, edit, and track Product performance",
      link: "/support-worker/store-dashboard/store-products-details-page",
    },
    {
      title: "Employee Details",
      description: "Manage permissions, performance and roles",
      link: "/support-worker/store-dashboard/store-employee-details-page",
    },
    {
      title: "Analytics and Reports",
      description:
        "View insights for store, product, performance and promotions",
      link: "/support-worker/store-dashboard/store-analytics-reports-page",
    },
    {
      title: "Supplier Details",
      description: "View, approve or request supplier promotions",
      link: "/support-worker/store-dashboard/store-supplier-details-page",
    },
    {
      title: "Promotion Details",
      description: "View all promotions",
      link: "/support-worker/store-dashboard/store-promotion-details-page",
    },
  ];

  // Get the dynamic section from the URL
  const {section} = useParams();

  // Find the section that matches the URL parameter
  const selectedSection = sections.find((sec) => sec.link.includes(section));

  return (
    <div className="flex flex-col items-start p-8">
      <div className="flex justify-between ">
        <div className="flex flex-start">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">
            {selectedSection ? selectedSection.title : "Reliance Mart Store 1"}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {sections.map((section, index) => (
          <Link to={section.link} key={index}>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-lg font-medium">{section.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoreDashboard;
// import React, {useState} from "react";

// const StoreDashboard = () => {
//   const [selectedSection, setSelectedSection] = useState(null);

//   const sections = [
//     {
//       title: "Store Details",
//       description:
//         "View store location, type, and associated contact information",
//       details:
//         "Detailed information about store location, type, and contact info goes here.",
//     },
//     {
//       title: "Products Details",
//       description: "Add, edit, and track Product performance",
//       details:
//         "Here you can manage products, add new ones, and track performance metrics.",
//     },
//     {
//       title: "Employee Details",
//       description: "Manage permissions, performance and roles",
//       details: "Manage employee roles, permissions, and performance records.",
//     },
//     {
//       title: "Analytics and Reports",
//       description:
//         "View insights for store, product, performance and promotions",
//       details:
//         "Detailed analytics and reports about store performance and promotions.",
//     },
//     {
//       title: "Supplier Details",
//       description: "View, approve or request supplier promotions",
//       details: "Manage supplier details and approve or request promotions.",
//     },
//     {
//       title: "Promotion Details",
//       description: "View all promotions",
//       details: "Details about current and upcoming promotions.",
//     },
//   ];

//   const handleCardClick = (index) => {
//     setSelectedSection(index);
//   };

//   const handleBackClick = () => {
//     setSelectedSection(null);
//   };

//   return (
//     <div className="flex flex-col items-start p-8">
//       <h1 className="text-xl font-semibold mb-4">
//         <span className="mr-2">◯</span> Reliance Mart Store 1
//       </h1>
//       {selectedSection === null ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
//               onClick={() => handleCardClick(index)}
//             >
//               <h2 className="text-lg font-medium">{section.title}</h2>
//               <p className="text-sm text-gray-600 mt-2">
//                 {section.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="w-full p-6 border border-gray-300 rounded-lg">
//           <button
//             className="mb-4 text-blue-600 hover:underline"
//             onClick={handleBackClick}
//           >
//             &larr; Back
//           </button>
//           <h2 className="text-2xl font-semibold mb-2">
//             {sections[selectedSection].title}
//           </h2>
//           <p className="text-gray-700">{sections[selectedSection].details}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StoreDashboard;

