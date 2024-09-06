
// import React from 'react';
// import CustomDoughnutChart from './CustomDoughnutChart';
// import LeftSidebar from './LeftSidebar';
// import Navbar2 from '../components/Navbar2';
// import Footer from '../components/Footer';

// const SubscriptionProfile = () => {
//   const data = {
//     labels: ['Used', 'Unused', 'Pending'],
//     datasets: [
//       {
//         data: [45, 20, 54],
//         backgroundColor: ['#0C87B5', '#10B4F1', '#07516C'],
//         hoverBackgroundColor: ['#2563eb', '#9ca3af', '#003D6A'],
//         borderColor: ['#ffffff', '#ffffff', '#ffffff'],
//         borderWidth: 2,
//         borderRadius: 30,
//       },
//     ],
//   };

//   const options = {
//     cutout: '85%',
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <>
//       <Navbar2 />
//       {/* <div className="flex flex-col md:flex-row min-h-screen p-6">
//         <LeftSidebar />
//         <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
//         <h1
//   className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left"
//   style={{ fontFamily: 'Butler, serif' }}
// >
//   Subscription Management
// </h1>

//           <div className="space-y-6">
//             <section className="border-b pb-6">
//             <h2
//   className="text-[20px] font-extrabold text-[#171717] mb-4 leading-[24px] text-left"
//   style={{ fontFamily: 'Butler, serif' }}
// >
//   Subscription Details
// </h2>

//               <p className='mb-4'>Monthly Plan</p>
//               <p className='mb-2'>Next Renewal: August 26, 2024</p>
//               <p className="flex items-center">
//                 <img src="/image/visa.png" alt="Visa" className="mr-2" />
//                 * * ** 1234
//               </p>
//             </section>

//             <section className="border-b pb-6">
            
// <div className="flex flex-col md:flex-row justify-between items-center">
//                 <h2 className="text-xl font-semibold">Utility Tokens</h2>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button>
//               </div>
//               <div className="flex flex-col md:flex-row items-center  justify-start mt-4">
//                 <CustomDoughnutChart data={data} options={options} centerText=" Total 99" />
//                 <div className="mt-4 md:mt-0 md:ml-6 space-y-1 text-center">
//                   <p className='font-bold text-[#0C87B5]'>Total utility tokens: 99</p>
//                   <p className='font-bold text-[#10B4F1]'>Used utility tokens: 54</p>
//                   <p className='font-bold text-[#07516C]'>Unused utility tokens: 45</p>
//                 </div>
//               </div>
//             </section>

//             <section className="space-y-4 pt-8">
//               <button className="bg-blue-500 text-white py-2 px-6 rounded block mx-auto md:mx-0">
//                 Change Subscription Plan
//               </button>
//               <hr className="border-t-2 border-gray-300 my-4" />
//               <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded block mx-auto md:mx-0">
//                 Cancel Subscription Plan
//               </button>
//             </section>
//           </div>
//         </main>
//       </div> */}
//       <div className="flex flex-col md:flex-row min-h-screen p-6">
//   <LeftSidebar />
//   <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
//     <h1
//       className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left"
//       style={{ fontFamily: 'Butler, serif' }}
//     >
//       Subscription Management
//     </h1>

//     <div className="space-y-6">
//       <section className="border-b pb-6">
//         <h2
//           className="text-[20px] font-extrabold text-[#171717] mb-4 leading-[24px] text-left"
//           style={{ fontFamily: 'Butler, serif' }}
//         >
//           Subscription Details
//         </h2>

//         <p className='mb-4'>Monthly Plan</p>
//         <p className='mb-2'>Next Renewal: August 26, 2024</p>
//         <p className="flex items-center">
//           <img src="/image/visa.png" alt="Visa" className="mr-2" />
//           * * ** 1234
//         </p>
//       </section>

//       <section className="border-b pb-6">
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           <h2 className="text-xl font-semibold">Utility Tokens</h2>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button>
//         </div>
//         <div className="flex flex-col md:flex-row items-start mt-4">
//           <div className="flex-shrink-0">
//             <CustomDoughnutChart data={data} options={options} centerText="Total 99" />
//           </div>
//           <div className="md:ml-6 space-y-1 text-left mt-4">
//             <p className='font-bold text-[#0C87B5]'>Total utility tokens: 99</p>
//             <p className='font-bold text-[#10B4F1]'>Used utility tokens: 54</p>
//             <p className='font-bold text-[#07516C]'>Unused utility tokens: 45</p>
//           </div>
//         </div>
//       </section>

