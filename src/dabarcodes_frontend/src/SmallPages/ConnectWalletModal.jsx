import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";

const ConnectWalletModal = ({ onClose, onNext }) => {
  const navigate = useNavigate();
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const initAuthClient = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
    };
    initAuthClient();
  }, []);

  // Handle ICP Login
  const handleIcpLogin = async () => {
    if (authClient) {
      authClient.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          const identity = authClient.getIdentity();
          console.log("Logged in as:", identity.getPrincipal().toText());
          onNext();
          onClose();
        },
        onError: (err) => console.error("ICP Login failed", err),
      });
    }
  };

  // Handle NFID Login with Redirection Logic
  const handleNfidLogin = async () => {
    if (authClient) {
      authClient.login({
        identityProvider: "https://nfid.one",
        onSuccess: () => {
          const identity = authClient.getIdentity();
          console.log("Logged in via NFID:", identity.getPrincipal().toText());
          onNext();
          onClose();
        },
        onError: (err) => console.error("NFID Login failed", err),
      });
    }
  };

  // Navigate to the Login Page
  const goToLogin = () => {
    navigate("/login-page");
  };

const handleConnectWalletImageClick = () => {
   onNext();
  onClose();
};
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 font-roboto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-3xl p-1"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">
          Connect Wallet
        </h2>

        <div className="border border-gray-800 rounded-md overflow-hidden">
          <button
            onClick={handleIcpLogin}
            className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-blue-100 border-b border-gray-800"
          >
            <img src="/image/1.png" alt="ICP Login" className="mr-4" />
            ICP Login
          </button>

          <button
            onClick={handleNfidLogin}
            className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-purple-100 border-b border-gray-800"
          >
            <img src="/image/2.png" alt="NFID Login" className="mr-4" />
            NFID Login
          </button>

          <button
            // onClick={() => console.log("Bifinity login clicked")}
          onClick={handleConnectWalletImageClick }
            className="w-full flex items-center justify-center p-3 text-lg font-bold text-black hover:bg-indigo-100 rounded-b-md"
          >
            <img src="/image/3.png" alt="Bifinity Login" className="mr-4" />
            Bifinity Login
          </button>
        </div>

        <div className="text-center mb-8 mt-8 space-y-8">
          <p className="text-base roboto-regular text-[#454545]">
            Already have an account?{" "}
            <span onClick={goToLogin} className="text-[#0673C1] cursor-pointer">
              Log in
            </span>
          </p>
          <p className="text-xs roboto-regular">
            By connecting your wallet, you confirm that you have read
            <br /> and agree to our{" "}
            <span className="text-[#0673C1] cursor-pointer">
              Terms and Conditions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
