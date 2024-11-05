import React from "react";
import Modal from "./Modal";
import { useModal } from "../../ContextApi/ModalContext";
import { productData } from "../../Data/giftCarddata";
import Multi_QR_Details from "../../Profile/Multi_QR_Details";

const MultiQRModal = ({ selectedProductIds }) => {
  const { isMultiQR, closeMultiQR } = useModal();

  const products = productData.filter((item) =>
    selectedProductIds.includes(item.id)
  );

  return (
    <Modal
      isOpen={isMultiQR}
      onClose={closeMultiQR}
      className="mx-4"
      mainclass="flex justify-center items-center overflow-x-auto"
    >
      {products.length > 0 && <Multi_QR_Details products={products} />}
    </Modal>
  );
};

export default MultiQRModal;