//       <section className="space-y-4 pt-8">
//         <button className="bg-blue-500 text-white py-2 px-6 rounded block mx-auto md:mx-0">
//           Change Subscription Plan
//         </button>
//         <hr className="border-t-2 border-gray-300 my-4" />
//         <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded block mx-auto md:mx-0">
//           Cancel Subscription Plan
//         </button>
//       </section>
//     </div>
//   </main>
// </div>

//       <Footer />
//     </>
//   );
// };

// export default SubscriptionProfile;

// import React from 'react';
// import CustomDoughnutChart from './CustomDoughnutChart';
// import LeftSidebar from './LeftSidebar';
// import Navbar2 from '../components/Navbar2';
// import Footer from '../components/Footer';

// const SubscriptionProfile = () => {
//   const data = {
//     labels: ['Used', 'Unused', 'Pending'],
//     datasets: [
//       {
//         data: [45, 20, 54],
//         backgroundColor: ['#0C87B5', '#10B4F1', '#07516C'],
//         hoverBackgroundColor: ['#2563eb', '#9ca3af', '#003D6A'],
//         borderColor: ['#ffffff', '#ffffff', '#ffffff'],
//         borderWidth: 2,
//         borderRadius: 30,
//       },
//     ],
//   };

//   const options = {
//     cutout: '85%',
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <>
//       <Navbar2 />
//       {/* <div className="flex flex-col md:flex-row min-h-screen p-6">
//         <LeftSidebar />
//         <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
//         <h1
//   className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left"
//   style={{ fontFamily: 'Butler, serif' }}
// >
//   Subscription Management
// </h1>

//           <div className="space-y-6">
//             <section className="border-b pb-6">
//             <h2
//   className="text-[20px] font-extrabold text-[#171717] mb-4 leading-[24px] text-left"
//   style={{ fontFamily: 'Butler, serif' }}
// >
//   Subscription Details
// </h2>

//               <p className='mb-4'>Monthly Plan</p>
//               <p className='mb-2'>Next Renewal: August 26, 2024</p>
//               <p className="flex items-center">
//                 <img src="/image/visa.png" alt="Visa" className="mr-2" />
//                 * * ** 1234
//               </p>
//             </section>

//             <section className="border-b pb-6">
            
// <div className="flex flex-col md:flex-row justify-between items-center">
//                 <h2 className="text-xl font-semibold">Utility Tokens</h2>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button>
//               </div>
//               <div className="flex flex-col md:flex-row items-center  justify-start mt-4">
//                 <CustomDoughnutChart data={data} options={options} centerText=" Total 99" />
//                 <div className="mt-4 md:mt-0 md:ml-6 space-y-1 text-center">
//                   <p className='font-bold text-[#0C87B5]'>Total utility tokens: 99</p>
//                   <p className='font-bold text-[#10B4F1]'>Used utility tokens: 54</p>
//                   <p className='font-bold text-[#07516C]'>Unused utility tokens: 45</p>
//                 </div>
//               </div>
//             </section>

//             <section className="space-y-4 pt-8">
//               <button className="bg-blue-500 text-white py-2 px-6 rounded block mx-auto md:mx-0">
//                 Change Subscription Plan
//               </button>
//               <hr className="border-t-2 border-gray-300 my-4" />
//               <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded block mx-auto md:mx-0">
//                 Cancel Subscription Plan
//               </button>
//             </section>
//           </div>
//         </main>
//       </div> */}
//       <div className="flex flex-col md:flex-row min-h-screen p-6">
//   <LeftSidebar />
//   <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
//     <h1
//       className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left"
//       style={{ fontFamily: 'Butler, serif' }}
//     >
//       Subscription Management
//     </h1>

//     <div className="space-y-6">
//       <section className="border-b pb-6">
//         <h2
//           className="text-[20px] font-extrabold text-[#171717] mb-4 leading-[24px] text-left"
//           style={{ fontFamily: 'Butler, serif' }}
//         >
//           Subscription Details
//         </h2>

//         <p className='mb-4'>Monthly Plan</p>
//         <p className='mb-2'>Next Renewal: August 26, 2024</p>
//         <p className="flex items-center">
//           <img src="/image/visa.png" alt="Visa" className="mr-2" />
//           * * ** 1234
//         </p>
//       </section>

