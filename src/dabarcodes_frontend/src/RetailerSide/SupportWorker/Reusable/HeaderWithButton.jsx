// import React, {useState} from "react";
// import Modal from "../Modals/Modal";
// import BackButton from "./BackButton";

// const HeaderWithButton = ({
//   heading,
//   buttonText,
//   onButtonClick,
//   modalContent,
//   modalTitle,
// }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleButtonClick = () => {
//     setShowModal(true);
//     if (onButtonClick) onButtonClick(); // Optional: Handle any additional button logic
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <div className="flex justify-between">
//       <div className="flex flex-start">
//         <BackButton />
//         <h1 className="text-2xl font-semibold mb-4">{heading}</h1>
//       </div>
//       <button
//         className="bg-[#0D90C1] text-white px-4 py-2 rounded hover:bg-[#1595c4]"
//         onClick={handleButtonClick}
//       >
//         {buttonText}
//       </button>

//       {/* Modal Component */}
//       <Modal show={showModal} onClose={closeModal} title={modalTitle}>
//         {modalContent}
//       </Modal>
//     </div>
//   );
// };

// export default HeaderWithButton;



// import React, {useState, useRef, useEffect} from "react";
// import Modal from "../Modals/Modal";
// // import Modal from "../../NewHomePageCustomer.jsx/Modals/Modal"
// import BackButton from "./BackButton";
// import ProductUploadModal from "../Modals/ProductUploadModal";
// import AddProductForm from "../ProductManagement/AddProductForm";

// const HeaderWithButton = ({heading, buttonText, modalTitle}) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const buttonRef = useRef(null); // Reference for the button
//   const [modalPosition, setModalPosition] = useState({top: 0, left: 0});

//   const handleButtonClick = () => {
//     if (buttonRef.current) {
//       const rect = buttonRef.current.getBoundingClientRect();
//       setModalPosition({top: rect.bottom + window.scrollY, left: rect.left});
//     }
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedOption(null); // Reset the selected option when modal closes
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="flex justify-between">
//       <div className="flex flex-start">
//         <BackButton />
//         <h1 className="text-2xl font-semibold mb-4">{heading}</h1>
//       </div>
//       <button
//         ref={buttonRef} // Attach the ref to the button
//         className="bg-[#0D90C1] text-white px-4 py-2 rounded hover:bg-[#1595c4]"
//         onClick={handleButtonClick}
//       >
//         {buttonText}
//       </button>

//       {/* Modal Component */}
//       <Modal
//         show={showModal}
//         onClose={closeModal}
//         title={modalTitle}
//         style={{
//           position: "absolute",
//           top: modalPosition.top,
//           left: modalPosition.left,
//           transform: "translateX(-50%)", // Center the modal horizontally
//         }}

//       >
//         {!selectedOption ? (
//           <div>
//             <button
//               className="bg-gray-200 p-2 w-full rounded-md hover:bg-gray-300 mb-2"
//               onClick={() => handleOptionClick("single")}
//             >
//               Add Single Product
//             </button>
//             <button
//               className="bg-gray-200 p-2 w-full rounded-md hover:bg-gray-300"
//               onClick={() => handleOptionClick("multiple")}
//             >
//               Add Multiple Products
//             </button>
//           </div>
//         ) : selectedOption === "single" ? (
//           <AddProductForm />
//         ) : (
//           <ProductUploadModal isOpen={showModal} closeModal={closeModal} />
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default HeaderWithButton;
// import React, {useState, useRef} from "react";
// import Modal from "../Modals/Modal";
// import BackButton from "./BackButton";
// import ProductUploadModal from "../Modals/ProductUploadModal";
// import AddProductForm from "../ProductManagement/AddProductForm";

// const HeaderWithButton = ({heading, buttonText, modalTitle}) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const buttonRef = useRef(null);
//   const [modalPosition, setModalPosition] = useState({top: 0, left: 0});

//   const handleButtonClick = () => {
//     if (buttonRef.current) {
//       const rect = buttonRef.current.getBoundingClientRect();
//       setModalPosition({
//         top: rect.bottom + window.scrollY,
//         left: rect.right + window.scrollX,
//       });
//     }
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedOption(null); // Reset the selected option when modal closes
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="flex justify-between">
//       <div className="flex flex-start">
//         <BackButton />
//         <h1 className="text-2xl font-semibold mb-4">{heading}</h1>
//       </div>
//       <button
//         ref={buttonRef}
//         className="bg-[#0D90C1] text-white px-4 py-2 rounded hover:bg-[#1595c4]"
//         onClick={handleButtonClick}
//       >
//         {buttonText}
//       </button>

//       {/* Modal Component */}
//       {showModal && (
//         <div
//           style={{
//             position: "absolute",
//             top: modalPosition.top,
//             left: modalPosition.left,
//             zIndex: 1000,
//           }}
//         >
//           <Modal
//             isOpen={showModal}
//             onClose={closeModal}
//             mainclass="flex justify-center items-center md:items-start md:justify-end md:pt-24 md:pr-32"
//             className="w-auto flex justify-center m-auto "
//           >
//             <div className="flex justify-center items-center h-full w-full">
//               {!selectedOption ? (
//                 <div>
//                   <button
//                     className="bg-gray-200 p-2 w-full rounded-md hover:bg-gray-300 mb-2"
//                     onClick={() => handleOptionClick("single")}
//                   >
//                     Add Single Product
//                   </button>
//                   <button
//                     className="bg-gray-200 p-2 w-full rounded-md hover:bg-gray-300"
//                     onClick={() => handleOptionClick("multiple")}
//                   >
//                     Add Multiple Products
//                   </button>
//                 </div>
//               ) : selectedOption === "single" ? (
//                 <AddProductForm />
//               ) : (
//                 <ProductUploadModal
//                   isOpen={showModal}
//                   closeModal={closeModal}
//                 />
//               )}
//             </div>
//           </Modal>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderWithButton;



import React, {useState, useRef} from "react";
import Modal from "../Modals/Modal";
import BackButton from "./BackButton";

const HeaderWithButton = ({heading, buttonText, modalOptions, modalTitle}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const buttonRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({top: 0, left: 0});

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.right + window.scrollX,
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOption(null); // Reset the selected option when modal closes
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-start">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4">{heading}</h1>
      </div>
      <button
        ref={buttonRef}
        className="bg-[#0D90C1] text-white px-4 py-2 rounded hover:bg-[#1595c4]"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>

      {showModal && (
        <div
          style={{
            position: "absolute",
            top: modalPosition.top,
            left: modalPosition.left,
            zIndex: 1000,
          }}
        >
          <Modal
            isOpen={showModal}
            onClose={closeModal}
            mainclass="flex justify-center items-center md:items-start md:justify-end md:pt-24 md:pr-32"
            className="w-auto flex justify-center m-auto"
          >
            <div className="flex justify-center items-center h-full w-full">
              {!selectedOption ? (
                <div>
                  {modalOptions.map((option) => (
                    <button
                      key={option.label}
                      className="bg-gray-200 p-2 w-full rounded-md hover:bg-gray-300 mb-2"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div>{selectedOption.component(closeModal)}</div>
              )}
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default HeaderWithButton;


