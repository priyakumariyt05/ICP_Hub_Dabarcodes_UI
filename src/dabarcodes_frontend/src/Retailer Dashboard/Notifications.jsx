// import React from 'react';
// import NotificationCard from "./NotificationCard";
// import Sidebar from "./Sidebar";

// function Notifications() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
// {/* Main */}
//       <div className="flex-grow p-6 bg-gray-100 overflow-y-auto md:ml-64 transition-all duration-300 ease-in-out">
//         <h2 className="text-2xl font-semibold mb-6">Notifications</h2>

       
//         <NotificationCard
//           title="Upcoming Promotion Opportunity"
//           description={`A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`}
//           showActions={false}
//         />
//         <NotificationCard
//           title="Upcoming Promotion Opportunity"
//           description={`A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`}
//           showActions={true}
//         />
//         <NotificationCard
//           title="Upcoming Promotion Opportunity"
//           description={`A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period. Work with Supplier ABC to adjust stock levels and maximize impact.`}
//           showActions={false}
//         />
//         <NotificationCard
//           title="Upcoming Promotion Opportunity"
//           description={`A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`}
//           showActions={false}
//         />
//         <NotificationCard
//           title="Upcoming Promotion Opportunity"
//           description={`Promotion event approaching soon. Coordinate to ensure timely execution.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`}
//           showActions={false}
//         />
//         <NotificationCard
//           title="Upcoming Promotion Opportunity"
//           description={`Promotion event approaching soon. Maximize customer reach.`}
//           showActions={false}
//         />
//       </div>
//     </div>
//   );
// }

// export default Notifications;

import React from 'react';
import NotificationCard from "./NotificationCard";
// import Sidebar from "./Sidebar";

const notifications = [
  {
    title: "Upcoming Promotion Opportunity",
    description: `A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`,
    showActions: false
  },
  {
    title: "Upcoming Promotion Opportunity",
    description: `A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`,
    showActions: true
  },
  {
    title: "Upcoming Promotion Opportunity",
    description: `A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period. Work with Supplier ABC to adjust stock levels and maximize impact.`,
    showActions: false
  },
  {
    title: "Upcoming Promotion Opportunity",
    description: `A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`,
    showActions: false
  },
  {
    title: "Upcoming Promotion Opportunity",
    description: `Promotion event approaching soon. Coordinate to ensure timely execution.\n\nSKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.`,
    showActions: false
  },
  {
    title: "Upcoming Promotion Opportunity",
    description: `Promotion event approaching soon. Maximize customer reach.`,
    showActions: false
  }
];

function Notifications() {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      {/* Main */}
      <div className="flex-grow p-6 bg-gray-100 overflow-y-auto md:ml-64 transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold mb-6">Notifications</h2>

        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            description={notification.description}
            showActions={notification.showActions}
          />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