//       <section className="border-b pb-6">
//         <div className="flex flex-col md:flex-row justify-between items-start">
//           <h2 className="text-xl font-semibold">Utility Tokens</h2>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button>
//         </div>
//         <div className="flex flex-col md:flex-row items-start mt-4">
//           <div className="flex-shrink-0">
//             <CustomDoughnutChart data={data} options={options} centerText="Total 99" />
//           </div>
//           <div className="md:ml-6 space-y-1 text-left mt-4">
//             <p className='font-bold text-[#0C87B5]'>Total utility tokens: 99</p>
//             <p className='font-bold text-[#10B4F1]'>Used utility tokens: 54</p>
//             <p className='font-bold text-[#07516C]'>Unused utility tokens: 45</p>
//           </div>
//         </div>
//       </section>

//       <section className="space-y-4 pt-8">
//         <button className="bg-blue-500 text-white py-2 px-6 rounded block mx-auto md:mx-0">
//           Change Subscription Plan
//         </button>
//         <hr className="border-t-2 border-gray-300 my-4" />
//         <button className="bg-white text-blue-500 border border-blue-500 py-2 px-6 rounded block mx-auto md:mx-0">
//           Cancel Subscription Plan
//         </button>
//       </section>
//     </div>
//   </main>
// </div>

//       <Footer />
//     </>
//   );
// };

// export default SubscriptionProfile;

import React from 'react';
import CustomDoughnutChart from './CustomDoughnutChart';
import LeftSidebar from './LeftSidebar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import SubscriptionManagement from '../NewHomePageCustomer.jsx/SubscriptionManagement';
import PlanCard from '../NewHomePageCustomer.jsx/PlanCard';

const SubscriptionProfile = () => {
  const data = {
    labels: ['Used', 'Unused', 'Pending'],
    datasets: [
      {
        data: [45, 20, 54],
        backgroundColor: ['#0C87B5', '#10B4F1', '#07516C'],
        hoverBackgroundColor: ['#2563eb', '#9ca3af', '#003D6A'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
        borderRadius: 30,
      },
    ],
  };

  const options = {
    cutout: '85%',
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Navbar2 />
     
  <div className="flex flex-col md:flex-row min-h-screen p-6">
  <LeftSidebar />
  {/* <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
    <h1
      className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left"
      style={{ fontFamily: 'Butler, serif' }}
    >
      Subscription Management
    </h1>

    <div className="space-y-6">
      <section className="border-b pb-6">
        <h2
          className="text-[20px] font-extrabold text-[#171717] mb-4 leading-[24px] text-left"
          style={{ fontFamily: 'Butler, serif' }}
        >
          Subscription Details
        </h2>

        <p className='mb-4'>Monthly Plan</p>
        <p className='mb-2'>Next Renewal: August 26, 2024</p>
        <p className="flex items-center">
          <img src="/image/visa.png" alt="Visa" className="mr-2" />
          * * ** 1234
        </p>
      </section>

      <section className="border-b pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-xl font-semibold">Utility Tokens</h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button>
        </div>
        <div className="flex flex-col md:flex-row items-start mt-4">
          <div className="flex-shrink-0">
            <CustomDoughnutChart data={data} options={options} centerText="Total 99" />
          </div>
          <div className="md:ml-6 space-y-1 text-left mt-4">
            <p className='font-bold text-[#0C87B5]'>Total utility tokens: 99</p>
            <p className='font-bold text-[#10B4F1]'>Used utility tokens: 54</p>
            <p className='font-bold text-[#07516C]'>Unused utility tokens: 45</p>
          </div>
        </div>
      </section>
    
      <SubscriptionManagement/>
   
    </div>

  </main> */}
  <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
    <h1
      className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left"
      style={{ fontFamily: 'Butler, serif' }}
    >
    My Subscription
    </h1>

    <div className="space-y-6">
  <PlanCard/>

      <section className="border-b pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-xl font-semibold">Utility Tokens</h2>
          {/* <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button> */}
        </div>
        <div className="flex flex-col md:flex-row items-start mt-4">
          <div className="flex-shrink-0">
            <CustomDoughnutChart data={data} options={options} centerText="Total 99" />
          </div>
          <div className="md:ml-6 space-y-1 text-left mt-4">
            <p className='font-bold text-[#0C87B5]'>Total utility tokens: 99</p>
            <p className='font-bold text-[#10B4F1]'>Used utility tokens: 54</p>
            <p className='font-bold text-[#07516C]'>Unused utility tokens: 45</p>
          </div>
        </div>
      </section>
    
      <SubscriptionManagement/>
   
    </div>

  </main>
</div>

      <Footer />
    </>
  );
};

export default SubscriptionProfile;
