// import React, {useState} from "react";
// import {IoSearchOutline} from "react-icons/io5";
// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import HeaderWithButton from "../Reusable/HeaderWithButton";
// import AddEmployeePopup from "../Modals/AddEmployeePopup";
// import EmployeeUploadModal from "../Modals/EmployeeUploadModal";

// const Role = () => {
//   const [employees, setEmployees] = useState([
//     {
//       id: 214,
//       name: "Arjun Patel",
//       store: "Reliance Mart - Andheri",
//       role: "Manager",
//       category: "Grocery",
//       email: "nesay@gmail.com",
//     },
//     {
//       id: 524,
//       name: "Priya Sharma",
//       store: "Reliance Fresh - Bandra",
//       role: "Manager",
//       category: "Fresh Fruits",
//       email: "megav@gmail.com",
//     },
//     {
//       id: 584,
//       name: "Arjun Patel",
//       store: "Reliance Fresh - Bandra",
//       role: "Manager",
//       category: "Bakery",
//       email: "lacy@gmail.com",
//     },
//     {
//       id: 844,
//       name: "Nisha Kapoor",
//       store: "Reliance Mart - Andheri",
//       role: "Manager",
//       category: "Meat Products",
//       email: "ksene@gmail.com",
//     },
//     {
//       id: 141,
//       name: "Mohan Iyer",
//       store: "Reliance Mart - Ghatkopar",
//       role: "Support Person",
//       category: "Grocery",
//       email: "leia@gmail.com",
//     },
//     // Add more rows as needed
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortAscending, setSortAscending] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   // Filter employees based on the search term
//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Sort employees by ID
//   const sortedEmployees = [...filteredEmployees].sort((a, b) =>
//     sortAscending ? a.id - b.id : b.id - a.id
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(sortedEmployees.length / rowsPerPage);
//   const paginatedEmployees = sortedEmployees.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSort = () => {
//     setSortAscending(!sortAscending);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };
//   const modalOptions = [
//     {
//       label: "Add Single Employee",
//       component: (closeModal) => (
//         <AddEmployeePopup onClose={closeModal} handleAddEmployee={handleAddEmployee} />
//       ),
//     },
//     {
//       label: "Add Multiple Employee",
//       component: (closeModal) => (
//         <EmployeeUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];
//   return (
//     <div className="p-4">
//       <HeaderWithButton
//         heading="All Employee"
//         buttonText="Add New Employee"
//         modalOptions={modalOptions}
//       />
//       {/* Search and Sort Section */}

//       <div className="flex justify-end mb-4 mt-4">
//         <button
//           onClick={handleSort}
//           className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//         >
//           Sort by ID
//           <HiAdjustmentsHorizontal className="ml-2" />
//         </button>
//         <div className="relative ml-2 w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={handleSearch}
//             className="border rounded p-2 w-full pr-10"
//           />
//           <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>
//       {/* Table Section */}
//       <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 border-b">Employee ID</th>
//             <th className="p-2 border-b">Employee Name</th>
//             <th className="p-2 border-b">Assigned Store</th>
//             <th className="p-2 border-b">Assigned Role</th>
//             <th className="p-2 border-b">Category</th>
//             <th className="p-2 border-b">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedEmployees.map((employee, index) => (
//             <tr
//               key={employee.id}
//               className={`hover:bg-blue-50 ${
//                 index % 2 === 0 ? "bg-white" : "bg-gray-50"
//               }`}
//             >
//               <td className="p-2 border-b text-center">
//                 <input type="checkbox" className="mr-2" />
//                 {employee.id}
//               </td>
//               <td className="p-2 border-b">{employee.name}</td>
//               <td className="p-2 border-b">{employee.store}</td>
//               <td className="p-2 border-b">{employee.role}</td>
//               <td className="p-2 border-b">{employee.category}</td>
//               <td className="p-2 border-b">{employee.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Section */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Role;
// import React, {useState} from "react";
// import {IoSearchOutline} from "react-icons/io5";
// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import HeaderWithButton from "../Reusable/HeaderWithButton";
// import AddEmployeePopup from "../Modals/AddEmployeePopup";
// import EmployeeUploadModal from "../Modals/EmployeeUploadModal";

