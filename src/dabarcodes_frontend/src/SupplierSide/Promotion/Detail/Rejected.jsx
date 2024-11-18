import React from 'react'
import BackButton from '../../../Dashboard/Reusable/BackButton';
const Rejected = () => {
    const employeeData = [
        {
          name: "Arjun Patel",
          id: "E004",
          role: "Manager",
          email: "arjun.patel@gmail.com",
          phone: "+91 75272 20145",
          company: "Reliance Market",
        },
        {
          name: "Arjun Sharma",
          id: "E540",
          role: "Support Worker",
          email: "arjun.sharma@gmail.com",
          phone: "+91 75272 20145",
          company: "Reliance Market",
        },
      ];
  return (
    <>
            <div className=" mx-auto mt-8">
      <div className="flex justify-between ">
    
        <div className="flex flex-start">
           <BackButton />
        
          <h1 className="text-2xl font-semibold mb-4">
           Acceptance
          </h1>
         
        </div>
        
      </div>
      <div className="flex flex-wrap -mx-4">
        {employeeData.map((employee) => (
          <div key={employee.id} className="px-4 w-full md:w-1/2 lg:w-1/2 mb-4">
            <div className="border rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold">{employee.name}</h2>

              {/* Flex container for two-column layout */}
              <div className="flex justify-between mt-2">
                {/* Left column */}
                <div>
                  <p>{employee.id}</p>
                  <p>{employee.email}</p>
                  <p>{employee.phone}</p>
                </div>
                {/* Right column */}
                <div className="text-right">
                  <p className="text-gray-600">{employee.role}</p>
                  <p className="text-gray-600">{employee.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Rejected