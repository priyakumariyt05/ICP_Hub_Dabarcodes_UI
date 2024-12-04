import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  
  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(false);
  const [isRoleSelectionModalOpen, setIsRoleSelectionModalOpen] = useState(false);

  // Handlers to update state
  const handleOpenConnectWalletModal = () => setIsConnectWalletModalOpen(true);
  const handleCloseConnectWalletModal = () => setIsConnectWalletModalOpen(false);

  const handleOpenRoleSelectionModal = () => setIsRoleSelectionModalOpen(true);
  const handleCloseRoleSelectionModal = () => setIsRoleSelectionModalOpen(false);

  //
  const [isTokenOpen, setIsTokenOpen] = useState(false);

  const [isNotificationsOn, setIsNotificationsOn] = useState(false);
  const [linkedSKU, setLinkedSKU] = useState(false);

  const [isCoupanOn, setIsCoupanOn] = useState(false);

  const [isSingleQR, SetIsSingleQR] = useState(false);
  const [isMultiQR, SetIsMultiQR] = useState(false);

  const openLinkedSku = () => setLinkedSKU(true);
  const closeLinkedSKU = () => setLinkedSKU(false);

  const openToken = () => setIsTokenOpen(true);
  const closeToken = () => setIsTokenOpen(false);

  const openProfile = () => setIsProfileModalOpen(true);
  const closeProfile = () => setIsProfileModalOpen(false);

  const openNotifications = () => {
    setIsNotificationsOn(true);
  };

  const closeNotifications = () => {
    setIsNotificationsOn(false);
  };

  const openCoupan = () => setIsCoupanOn(true);
  const closeCoupan = () => setIsCoupanOn(false);

  const openQR = () => SetIsSingleQR(true);
  const closeQR = () => SetIsSingleQR(false);

  const openMultiQR = () => SetIsMultiQR(true);
  const closeMultiQR = () => SetIsMultiQR(false);

  //

  return (
    <ModalContext.Provider
      value={{
      
// 
isConnectWalletModalOpen,
        isRoleSelectionModalOpen,
        handleOpenConnectWalletModal,
        handleCloseConnectWalletModal,
        handleOpenRoleSelectionModal,
        handleCloseRoleSelectionModal,
// 
        isTokenOpen,
        openToken,
        closeToken,
        //
        openProfile,
        closeProfile,
        //

        isNotificationsOn,
        openNotifications,
        closeNotifications,
        //
        openCoupan,
        closeCoupan,
        //

        linkedSKU,
        openLinkedSku,
        closeLinkedSKU,
        //

        isSingleQR,
        openQR,
        closeQR,
        //
        isMultiQR,
        openMultiQR,
        closeMultiQR,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
