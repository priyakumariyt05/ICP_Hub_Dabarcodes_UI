// import { DivIcon } from "leaflet";
// import React from "react";

// const Modal = ({show, onClose, title, children}) => {
//   if (!show) return null; // If `show` is false, the modal won't be displayed

//   return (
//     <>
//       <div></div>
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 ">
//         <div className="bg-white rounded-lg  p-6  ">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">{title}</h2>
//             <button className="text-red-500 text-2xl" onClick={onClose}>
//               x
//             </button>
//           </div>
//           <div style={{maxHeight: "90vh", overflowY: "auto"}}>{children}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, className, mainclass }) => {


  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className={`fixed inset-0 bg-black bg-opacity-10  z-50 ${mainclass}`}
      onClick={handleOutsideClick}
    >
      <div
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        className={`bg-white p-6 hide-scrollbar   rounded-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

