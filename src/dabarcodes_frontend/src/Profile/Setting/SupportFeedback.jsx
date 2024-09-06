
// import React from 'react';
// import { ChevronRightIcon } from '@heroicons/react/solid'; 

// const SupportFeedback = () => {
//   // Support Links
//   const links = [
//     { text: 'Help Center', url: '/help' },
//     { text: 'Contact Support', url: '/contact-support' },
//     { text: 'Feedback', url: '/feedback' }
//   ];

//   // Buttons for Support Section
//   const buttons = [
//     { text: 'Logout', onClick: () => console.log('Logout clicked'), outlined: false },
//     { text: 'Logout from all devices', onClick: () => console.log('Logout from all devices clicked'), outlined: true }
//   ];

//   return (
//     <div className="  max-w-4xl mx-auto">
//       {/* Section Header */}
//       <h2 className="text-xl font-semibold mb-6 font-roboto pt-6">Support and Feedback</h2>

//       {/* Support Links */}
//       <div className="space-y-4">
//         {links.map((link, index) => (
//           <div key={index} className="flex justify-between items-center border-b pb-2">
//             <p className="text-md font-medium font-roboto">{link.text}</p>
//             {/* Heroicons Chevron Right Icon */}
//             <ChevronRightIcon className="w-5 h-5 text-gray-400" />
//           </div>
//         ))}
//       </div>

//       {/* Buttons for Logout Options */}
//       <div className="flex space-x-4 mt-6 max-w-md font-roboto">
//         {buttons.map((button, index) => (
//           <button
//             key={index}
//             onClick={button.onClick}
//             className={`w-full py-2 rounded-lg ${button.outlined ? 'border border-blue-500 text-blue-500' : 'bg-blue-500 text-white'}`}
//           >
//             {button.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SupportFeedback;
// import React from 'react';
// import { ChevronRightIcon } from '@heroicons/react/solid';
// import { Link } from 'react-router-dom'; // Import Link

// const SupportFeedback = () => {
//   // Support Links
//   const links = [
//     { text: 'Help Center', url: '/help' },
//     { text: 'Contact Support', url: 'contact-support' },
//     { text: 'Feedback', url: 'feedback' }
//   ];

//   // Buttons for Support Section
//   const buttons = [
//     { text: 'Logout', onClick: () => console.log('Logout clicked'), outlined: false },
//     { text: 'Logout from all devices', onClick: () => console.log('Logout from all devices clicked'), outlined: true }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto">
//       {/* Section Header */}
//       <h2 className="text-xl font-semibold mb-6 font-roboto pt-6">Support and Feedback</h2>

//       {/* Support Links */}
//       <div className="space-y-4">
//         {links.map((link, index) => (
//           <Link key={index} to={link.url} className="flex justify-between items-center border-b pb-2 text-md font-medium font-roboto hover:text-blue-500">
//             <p>{link.text}</p>
//             {/* Heroicons Chevron Right Icon */}
//             <ChevronRightIcon className="w-5 h-5 text-gray-400" />
//           </Link>
//         ))}
//       </div>

//       {/* Buttons for Logout Options */}
//       <div className="flex space-x-4 mt-6 max-w-md font-roboto">
//         {buttons.map((button, index) => (
//           <button
//             key={index}
//             onClick={button.onClick}
//             className={`w-full py-2 rounded-lg ${button.outlined ? 'border border-blue-500 text-blue-500' : 'bg-blue-500 text-white'}`}
//           >
//             {button.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SupportFeedback;
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Link, Outlet } from 'react-router-dom'; 

const SupportFeedback = () => {
  // Support Links
  const links = [
    { text: 'Help Center', url: 'help' },
    { text: 'Contact Support', url: 'contact-support' },
    { text: 'Feedback', url: 'feedback' }
  ];

  // Buttons for Support Section
  const buttons = [
    { text: 'Logout', onClick: () => console.log('Logout clicked'), outlined: false },
    { text: 'Logout from all devices', onClick: () => console.log('Logout from all devices clicked'), outlined: true }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <h2 className="text-xl font-semibold mb-6 font-roboto pt-6">Support and Feedback</h2>

      {/* Support Links */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className="flex justify-between items-center border-b pb-2 text-md font-medium font-roboto hover:text-blue-500"
          >
            <p>{link.text}</p>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>

      {/* Buttons for Logout Options */}
      <div className="flex space-x-4 mt-6 max-w-md font-roboto">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`w-full py-2 rounded-lg ${button.outlined ? 'border border-blue-500 text-blue-500' : 'bg-blue-500 text-white'}`}
          >
            {button.text}
          </button>
        ))}
      </div>

      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default SupportFeedback;
