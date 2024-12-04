// import React, { createContext, useContext, useState } from "react";

// const WalletContext = createContext();

// export const WalletProvider = ({ children }) => {
 

//   return (
//     <WalletContext.Provider
//       value={{
        
//       }}
//     >
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export const useWallet = () => useContext(WalletContext);
import React, { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
  const [isRoleSelectionOpen, setRoleSelectionOpen] = useState(false);

  const openConnectWallet = () => setConnectWalletOpen(true);
  const closeConnectWallet = () => setConnectWalletOpen(false);

  const openRoleSelection = () => setRoleSelectionOpen(true);
  const closeRoleSelection = () => setRoleSelectionOpen(false);

  return (
    <WalletContext.Provider
      value={{
        isConnectWalletOpen,
        isRoleSelectionOpen,
        openConnectWallet,
        closeConnectWallet,
        openRoleSelection,
        closeRoleSelection,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
