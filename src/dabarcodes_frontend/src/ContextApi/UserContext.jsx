// import React, { createContext, useState, useEffect } from "react";
// import { HttpAgent, Actor } from "@dfinity/agent";
// import { idlFactory } from './declarations/backend.did.js'; // Replace with actual DID file path

// // Create UserContext
// const UserContext = createContext();

// // Canister ID
// const canisterId = 'dfdal-2uaaa-aaaaa-qaama-cai'; // Replace with your actual canister ID

// // Create agent for IC communication
// const agent = new HttpAgent({ host: "https://ic0.app" });

// if (process.env.NODE_ENV === 'development') {
//   agent.fetchRootKey(); // Only in development
// }

// // Create actor to interact with backend
// const backendActor = Actor.createActor(idlFactory, {
//   agent,
//   canisterId,
// });

// // UserProvider component to wrap the app and provide user data globally
// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch user profile from the backend
//   const fetchUserProfile = async () => {
//     setLoading(true);
//     try {
//       const profile = await backendActor.api_get_my_account(); // Fetch user profile from backend
//       setUserData(profile);
//     } catch (err) {
//       console.error("Failed to fetch user profile:", err);
//       setError("Failed to fetch user profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // UseEffect to fetch data on component mount
//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   // Provide user data and methods to update it
//   return (
//     <UserContext.Provider value={{ userData, setUserData, loading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to access user data
// export const useUser = () => React.useContext(UserContext);
// import React, { createContext, useEffect, useState } from "react";
// import { HttpAgent, Actor } from "@dfinity/agent";
// // import { idlFactory } from './declarations/backend.did.js';
// // import { idlFactory } from './declarations/dabarcodes_backend/dabarcodes_backend.did.js';
// // Adjust the path to your DID file
// // Replace with your actual canister ID
// import { idlFactory } from "../../../declarations/dabarcodes_backend/dabarcodes_backend.did.js";

// const canisterId = "dfdal-2uaaa-aaaaa-qaama-cai";

// // Create an agent for IC communication
// const agent = new HttpAgent({ host: "https://ic0.app" });

// if (process.env.NODE_ENV === 'development') {
//   agent.fetchRootKey(); // Only in development
// }

// // Create actor to interact with the backend
// const backendActor = Actor.createActor(idlFactory, {
//   agent,
//   canisterId,
// });
// console.log(backendActor);

// // Create a context for user data
// export const UserContext = createContext();

// // UserProvider component to wrap the app
// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserProfile = async () => {
//     setLoading(true);
//     try {
//       const profile = await backendActor.api_get_my_account(); // Fetch user profile from backend
//       setUserData(profile);
//     } catch (err) {
//       console.error("Failed to fetch user profile:", err);
//       setError("Failed to fetch user profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   return (
//     <UserContext.Provider value={{ userData, loading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to access user data
// export const useUser = () => React.useContext(UserContext);
// import React, { createContext, useEffect, useState } from "react";
// import { HttpAgent, Actor } from "@dfinity/agent";
// import { idlFactory } from "../../../declarations/dabarcodes_backend/dabarcodes_backend.did.js"; // Adjust path as necessary

// // const canisterId = "dfdal-2uaaa-aaaaa-qaama-cai";
// const canisterId = 'dmalx-m4aaa-aaaaa-qaanq-cai'

// // Create an agent for IC communication
// const agent = new HttpAgent({ host: "https://ic0.app" });

// if (process.env.NODE_ENV === 'development') {
//   agent.fetchRootKey(); // Fetch the root key in development mode
// }

// // Create actor to interact with the backend
// const backendActor = Actor.createActor(idlFactory, {
//   agent,
//   canisterId,
// });
// console.log("Backend api", backendActor)
// // Create a context for user data
// export const UserContext = createContext();