// const Role = () => {
//   const [employees, setEmployees] = useState([
//     {
//       id: 214,
//       name: "Arjun Patel",
//       store: "Reliance Mart - Andheri",
//       role: "Manager",
//       category: "Grocery",
//       email: "nesay@gmail.com",
//     },
//     {
//       id: 524,
//       name: "Priya Sharma",
//       store: "Reliance Fresh - Bandra",
//       role: "Manager",
//       category: "Fresh Fruits",
//       email: "megav@gmail.com",
//     },
//     {
//       id: 584,
//       name: "Arjun Patel",
//       store: "Reliance Fresh - Bandra",
//       role: "Manager",
//       category: "Bakery",
//       email: "lacy@gmail.com",
//     },
//     {
//       id: 844,
//       name: "Nisha Kapoor",
//       store: "Reliance Mart - Andheri",
//       role: "Manager",
//       category: "Meat Products",
//       email: "ksene@gmail.com",
//     },
//     {
//       id: 141,
//       name: "Mohan Iyer",
//       store: "Reliance Mart - Ghatkopar",
//       role: "Support Person",
//       category: "Grocery",
//       email: "leia@gmail.com",
//     },
//     // Add more rows as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortAscending, setSortAscending] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   // Function to add a new employee
//   const handleAddEmployee = (newEmployee) => {
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
//   };

//   // Filter employees based on the search term
//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Sort employees by ID
//   const sortedEmployees = [...filteredEmployees].sort((a, b) =>
//     sortAscending ? a.id - b.id : b.id - a.id
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(sortedEmployees.length / rowsPerPage);
//   const paginatedEmployees = sortedEmployees.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSort = () => {
//     setSortAscending(!sortAscending);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const modalOptions = [
//     {
//       label: "Add Single Employee",
//       component: (closeModal) => (
//         <AddEmployeePopup
//           onClose={closeModal}
//           handleAddEmployee={handleAddEmployee}
//         />
//       ),
//     },
//     {
//       label: "Add Multiple Employee",
//       component: (closeModal) => (
//         <EmployeeUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <HeaderWithButton
//         heading="All Employee"
//         buttonText="Add New Employee"
//         modalOptions={modalOptions}
//       />
//       {/* Search and Sort Section */}
//       <div className="flex justify-end mb-4 mt-4">
//         <button
//           onClick={handleSort}
//           className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//         >
//           Sort by ID
//           <HiAdjustmentsHorizontal className="ml-2" />
//         </button>
//         <div className="relative ml-2 w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={handleSearch}
//             className="border rounded p-2 w-full pr-10"
//           />
//           <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>
//       {/* Table Section */}
//       <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 border-b">Employee ID</th>
//             <th className="p-2 border-b">Employee Name</th>
//             <th className="p-2 border-b">Assigned Store</th>
//             <th className="p-2 border-b">Assigned Role</th>
//             <th className="p-2 border-b">Category</th>
//             <th className="p-2 border-b">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedEmployees.map((employee, index) => (
//             <tr
//               key={employee.id}
//               className={`hover:bg-blue-50 ${
//                 index % 2 === 0 ? "bg-white" : "bg-gray-50"
//               }`}
//             >
//               <td className="p-2 border-b text-center">
//                 <input type="checkbox" className="mr-2" />
//                 {employee.id}
//               </td>
//               <td className="p-2 border-b">{employee.name}</td>
//               <td className="p-2 border-b">{employee.store}</td>
//               <td className="p-2 border-b">{employee.role}</td>
//               <td className="p-2 border-b">{employee.category}</td>
//               <td className="p-2 border-b">{employee.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Section */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Role;
////////////////////////
// import React, {useState} from "react";
// import {IoSearchOutline} from "react-icons/io5";
// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import {MdOutlineModeEdit} from "react-icons/md";
// import {MdDeleteOutline} from "react-icons/md";
// import HeaderWithButton from "../Reusable/HeaderWithButton";
// import AddEmployeePopup from "../Modals/AddEmployeePopup";
// import EmployeeUploadModal from "../Modals/EmployeeUploadModal";

