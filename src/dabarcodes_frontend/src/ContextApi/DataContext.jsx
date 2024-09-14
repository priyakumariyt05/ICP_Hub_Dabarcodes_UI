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

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
