import React, { createContext, useContext, useState } from "react";

import {
  wishlistData,
  linkedSkuData,
  TopSku,
  UpcomingOffer,
  retailers,
  comboData,
  brands,
  categories,
  products,
  RandomcardData,
} from "../Data/data";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [wishlist] = useState(wishlistData);
  const [linkedSku] = useState(linkedSkuData);
  const [topSku] = useState(TopSku);
  const [upComingOffer] = useState(UpcomingOffer);
  const [retailerList] = useState(retailers);
  const [combo] = useState(comboData);
  const [brandData] =useState(brands);
  const[exploreCategory] =useState(categories)
  const [product] =useState(products)
  const [randomCardData] =useState(RandomcardData)

  return (
    <DataContext.Provider
      value={{
        wishlist,
        linkedSku,
        topSku,
        upComingOffer,
        retailerList,
        combo,
        brandData,
        exploreCategory,
        product,
        randomCardData

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   // wishlistData,
//   linkedSkuData,
//   TopSku,
//   UpcomingOffer,
//   retailers,
//   comboData,
//   brands,
//   categories,
//   products,
//   RandomcardData,
// } from "../Data/data";
// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [linkedSku] = useState(linkedSkuData); // Static data remains unchanged
//   const [topSku] = useState(TopSku);
//   const [upComingOffer] = useState(UpcomingOffer);
//   const [retailerList] = useState(retailers);
//   const [combo] = useState(comboData);
//   const [brandData] = useState(brands);
//   const [exploreCategory] = useState(categories);
//   const [product] = useState(products);
//   const [randomCardData] = useState(RandomcardData);

//   // Fetch wishlist data from the API
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await fetch("/api/product/get");
//         if (!response.ok) {
//           throw new Error(`Failed to fetch wishlist. Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setWishlist(data); // Assuming API returns wishlist-compatible data
//       } catch (error) {
//         console.error("Error fetching wishlist data:", error);
//       }
//     };

//     fetchWishlist();
//   }, []); // Run once on mount

//   return (
//     <DataContext.Provider
//       value={{
//         wishlist,
//         linkedSku,
//         topSku,
//         upComingOffer,
//         retailerList,
//         combo,
//         brandData,
//         exploreCategory,
//         product,
//         randomCardData,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
// import React, { createContext, useContext, useState, useEffect } from "react";

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [linkedSku, setLinkedSku] = useState([]);
//   const [topSku, setTopSku] = useState([]);
//   const [upComingOffer, setUpComingOffer] = useState([]);
//   const [retailerList, setRetailerList] = useState([]);
//   const [combo, setCombo] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

// // Fetch wishlist data
// const fetchWishlist = async () => {
//   try {
//     setLoading(true); // Start loading
//     const response = await fetch("/api/product/get");
//     if (!response.ok) {
//       // Handle response errors
//       throw new Error(
//         `Wishlist API Error: ${response.status} - ${response.statusText}`
//       );
//     }
//     const data = await response.json(); // Parse JSON response
//     setWishlist(data); // Set fetched data
//     setError(null); // Clear any previous error
//   } catch (err) {
//     console.error("Error fetching wishlist:", err);
//     setWishlist([]); // Fallback to empty wishlist
//     setError(err.message); // Store error message
//   } finally {
//     setLoading(false); // Stop loading
//   }
// };

// // Fetch wishlist on component mount
// useEffect(() => {
//   fetchWishlist();
// }, []);
//   return (
//     <DataContext.Provider
//       value={{
//         wishlist,
//         linkedSku,
//         topSku,
//         upComingOffer,
//         retailerList,
//         combo,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
