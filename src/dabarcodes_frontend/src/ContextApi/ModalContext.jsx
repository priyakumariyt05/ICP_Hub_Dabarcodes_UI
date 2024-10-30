import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] =
    useState(false);


  const openRoleModal = () => setIsRoleModalOpen(true);
  const closeRoleModal = () => setIsRoleModalOpen(false);

  const openConnectWalletModal = () => setIsConnectWalletModalOpen(true);
  const closeConnectWalletModal = () => setIsConnectWalletModalOpen(false);

 

  //
  const [isTokenOpen, setIsTokenOpen] = useState(false);

  const [isNotificationsOn, setIsNotificationsOn] = useState(false);
  const [linkedSKU, setLinkedSKU] = useState(false);

  const [isCoupanOn, setIsCoupanOn] = useState(false);

  const [isSingleQR, SetIsSingleQR] = useState(false);
  const [isMultiQR, SetIsMultiQR] = useState(false);
  

  // const openLinkedSKU = () => setIsLinkedSKU(true);
  // const closeLinkedSKU = () => setIsLinkedSKU(false);
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
        isRoleModalOpen,
        isConnectWalletModalOpen,
        //
        openRoleModal,
        closeRoleModal,
        //
        openConnectWalletModal,
        closeConnectWalletModal,
        //
        // isTokenOpen,
        // isProfileModalOpen,
        // isNotificitionsOn,
        // isCoupanOn,
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
        // openLinkedSKU,
        // closeLinkedSKU,
        // linkedSKU,
        linkedSKU, openLinkedSku, closeLinkedSKU,
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
