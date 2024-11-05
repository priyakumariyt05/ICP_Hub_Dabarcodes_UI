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