// const Role = () => {
//   const [employees, setEmployees] = useState([
//     {
//       employeeId: 214,
//       name: "Arjun Patel",
//       assignedStore: "Reliance Mart - Andheri",
//       assignedRole: "Manager",
//       category: "Grocery",
//       email: "nesay@gmail.com",
//     },
//     {
//       employeeId: 524,
//       name: "Priya Sharma",
//       assignedStore: "Reliance Fresh - Bandra",
//       assignedRole: "Manager",
//       category: "Fresh Fruits",
//       email: "megav@gmail.com",
//     },
//     {
//       employeeId: 584,
//       name: "Arjun Patel",
//       assignedStore: "Reliance Fresh - Bandra",
//       assignedRole: "Manager",
//       category: "Bakery",
//       email: "lacy@gmail.com",
//     },
//     {
//       employeeId: 844,
//       name: "Nisha Kapoor",
//       assignedStore: "Reliance Mart - Andheri",
//       assignedRole: "Manager",
//       category: "Meat Products",
//       email: "ksene@gmail.com",
//     },
//     {
//       employeeId: 141,
//       name: "Mohan Iyer",
//       assignedStore: "Reliance Mart - Ghatkopar",
//       assignedRole: "Support Person",
//       category: "Grocery",
//       email: "leia@gmail.com",
//     },
//     // Add more initial employee data if needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortAscending, setSortAscending] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   // Filter employees based on the search term
//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Sort employees by ID
//   const sortedEmployees = [...filteredEmployees].sort((a, b) =>
//     sortAscending ? a.id - b.id : b.id - a.id
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(sortedEmployees.length / rowsPerPage);
//   const paginatedEmployees = sortedEmployees.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSort = () => {
//     setSortAscending(!sortAscending);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   // Function to handle adding a new employee
//   const handleAddEmployee = (newEmployee) => {
//     setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
//   };

//   const modalOptions = [
//     {
//       label: "Add Single Employee",
//       component: (closeModal) => (
//         <AddEmployeePopup
//           onClose={closeModal}
//           handleAddEmployee={handleAddEmployee}
//         />
//       ),
//     },
//     {
//       label: "Add Multiple Employee",
//       component: (closeModal) => (
//         <EmployeeUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <HeaderWithButton
//         heading="All Employee"
//         buttonText="Add New Employee"
//         modalOptions={modalOptions}
//       />

//       {/* Search and Sort Section */}

//       <div className="flex flex-wrap justify-between items-center mb-4 mt-4 gap-2">
//         <div className="flex flex-wrap gap-2 justify-start">
//           <button>
//             <MdOutlineModeEdit className="text-2xl" />
//           </button>

//           {/* Modal Component */}

//           <button>
//             <MdDeleteOutline className="text-2xl" />
//           </button>
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={handleSort}
//             className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//           >
//             Sort by ID
//             <HiAdjustmentsHorizontal className="ml-2" />
//           </button>
//           <div className="relative ml-2 w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={handleSearch}
//               className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
//             />
//             <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 border-b">Employee ID</th>
//             <th className="p-2 border-b">Employee Name</th>
//             <th className="p-2 border-b">Assigned Store</th>
//             <th className="p-2 border-b">Assigned Role</th>
//             <th className="p-2 border-b">Category</th>
//             <th className="p-2 border-b">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedEmployees.map((employee, index) => (
//             <tr
//               key={employee.id}
//               className={`hover:bg-blue-50 ${
//                 index % 2 === 0 ? "bg-white" : "bg-gray-50"
//               }`}
//             >
//               <td className="p-2 border-b text-center">
//                 <input type="checkbox" className="mr-2" />
//                 {employee.employeeId}
//               </td>
//               <td className="p-2 border-b">{employee.name}</td>
//               <td className="p-2 border-b">{employee.assignedStore}</td>
//               <td className="p-2 border-b">{employee.assignedRole}</td>
//               <td className="p-2 border-b">{employee.category}</td>
//               <td className="p-2 border-b">{employee.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Section */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Role;

