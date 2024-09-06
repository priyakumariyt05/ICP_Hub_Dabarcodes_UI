// import React from 'react'
// import LeftSidebar from '../LeftSidebar'
// import { MdSearch } from 'react-icons/md'


// import { NavLink, Route, Routes } from 'react-router-dom';
// import PrivacyAndSecurity from './PrivacyAndSecurity';
// import GeneralSetting from './GeneralSetting';
// import SupportFeedback from './SupportFeedback';
// import LogoutSetting from './LogoutSetting';
// import Navbar2 from '../../components/Navbar2';
// import Footer from '../../components/Footer';
// import FeedbackForm from './FeedbackForm';
// import ContactSupport from './ContactSupport';


// const Setting = () => {
//   return (
    
//     <>
//     <Navbar2/>
//     <div className="flex flex-col md:flex-row min-h-screen p-6">
//                 <LeftSidebar />
//                 <main className="flex-1 p-6 md:p-10">
//                     {/* <h1 className="text-2xl font-bold mb-6">My Linked SKUs</h1> */}
//                     <div className="flex items-center justify-between mb-8">
//       <h1 className="text-2xl font-bold">Setting</h1>
//       {/* <div className="relative flex items-center justify-start">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
//         />
//         <MdSearch
//           className="absolute right-3 text-gray-500 "
//           style={{ top: '50%', transform: 'translateY(-50%)' }} // Center icon vertically
//         />
//       </div> */}
     
//     </div>

   
//  {/* nesting navbar */}
// <GeneralSetting/>


//     {/* <div>
//       <div className="flex flex-wrap items-start space-x-4 border border-gray-300 rounded-xl mb-4">
//         <NavLink to="general-setting" className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//           <p className="text-lg font-bold font-roboto">General Setting</p>
//         </NavLink>
//         <NavLink to="privacy-security" className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//           <p className="text-medium font-medium font-roboto">Privacy and Security</p>
//         </NavLink>
//         <NavLink to="support-feedback" className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//           <p className="text-medium font-medium font-roboto">Support and Feedback</p>
//         </NavLink>
//         <NavLink to="logout" className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//           <p className="text-medium font-medium font-roboto">Logout</p>
//         </NavLink>
//       </div>

//       <Routes>
//         <Route path="general-setting" element={<GeneralSetting />} />
//         <Route path="privacy-security" element={<PrivacyAndSecurity />} />
//         <Route path="support-feedback" element={<SupportFeedback />} />
//         <Route path="logout" element={<LogoutSetting />} />
   
//       </Routes>
//     </div>
//   */}




      
      

    
             
// </main>
//   </div>
//   <Footer/>
//     </>
    
//   )
// }

// export default Setting

import React from 'react'
import LeftSidebar from '../LeftSidebar'
import { MdSearch } from 'react-icons/md'


import { NavLink, Route, Routes } from 'react-router-dom';
import PrivacyAndSecurity from './PrivacyAndSecurity';
import GeneralSetting from './GeneralSetting';
import SupportFeedback from './SupportFeedback';
import LogoutSetting from './LogoutSetting';
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/Footer';
import FeedbackForm from './FeedbackForm';
import ContactSupport from './ContactSupport';
import LoginActivity from './LoginActivity';


const Setting = () => {
  return (
    
    <>
    <Navbar2/>
    <div className="flex flex-col md:flex-row min-h-screen p-6">
                <LeftSidebar />
                <main className="flex-1 p-6 md:p-10">
                    {/* <h1 className="text-2xl font-bold mb-6">My Linked SKUs</h1> */}
                    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold">Setting</h1>

     
    </div>

<GeneralSetting/>
<hr className="my-6 border-t-2 border-gray-300" /> 
     <LoginActivity/>
     <hr className="my-8 border-t-2 border-gray-300" /> 
           <SupportFeedback/>


           <Routes>
         
            <Route path="support-feedback/*" element={<SupportFeedback />} />
       
           
          </Routes>


      
      

    
             
</main>
  </div>
  <Footer/>
    </>
    
  )
}

export default Setting

