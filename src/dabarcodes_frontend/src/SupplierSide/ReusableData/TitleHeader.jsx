
// import BackButton from "../../Dashboard/Reusable/BackButton";
// const TitleHeader = ({ title }) => {
//   return (
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="text-2xl font-semibold flex items-center">
//         <BackButton /> 
//         <span className="ml-2">{title}</span>
//       </h2>
//       <div className="flex items-center  space-x-2">
//         <button className="px-4 py-2 border rounded-md">Filter</button>
//         <input
//           type="text"
//           placeholder="Search"
//           className="border rounded-md px-4 py-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default TitleHeader
import BackButton from "../../Dashboard/Reusable/BackButton";

const TitleHeader = ({ title }) => {
    return (
        <div className="flex justify-between items-center mb-4 w-full">
            {/* Left section: BackButton and title */}
            {/* <div className="flex items-center space-x-2">
                <BackButton />
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div> */}
            <div className="flex justify-between ">
    
    <div className="flex flex-start">
       <BackButton />
    
      
       <h2 className="text-2xl font-semibold">{title}</h2>
     
    </div>
    
  </div>

            {/* Right section: Filter button and search input */}
            <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border rounded-md">Filter</button>
                <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-md px-4 py-2"
                />
            </div>
        </div>
    );
};

export default TitleHeader;