/////////////////////////////
// import React, {useState} from "react";
// import {IoSearchOutline} from "react-icons/io5";
// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import {MdOutlineModeEdit} from "react-icons/md";
// import {MdDeleteOutline} from "react-icons/md";
// import HeaderWithButton from "../Reusable/HeaderWithButton";
// import AddEmployeePopup from "../Modals/AddEmployeePopup";
// import EmployeeUploadModal from "../Modals/EmployeeUploadModal";
// import EditEmployeeModal from "../Modals/EditEmployeeModal";

// const Role = () => {
//   const [employees, setEmployees] = useState([
//     {
//       employeeId: 214,
//       name: "Arjun Patel",
//       assignedStore: "Reliance Mart - Andheri",
//       assignedRole: "Manager",
//       category: "Grocery",
//       email: "nesay@gmail.com",
//     },
//     {
//       employeeId: 524,
//       name: "Priya Sharma",
//       assignedStore: "Reliance Fresh - Bandra",
//       assignedRole: "Manager",
//       category: "Fresh Fruits",
//       email: "megav@gmail.com",
//     },
//     {
//       employeeId: 584,
//       name: "Arjun Patel",
//       assignedStore: "Reliance Fresh - Bandra",
//       assignedRole: "Manager",
//       category: "Bakery",
//       email: "lacy@gmail.com",
//     },
//     {
//       employeeId: 844,
//       name: "Nisha Kapoor",
//       assignedStore: "Reliance Mart - Andheri",
//       assignedRole: "Manager",
//       category: "Meat Products",
//       email: "ksene@gmail.com",
//     },
//     {
//       employeeId: 141,
//       name: "Mohan Iyer",
//       assignedStore: "Reliance Mart - Ghatkopar",
//       assignedRole: "Support Person",
//       category: "Grocery",
//       email: "leia@gmail.com",
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortAscending, setSortAscending] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [employeeToEdit, setEmployeeToEdit] = useState(null);
//   const rowsPerPage = 5;

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSort = () => {
//     setSortAscending(!sortAscending);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handleCheckboxChange = (employeeId) => {
//     setSelectedEmployees((prevSelected) =>
//       prevSelected.includes(employeeId)
//         ? prevSelected.filter((id) => id !== employeeId)
//         : [...prevSelected, employeeId]
//     );
//   };

//   const handleEdit = () => {
//     if (selectedEmployees.length === 1) {
//       const employee = employees.find(
//         (emp) => emp.employeeId === selectedEmployees[0]
//       );
//       setEmployeeToEdit(employee);
//       setIsEditModalOpen(true);
//     } else {
//       alert("Please select one employee to edit.");
//     }
//   };

//   const handleDelete = () => {
//     if (selectedEmployees.length > 0) {
//       const updatedEmployees = employees.filter(
//         (emp) => !selectedEmployees.includes(emp.employeeId)
//       );
//       setEmployees(updatedEmployees);
//       setSelectedEmployees([]);
//     } else {
//       alert("Please select at least one employee to delete.");
//     }
//   };

//   const handleUpdateEmployee = (updatedEmployee) => {
//     setEmployees((prevEmployees) =>
//       prevEmployees.map((emp) =>
//         emp.employeeId === updatedEmployee.employeeId ? updatedEmployee : emp
//       )
//     );
//     setIsEditModalOpen(false);
//     setEmployeeToEdit(null);
//   };

//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedEmployees = [...filteredEmployees].sort((a, b) =>
//     sortAscending ? a.employeeId - b.employeeId : b.employeeId - a.employeeId
//   );

//   const totalPages = Math.ceil(sortedEmployees.length / rowsPerPage);
//   const paginatedEmployees = sortedEmployees.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   return (
//     <div className="p-4">
//       <HeaderWithButton
//         heading="All Employee"
//         buttonText="Add New Employee"
//         modalOptions={[
//           {
//             label: "Add Single Employee",
//             component: (closeModal) => (
//               <AddEmployeePopup
//                 onClose={closeModal}
//                 handleAddEmployee={(newEmployee) =>
//                   setEmployees((prevEmployees) => [
//                     ...prevEmployees,
//                     newEmployee,
//                   ])
//                 }
//               />
//             ),
//           },
//           {
//             label: "Add Multiple Employee",
//             component: (closeModal) => (
//               <EmployeeUploadModal isOpen={true} closeModal={closeModal} />
//             ),
//           },
//         ]}
//       />

//       {/* Search and Sort Section */}
//       <div className="flex flex-wrap justify-between items-center mb-4 mt-4 gap-2">
//         <div className="flex flex-wrap gap-2 justify-start">
//           <button onClick={handleEdit}>
//             <MdOutlineModeEdit className="text-2xl" />
//           </button>

//           <button onClick={handleDelete}>
//             <MdDeleteOutline className="text-2xl" />
//           </button>
//         </div>

//         <div className="flex justify-end">
//           <button
//             onClick={handleSort}
//             className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//           >
//             Sort by ID
//             <HiAdjustmentsHorizontal className="ml-2" />
//           </button>
//           <div className="relative ml-2 w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={handleSearch}
//               className="border rounded p-2 w-full pr-10"
//             />
//             <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 border-b">Employee ID</th>
//             <th className="p-2 border-b">Employee Name</th>
//             <th className="p-2 border-b">Assigned Store</th>
//             <th className="p-2 border-b">Assigned Role</th>
//             <th className="p-2 border-b">Category</th>
//             <th className="p-2 border-b">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedEmployees.map((employee, index) => (
//             <tr
//               key={employee.employeeId}
//               className={`hover:bg-blue-50 ${
//                 index % 2 === 0 ? "bg-white" : "bg-gray-50"
//               }`}
//             >
//               <td className="p-2 border-b text-center">
//                 <input
//                   type="checkbox"
//                   checked={selectedEmployees.includes(employee.employeeId)}
//                   onChange={() => handleCheckboxChange(employee.employeeId)}
//                   className="mr-2"
//                 />
//                 {employee.employeeId}
//               </td>
//               <td className="p-2 border-b">{employee.name}</td>
//               <td className="p-2 border-b">{employee.assignedStore}</td>
//               <td className="p-2 border-b">{employee.assignedRole}</td>
//               <td className="p-2 border-b">{employee.category}</td>
//               <td className="p-2 border-b">{employee.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Section */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           className="bg-gray-300 px-4 py-2 rounded"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       {/* Edit Employee Modal */}
//       {isEditModalOpen && (
//         <EditEmployeeModal
//           isOpen={isEditModalOpen}
//           employee={employeeToEdit}
//           onClose={() => setIsEditModalOpen(false)}
//           onUpdate={handleUpdateEmployee}
//         />
//       )}
//     </div>
//   );
// };

// export default Role;
import React, {useState} from "react";
import {IoSearchOutline} from "react-icons/io5";
import {HiAdjustmentsHorizontal} from "react-icons/hi2";
import {MdOutlineModeEdit} from "react-icons/md";
import {MdDeleteOutline} from "react-icons/md";
import HeaderWithButton from "../Reusable/HeaderWithButton";
import AddEmployeePopup from "../Modals/AddEmployeePopup";
import EmployeeUploadModal from "../Modals/EmployeeUploadModal";
import EditEmployeeModal from "../Modals/EditEmployeeModal";

const Role = () => {
  const [employees, setEmployees] = useState([
    {
      employeeId: 214,
      name: "Arjun Patel",
      assignedStore: "Reliance Mart - Andheri",
      assignedRole: "Manager",
      category: "Grocery",
      email: "nesay@gmail.com",
    },
    {
      employeeId: 524,
      name: "Priya Sharma",
      assignedStore: "Reliance Fresh - Bandra",
      assignedRole: "Manager",
      category: "Fresh Fruits",
      email: "megav@gmail.com",
    },
    {
      employeeId: 584,
      name: "Arjun Patel",
      assignedStore: "Reliance Fresh - Bandra",
      assignedRole: "Manager",
      category: "Bakery",
      email: "lacy@gmail.com",
    },
    {
      employeeId: 844,
      name: "Nisha Kapoor",
      assignedStore: "Reliance Mart - Andheri",
      assignedRole: "Manager",
      category: "Meat Products",
      email: "ksene@gmail.com",
    },
    {
      employeeId: 141,
      name: "Mohan Iyer",
      assignedStore: "Reliance Mart - Ghatkopar",
      assignedRole: "Support Person",
      category: "Grocery",
      email: "leia@gmail.com",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Updated to hold a single selected employee
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const rowsPerPage = 5;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleCheckboxChange = (employeeId) => {
    // Only allow one checkbox to be selected at a time
    setSelectedEmployee((prevSelected) =>
      prevSelected === employeeId ? null : employeeId
    );
  };

  const handleEdit = () => {
    if (selectedEmployee) {
      const employee = employees.find(
        (emp) => emp.employeeId === selectedEmployee
      );
      setEmployeeToEdit(employee);
      setIsEditModalOpen(true);
    } else {
      alert("Please select an employee to edit.");
    }
  };

  const handleDelete = () => {
    if (selectedEmployee) {
      const updatedEmployees = employees.filter(
        (emp) => emp.employeeId !== selectedEmployee
      );
      setEmployees(updatedEmployees);
      setSelectedEmployee(null); // Clear the selection after deletion
    } else {
      alert("Please select an employee to delete.");
    }
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.employeeId === updatedEmployee.employeeId ? updatedEmployee : emp
      )
    );
    setIsEditModalOpen(false);
    setEmployeeToEdit(null);
    setSelectedEmployee(null); // Clear selection after update
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmployees = [...filteredEmployees].sort((a, b) =>
    sortAscending ? a.employeeId - b.employeeId : b.employeeId - a.employeeId
  );

  const totalPages = Math.ceil(sortedEmployees.length / rowsPerPage);
  const paginatedEmployees = sortedEmployees.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="p-4">
      <HeaderWithButton
        heading="All Employee"
        buttonText="Add New Employee"
        modalOptions={[
          {
            label: "Add Single Employee",
            component: (closeModal) => (
              <AddEmployeePopup
                onClose={closeModal}
                handleAddEmployee={(newEmployee) =>
                  setEmployees((prevEmployees) => [
                    ...prevEmployees,
                    newEmployee,
                  ])
                }
              />
            ),
          },
          {
            label: "Add Multiple Employee",
            component: (closeModal) => (
              <EmployeeUploadModal isOpen={true} closeModal={closeModal} />
            ),
          },
        ]}
      />

      {/* Search and Sort Section */}
      <div className="flex flex-wrap justify-between items-center mb-4 mt-4 gap-2">
        <div className="flex flex-wrap gap-2 justify-start">
          <button onClick={handleEdit}>
            <MdOutlineModeEdit className="text-2xl" />
          </button>

          <button onClick={handleDelete}>
            <MdDeleteOutline className="text-2xl" />
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSort}
            className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
          >
            Sort by ID
            <HiAdjustmentsHorizontal className="ml-2" />
          </button>
          <div className="relative ml-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="border rounded p-2 w-full pr-10"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b">Employee ID</th>
            <th className="p-2 border-b">Employee Name</th>
            <th className="p-2 border-b">Assigned Store</th>
            <th className="p-2 border-b">Assigned Role</th>
            <th className="p-2 border-b">Category</th>
            <th className="p-2 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmployees.map((employee, index) => (
            <tr
              key={employee.employeeId}
              className={`hover:bg-blue-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-2 border-b text-center">
                <input
                  type="checkbox"
                  checked={selectedEmployee === employee.employeeId}
                  onChange={() => handleCheckboxChange(employee.employeeId)}
                  className="mr-2"
                />
                {employee.employeeId}
              </td>
              <td className="p-2 border-b">{employee.name}</td>
              <td className="p-2 border-b">{employee.assignedStore}</td>
              <td className="p-2 border-b">{employee.assignedRole}</td>
              <td className="p-2 border-b">{employee.category}</td>
              <td className="p-2 border-b">{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-300 px-4 py-2 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="bg-gray-300 px-4 py-2 rounded"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Edit Employee Modal */}
      {isEditModalOpen && (
        <EditEmployeeModal
          isOpen={isEditModalOpen}
          employee={employeeToEdit}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUpdateEmployee}
        />
      )}
    </div>
  );
};

export default Role;





