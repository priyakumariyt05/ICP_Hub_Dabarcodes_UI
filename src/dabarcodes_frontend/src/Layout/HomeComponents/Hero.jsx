import React from 'react'
import "../../components/style/Home.css"
import { useState } from 'react';
import ConnectWalletModal from '../../SmallPages/ConnectWalletModal';
import RoleSelectionModal from '../../SmallPages/RoleSelectionModal';
import { useModal } from '../../ContextApi/ModalContext';

const Hero = () => {
  const {
    isConnectWalletModalOpen,
    isRoleSelectionModalOpen,
    handleOpenConnectWalletModal,
    handleCloseConnectWalletModal,
    handleOpenRoleSelectionModal,
    handleCloseRoleSelectionModal,
  } =useModal()
 
  

  const handleNext = () => {
    handleOpenRoleSelectionModal(); // Open the Role Selection modal
  };
  return (
    <>
   <section id="home" className="hero">
  <div className="hero-text">
    <h1 className=" font-extra-bold text-hero-heading leading-hero-heading">
      Unlock Amazing <span className="highlight text-[#0D90C1]">Promotions</span> with daBarcodes
    </h1>
    <p>
      Unlock access to exclusive promotions and unbeatable savings with daBarcodes. 
      Experience a new level of shopping convenience and value.
    </p>
    {/* <a href="#" className="join-btn">Join Now</a> */}
    <button 
     onClick={handleOpenConnectWalletModal}
    className="bg-[#0D90C1] hover:bg-blue-700 text-white py-2 px-4 rounded">
  Join Now
</button>

  </div>
  <div className="hero-image">
    <img src="/image/hero.png" alt="" />
  </div>
</section>
 {isConnectWalletModalOpen && (
        <ConnectWalletModal
          onClose={handleCloseConnectWalletModal}
          onNext={handleNext} 
        />
      )}

  
      {isRoleSelectionModalOpen && (
        <RoleSelectionModal onClose={handleCloseRoleSelectionModal} />
      )}
    </>
  )
}

export default Hero
