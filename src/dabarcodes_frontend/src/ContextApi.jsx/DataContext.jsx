// DataContext.js
import React, { createContext, useContext, useState } from 'react';
// import { wishlistData, linkedSkuData, TopSku, UpcomingOffer, retailers } from './C'; 
import { wishlistData, linkedSkuData, TopSku, UpcomingOffer, retailers } from '../Data/data';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [wishlist] = useState(wishlistData);
  const [linkedSku] = useState(linkedSkuData);
  const [topSku] = useState(TopSku);
  const [upComingOffer] = useState(UpcomingOffer);
  const [retailerList] = useState(retailers);

  return (
    <DataContext.Provider value={{ wishlist, linkedSku, topSku, upComingOffer, retailerList }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