// // UserProvider component to wrap the app
// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserProfile = async () => {
//     setLoading(true);
//     try {
//       const profile = await backendActor.api_get_my_account(); // Fetch user profile from backend
//       setUserData(profile);
//       console.log("profile", profile)
//     } catch (err) {
//       console.error("Failed to fetch user profile:", err);
//       setError("Failed to fetch user profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   return (
//     <UserContext.Provider value={{ userData, loading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to access user data
// export const useUser = () => React.useContext(UserContext);

// import React, { createContext, useEffect, useState } from "react";
// import { HttpAgent, Actor } from "@dfinity/agent";
// import { idlFactory } from "../../../declarations/dabarcodes_backend/dabarcodes_backend.did.js"; // Adjust path as necessary

// const canisterId = 'dmalx-m4aaa-aaaaa-qaanq-cai'; // Backend canister ID for local development

// // Create an agent for IC communication
// const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

// if (process.env.NODE_ENV === 'development') {
//   agent.fetchRootKey(); // Fetch the root key in development mode
// }

// // Create actor to interact with the backend
// const backendActor = Actor.createActor(idlFactory, {
//   agent,
//   canisterId,
// });
// console.log("Backend api", backendActor);

// // Create a context for user data
// export const UserContext = createContext();

// // UserProvider component to wrap the app
// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserProfile = async () => {
//     setLoading(true);
//     try {
//       const profile = await backendActor.api_get_my_account(); // Fetch user profile from backend
//       setUserData(profile);
//       console.log("profile", profile);
//     } catch (err) {
//       console.error("Failed to fetch user profile:", err);
//       setError("Failed to fetch user profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   return (
//     <UserContext.Provider value={{ userData, loading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to access user data
// export const useUser = () => React.useContext(UserContext);
import React, { createContext, useEffect, useState } from "react";
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory } from "../../../declarations/dabarcodes_backend/dabarcodes_backend.did.js"; // Adjust path as necessary

const canisterId = "dmalx-m4aaa-aaaaa-qaanq-cai"; 

// Create an agent for IC communication
const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

if (process.env.NODE_ENV === "development") {
  agent.fetchRootKey(); 
}

// Create actor to interact with the backend
const backendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});
console.log("Backend API:", backendActor);

// Create a context for user data
export const UserContext = createContext();

// UserProvider component to wrap the app
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const createUserAccount = async (userProfileData) => {
    try {
      console.log("Creating account with data:", userProfileData);
      // Use backendActor instead of canisterActor
      const result = await backendActor.api_create_account(userProfileData);
      console.log("Account created successfully:", result);
      setUserData(result); // Store the account data
    } catch (error) {
      console.error("Failed to create user account:", error);
      setError("Failed to create user account");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createUserAccount(); 
  }, []);

  return (
    <UserContext.Provider value={{ userData, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => React.useContext(UserContext);
















// import React, { createContext, useEffect, useState } from "react";
// import { HttpAgent, Actor } from "@dfinity/agent";
// import { Principal } from "@dfinity/principal";
//  import { idlFactory } from "../../../declarations/dabarcodes_backend/dabarcodes_backend.did.js";

// const canisterId = 'dmalx-m4aaa-aaaaa-qaanq-cai';

// const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });

// if (process.env.NODE_ENV === 'development') {
//   agent.fetchRootKey();
// }

// // Create actor to interact with the backend
// const backendActor = Actor.createActor(idlFactory, {
//   agent,
//   canisterId,
// });
// console.log("Backend API:", backendActor);

// // Create a context for user data
// export const UserContext = createContext();

// // UserProvider component to wrap the app
// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const createUserAccount = async (userProfileData) => {
//     setLoading(true);

//     try {
//       console.log('Creating account with data:', userProfileData);
//       const result = await backendActor.api_create_account(userProfileData);
//       setUserData(result);
//       console.log('Account created successfully:', result);
//     } catch (err) {
//       console.error('Failed to create user account:', err);
//       setError("Failed to create user account");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Call createUserAccount with actual user profile data when available
//     const userProfileData = {}; // Replace with actual data
//     createUserAccount(userProfileData);
//   }, []);

//   return (
//     <UserContext.Provider value={{ userData, loading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to access user data
// export const useUser = () => React.useContext(UserContext);
