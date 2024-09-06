import React from 'react';
import { AiOutlineSearch, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { IoFilterSharp } from "react-icons/io5";
import { FaCheckSquare, FaSquare } from 'react-icons/fa';
import { HiOutlineXMark } from "react-icons/hi2";

const Filter = () => {
 const data = [
        {
            company: "Catalog",
            url: "catalogapp.io",
            status: "Customer",
            about: "Content curating app\nBrings all your new into one place",
            users: [
                { name: "User 1", image: "/image/userimg.png" },
                { name: "User 2", image: "/image/userimg.png" },
                { name: "User 3", image: "/image/userimg.png" },
                { name: "User 4", image: "/image/userimg.png" },
                { name: "User 5", image: "/image/userimg.png" },
                { name: "User 6", image: "/image/userimg.png" },
                { name: "User 7", image: "/image/userimg.png" },
            ],
            license: 40,
            icon: <FaCheckSquare  />,
            companyImage: "/image/filter3.png"
        },
        {
            company: "Catalog",
            url: "catalogapp.io",
            status: "Churned",
            about: "Design software\nSuper lightweight design app",
            users: [
                { name: "User 1", image: "/image/userimg.png" },
                { name: "User 2", image: "/image/userimg.png" },
                { name: "User 3", image: "/image/userimg.png" },
                { name: "User 4", image: "/image/userimg.png" },
                { name: "User 5", image: "/image/userimg.png" },
                { name: "User 6", image: "/image/userimg.png" },
                { name: "User 7", image: "/image/userimg.png" },
            ],
            license: 50,
            icon: <FaSquare />,
             companyImage: "/image/filter5.png"
        },
        {
            company: "Catalog",
            url: "catalogapp.io",
            status: "Churned",
            about: "Data prediction\nAI and machine learning data",
            users: [
                { name: "User 1", image: "/image/userimg.png" },
                { name: "User 2", image: "/image/userimg.png" },
                { name: "User 3", image: "/image/userimg.png" },
                { name: "User 4", image: "/image/userimg.png" },
                { name: "User 5", image: "/image/userimg.png" },
                { name: "User 6", image: "/image/userimg.png" },
                { name: "User 7", image: "/image/userimg.png" },
            ],
            license: 79,
            icon: <FaSquare />,
           companyImage: "/image/filter4.png"
        },
        {
            company: "Catalog",
            url: "catalogapp.io",
            status: "Customer",
            about: "Productivity app\nTime management and productivity",
            users: [
                { name: "User 1", image: "/image/userimg.png" },
                { name: "User 2", image: "/image/userimg.png" },
                { name: "User 3", image: "/image/userimg.png" },
                { name: "User 4", image: "/image/userimg.png" },
                { name: "User 5", image: "/image/userimg.png" },
                { name: "User 6", image: "/image/userimg.png" },
                { name: "User 7", image: "/image/userimg.png" },
            ],
            license: 60,
            icon: <FaCheckSquare />,
            companyImage: "/image/filter3.png"
        },
        {
            company: "Catalog",
            url: "catalogapp.io",
            status: "Churned",
            about: "Web app integration\nConnect web apps seamlessly",
            users: [
                { name: "User 1", image: "/image/userimg.png" },
                { name: "User 2", image: "/image/userimg.png" },
                { name: "User 3", image: "/image/userimg.png" },
                { name: "User 4", image: "/image/userimg.png" },
                { name: "User 5", image: "/image/userimg.png" },
                { name: "User 6", image: "/image/userimg.png" },
          
            ],
            license: 40,
            icon: <FaSquare />,
            companyImage: "/image/filter2.png"
        },
        {
            company: "Catalog",
            url: "catalogapp.io",
            status: "Customer",
            about: "Sales CRM\nWeb based sales doc management",
            users: [
                { name: "User 1", image: "/image/userimg.png" },
                { name: "User 2", image: "/image/userimg.png" },
                { name: "User 3", image: "/image/userimg.png" },
                { name: "User 4", image: "/image/userimg.png" },
                { name: "User 5", image: "/image/userimg.png" },
                { name: "User 6", image: "/image/userimg.png" },
                { name: "User 7", image: "/image/userimg.png" },
            ],
            license: 60,
            icon: <FaCheckSquare />,
             companyImage: "/image/filter1.png"
        },
    ];

    return (
        <div className="bg-gray-800 p-4 text-white w-full h-full min-h-screen">
            <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="flex flex-wrap space-x-2 mb-2">
                    <button className="bg-gray-700 text-sm px-4 py-2 rounded-full flex items-center">
                        All time
                        <HiOutlineXMark className='ml-1 mr-2' />
                    </button>
                    <button className="bg-gray-700 text-sm px-4 py-2 rounded-full">US, AU, +4</button>
                    <button className="bg-gray-700 text-sm px-4 py-2 rounded-full flex items-center">
                        <IoFilterSharp className='ml-1 mr-2' /> More Filter
                    </button>
                </div>
                <div className="relative w-full md:w-auto">
                    <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white text-sm px-10 py-2 rounded-lg  w-full md:w-64"
                    />
                </div>
            </div>
            <div className="bg-gray-700 rounded-lg overflow-x-auto">
                <table className="table-auto w-full min-w-max">
                    <thead className="bg-slate-50 text-black">
                        <tr className="border-b border-gray-600">
                            <th className="px-4 py-2 text-left">Company ↓</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">About</th>
                            <th className="px-4 py-2 text-left">Users</th>
                            <th className="px-4 py-2 text-left">License use</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-600 border-b border-gray-600">
                                {/* company */}
                                <td className="px-4 py-3 flex items-center space-x-2">
                                    {item.icon}
                                    {item.companyImage && (
                                        <img
                                            src={item.companyImage}
                                            alt={`${item.company} logo`}
                                            className="w-8 h-8 object-cover rounded-full"
                                        />
                                    )}
                                    <div>
                                        <div>{item.company}</div>
                                        <div className="text-gray-500 text-xs">{item.url}</div>
                                    </div>
                                </td>
                                {/* status */}
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-sm rounded-full ${item.status === 'Customer' ? 'bg-[#EAFDEE] text-green-400' : 'bg-[#ECECEE] text-black'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                {/* about */}
                                <td className="px-4 py-3 text-sm text-gray-400">
                                    {item.about.split('\n').map((line, idx) => (
                                        <div key={idx}>{line}</div>
                                    ))}
                                </td>
                                {/* users */}
                                <td className="px-4 py-3">
                                    <div className="flex -space-x-2">
                                        {item.users.map((user, i) => (
                                            <img
                                                key={i}
                                                src={user.image}
                                                alt={user.name}
                                                className="w-8 h-8 rounded-full border-2 border-gray-700"
                                            />
                                        ))}
                                        {item.users.length > 6 && (
                                            <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-700 flex items-center justify-center text-xs">
                                                +{item.users.length - 6}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                {/* license */}
                                <td className="px-4 py-3">
                                    <div className="relative w-32 h-3 bg-gray-600 rounded-full">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                                            style={{ width: `${item.license}%` }}
                                        ></div>
                                    </div>
                                </td>
                                {/* actions */}
                                <td className="px-4 py-3 flex space-x-2">
                                    <AiOutlineDelete className="text-gray-500 cursor-pointer hover:text-white text-2xl" />
                                    <AiOutlineEdit className="text-gray-500 cursor-pointer hover:text-white text-2xl" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button className="text-sm bg-white text-black px-4 py-2 rounded-full">Previous</button>
                <span className="text-sm text-gray-400">Page 1 of 10</span>
                <button className="text-sm bg-white text-black px-4 py-2 rounded-full">Next</button>
            </div>
        </div>
    );
};

export default Filter;
