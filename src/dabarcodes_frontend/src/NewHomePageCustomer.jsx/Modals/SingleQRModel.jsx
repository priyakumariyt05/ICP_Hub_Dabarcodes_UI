import React from "react";
import Modal from "./Modal";
import { useModal } from "../../ContextApi/ModalContext";
import QR_Details from "../QR_Details";

import { productData } from "../../Data/giftCarddata";

const SingleQRModal = ({ selectedProductId }) => {
  const { isSingleQR, closeQR } = useModal();

  const product = productData.find((item) => item.id === selectedProductId);

  return (
    <Modal
      isOpen={isSingleQR}
      onClose={closeQR}
      className="mx-4 "
      mainclass="flex justify-center  items-center overflow-x-auto  "
    >
      {product && <QR_Details product={product} />}
    </Modal>
  );
};

export default SingleQRModal;
