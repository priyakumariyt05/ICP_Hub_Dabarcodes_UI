// import React from "react";
// import Modal from "./Modal";
// import { useModal } from "../../ContextApi/ModalContext";

// const TokensModal = () => {
//   const { closeToken, isTokenOpen } = useModal();
//   return (
//     <Modal
//       isOpen={isTokenOpen}
//       onClose={closeToken}
//        className="flex gap-4 w-[300px] md:w-[450px] h-fit"

//       mainclass="flex justify-center items-center md:items-start  md:justify-end  md:pt-24 md:pr-32 "
//     >
//       <img className="w-12 h-12" src="/image/Token.png" alt="" />

//       <div>
//         <p className="text-lg font-bold  py-2">Want more utility tokens ? </p>
//         <p className="pb-4">
//           Utility tokens allow you to link your favorite SKUs and access
//           exclusive promotions
//         </p>
//         <button className="bg-[#0D90C1]  font-medium rounded-md text-white px-12 py-1  ">
//           Buy
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default TokensModal;
// import React from "react";
// import Modal from "./Modal";
// import { useModal } from "../../ContextApi/ModalContext";

// const TokensModal = () => {
//   const { closeToken, isTokenOpen } = useModal();
  
//   return (
//     <Modal
//       isOpen={isTokenOpen}
//       onClose={closeToken}
//       className="flex w-full"
//       mainclass="flex justify-between items-center md:items-start pt-26 md:justify-end md:pt-24 "
     
//       // mainclass="flex justify-between items-center md:items-start md:justify-end md:pt-24 md:pr-32"
//     >
//       <img className="w-12 h-12" src="/image/Token.png" alt="" />

//       <div className="flex-1 mx-4"> {/* Allow the text section to take available space */}
//         <p className="text-lg font-bold py-2">Want more utility tokens?</p>
//         <p className="pb-4">
//           Utility tokens allow you to link your favorite SKUs and access
//           exclusive promotions.
//         </p>
//       </div>
//       <button className="bg-[#0D90C1] font-medium rounded-lg text-white px-6 py-2 shadow-md hover:bg-[#0B7DA2] transition duration-200 ease-in-out">
//         Buy
//       </button>
//     </Modal>
//   );
// };

// export default TokensModal;
// import React from "react";
// import Modal from "./Modal";
// import { useModal } from "../../ContextApi/ModalContext";

// const TokensModal = () => {
//   const { closeToken, isTokenOpen } = useModal();
  
//   return (
//     <Modal
//       isOpen={isTokenOpen}
//       onClose={closeToken}
//       className="flex w-full"
//       mainclass="flex justify-between items-center md:items-start pt-26 md:justify-end md:pt-24"
//     >
//       {/* <img className="w-12 h-12" src="/image/Token.png" alt="" /> */}

//       <div className="flex-1 mx-4"> {/* Allow the text section to take available space */}
//         <p className="text-lg font-bold py-2">Your utility tokens?</p>
        
//       </div>
      
//       <p className="pb-4">
//                <img className="w-12 h-12" src="/image/Token.png" alt="" />
//         </p>
      
//       {/* Wrap the button in a flex container to prevent height issues */}
//       <div className="flex items-center">
//         <button className="bg-[#0D90C1] font-medium rounded-lg text-white px-6 py-2 shadow-md hover:bg-[#0B7DA2] transition duration-200 ease-in-out">
//           Buy More
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default TokensModal;

import React from "react";
import Modal from "./Modal";
import { useModal } from "../../ContextApi/ModalContext";

const TokensModal = () => {
  const { closeToken, isTokenOpen } = useModal();
  
  return (
    <Modal
      isOpen={isTokenOpen}
      onClose={closeToken}
      className="flex w-full"
      // mainclass="flex justify-center items-center pt-26 md:pt-24"
      mainclass="flex justify-between items-center md:items-start pt-26 md:justify-end md:pt-24"
    >
      {/* Flex container to hold all three items */}
      <div className="flex justify-between items-center w-full mx-4 my-8">
        
        {/* Title Section */}
        <div className="flex-1 text-center"> 
          <p className="text-2xl font-bold py-2">Your Utility Tokens</p>
        </div>

        {/* Image Section */}
    
        <div className="flex-1 flex items-center justify-center"> 
    <img className="w-12 h-12" src="/image/Token.png" alt="Token" />
    <span className="text-sm text-bold  ml-2"> 
        <span className="text-2xl font-medium text-bold">3</span> /5 
    </span>
    <p className="ml-2">tokens left</p>
</div>


        {/* Button Section */}
        <div className="flex-1 flex justify-center"> 
          <button className="bg-[#0D90C1] font-medium rounded text-white px-6 py-2 shadow-md hover:bg-[#0B7DA2] transition duration-200 ease-in-out">
            Buy More
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TokensModal;
