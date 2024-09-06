import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import LoginActivity from './LoginActivity';
import SupportFeedback from './SupportFeedback';


const GeneralSetting = () => {
 
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
    
  return (
    <>
       {/* <div className="bg-white w-full md:w-2/3  flex flex-col justify-start">
          <div>
            <h2 className="text-xl font-semibold mb-6">General Settings</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="privacy-preference" className="block text-sm font-medium text-gray-700">
             Language Prefrence
                </label>
                <input
                  id="privacy-preference"
                  name="privacy-preference"
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value=""
                  onChange=""

                  />
                  
              
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-sm">Give Permission to name-related logins</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-sm">Send confirmation email to verify logon permissions</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-sm">Send confirmation email to verify the degree of anonymity</span>
                </label>
              </div>
            </form>
          </div>
       
        </div> */}
        <div className="flex flex-col md:flex-row min-h-screen  ">


{/* <div className="w-full md:w-2/3 md:mt-0 md:ml-6 mb-10 rounded-md "> */}
{/* <div className="bg-white w-full md:w-2/3  md:p-8 flex flex-col p-6"> */}
<div className="flex flex-col w-full md:flex-col min-h-screen pt-6">
<h2 className="text-xl font-semibold mb-6 font-roboto">General Settings</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="privacy-preference" className="block text-xl font-medium text-gray-700">
             Language Prefrence
                </label>
                <input
                  id="privacy-preference"
                  name="privacy-preference"
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value=""
                  onChange=""

                  />
                  
              
              </div>
{/* Email Notifcation */}


              <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">Email Notifications</h2>
      <label className="inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div className="w-10 h-6 bg-blue-400 rounded-full shadow-inner"></div>
        <div
          className={`dot absolute w-6 h-6 bg-white rounded-full shadow transform transition ${
            isToggled ? 'translate-x-4' : ''
          }`}
        ></div>
      </label>
    </div>
            
 <div className="mb-4">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox text-blue-600 " />
    <span className="ml-2 text-lg font-medium font-roboto leading-6 text-[#171717]">All SKUs and Reminders</span>
  </label>
  <p className="ml-6 mt-1 text-[14px] text-[#646464] font-roboto">
  Notify me all SKUs and reminders that have been created
  </p>
</div>

<div className="mb-4">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-lg font-medium font-roboto leading-6 text-[#171717]">SKUs only</span>
  </label>
  <p className="ml-6 mt-1 text-[14px] text-[#646464] font-roboto">
  Notify me all SKUs and reminders that have been created
  </p>
</div>

<div className="mb-4">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-lg font-medium font-roboto leading-6 text-[#171717]">Important Reminders only</span>
  </label>
  <p className="ml-6 mt-1 text-[14px] text-[#646464] font-roboto">
  Notify me all SKUs and reminders that have been created
  </p>
</div>

           {/* Mobile Notification */}

           <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">Mobile Notifications</h2>
      <label className="inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div className="w-10 h-6 bg-blue-400 rounded-full shadow-inner"></div>
        <div
          className={`dot absolute w-6 h-6 bg-white rounded-full shadow transform transition ${
            isToggled ? 'translate-x-4' : ''
          }`}
        ></div>
      </label>
    </div>
            
 <div className="mb-4">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox text-blue-600 " />
    <span className="ml-2 text-lg font-medium font-roboto leading-6 text-[#171717]">All SKUs and Reminders</span>
  </label>
  <p className="ml-6 mt-1 text-[14px] text-[#646464] font-roboto">
  Notify me all SKUs and reminders that have been created
  </p>
</div>

<div className="mb-4">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-lg font-medium font-roboto leading-6 text-[#171717]">SKUs only</span>
  </label>
  <p className="ml-6 mt-1 text-[14px] text-[#646464] font-roboto">
  Notify me all SKUs and reminders that have been created
  </p>
</div>

<div className="mb-4">
  <label className="inline-flex items-center">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-lg font-medium font-roboto leading-6 text-[#171717]">Important Reminders only</span>
  </label>
  <p className="ml-6 mt-1 text-[14px] text-[#646464] font-roboto">
  Notify me all SKUs and reminders that have been created
  </p>
</div>
{/* <hr className="my-6 border-t-2 border-gray-300" /> 
     <LoginActivity/>
     <hr className="my-8 border-t-2 border-gray-300" /> 
           <SupportFeedback/> */}
       </form>















    
 
</div>
</div>
    </>
  )
}

export default GeneralSetting;
