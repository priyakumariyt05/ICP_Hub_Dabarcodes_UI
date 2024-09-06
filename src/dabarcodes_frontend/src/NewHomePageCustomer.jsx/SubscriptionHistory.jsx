// import React from 'react';

// const SubscriptionHistory = ({ history }) => {
//   return (
//     <div className="p-4 border border-gray-200 rounded">
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-gray-600">Subscription History</span>
//         <a href="#" className="text-blue-500">View All</a>
//       </div>
//       <ul>
//         {history.map((item, index) => (
//           <li key={index} className="flex justify-between items-center mb-2">
//             <div>
//               <div className="text-gray-700">{item.date}</div>
//               <div className="text-gray-500 text-sm">{item.description}</div>
//             </div>
//             <div className="text-gray-700">{item.amount}</div>
//             <div className="text-gray-700">{item.transactionId}</div>
//             <div className={`text-${item.statusColor}-500`}>{item.status}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SubscriptionHistory;
import React from 'react';

const SubscriptionHistory = ({ history }) => {
  return (
    <div className="p-4 border border-gray-200 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-black font-roboto text-xl my-2 font-bold">Subscription History</span>
        <a href="#" className="text-black font-roboto">View All</a>
      </div>
      
      {/* Container for horizontal scrolling */}
      <div className="overflow-x-auto">
        <ul className="min-w-full"> 
          {history.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2 min-w-max"> 
              <div>
              <div
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '16.8px',
                    textAlign: 'left',
                    color: '#000000',
                  }}
                >
                  {item.date}
                </div>
                <div className="text-gray-500 text-sm">{item.description}</div>
              </div>
              <div className="text-gray-700">{item.amount}</div>
              <div className="text-gray-700">{item.transactionId}</div>
              {/* <div className={`text-${item.statusColor}-500`}>{item.status}</div> */}
              <div
                className={`text-${item.statusColor}-500 border border-${item.statusColor}-500 rounded-full px-2 py-1`}
              >
                {item.status}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionHistory;
