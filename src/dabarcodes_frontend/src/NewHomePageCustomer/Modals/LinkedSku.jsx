import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../ContextApi/ModalContext";
import FixedSkuModal from "./FixedSkuModal";
import FloatingSkuModal from "./FloatingSkuModal";

const LinkedSku = () => {
  const { linkedSKU, closeLinkedSKU } = useModal(); // Use state from context
  const [isFloatingModal, setIsFloatingModal] = useState(false); 

  const handleFloatingSku = () => {
    setIsFloatingModal(true);
  };

  const handleBackToFixedSku = () => {
    setIsFloatingModal(false);
  };

  const handleCloseFloatingModal = () => {
    setIsFloatingModal(false);
    closeLinkedSKU();
  };

  return (
    <Modal
      isOpen={linkedSKU} // Check if modal should be open
      onClose={handleCloseFloatingModal}
      className="mx-4 md:mx-0"
      mainclass="flex justify-center items-center overflow-x-hidden"
    >
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
