import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../ContextApi/ModalContext";
import FixedSkuModal from "./FixedSkuModal";
import FloatingSkuModal from "./FloatingSkuModal";

const LinkedSku = () => {
  const { linkedSKU, closeLinkedSKU } = useModal();
  const [isFloatingModal, setIsFloatingModal] = useState(false); // State for switching modals

  const handleFloatingSku = () => {
    setIsFloatingModal(true); // Open the Floating SKU modal
  };

  const handleBackToFixedSku = () => {
    setIsFloatingModal(false); // Switch back to the Fixed SKU modal
  };

  const handleCloseFloatingModal = () => {
    setIsFloatingModal(false); // Reset to show Fixed SKU modal on close
    closeLinkedSKU(); // Optionally call the close function to close the modal
  };

  return (
    <Modal
      isOpen={linkedSKU}
      onClose={handleCloseFloatingModal} 
      className="mx-4 md:mx-0"
      mainclass="flex justify-center items-center overflow-x-hidden "
    >
      {/* Conditionally render modals so that only one is visible at a time */}
      {isFloatingModal ? (
        <FloatingSkuModal
          onClose={handleCloseFloatingModal} 
          onBackToFixedSku={handleBackToFixedSku}
        />
      ) : (
        <FixedSkuModal
          onClose={closeLinkedSKU}
          onOpenFloatingModal={handleFloatingSku}
        />
      )}
    </Modal>
  );
};

export default LinkedSku;
