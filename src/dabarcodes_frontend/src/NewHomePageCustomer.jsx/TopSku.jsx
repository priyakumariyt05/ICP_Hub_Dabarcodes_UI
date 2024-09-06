import React from 'react'

import TopSkuGrid from './TopSkuGrid'
import RetailerCard from './RetailerCard'
import RetailerGrid from './RetailerGrid'
import RetailerCarousel from './RetailerCarousel'
import Recomendation from './Recomendation'

const Sku =[
    {
             id: 1,
             image: '/image/drink.png',
             name: 'Nestle Ice Coffee',
             brand: 'Lingo Pvt Ltd',
             size: '527 ml',
             discount: '$15 off',
             disc: 'Super smooth and creamy vanilla half and half crowned with s...',
             price: '$27',
           },
           {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },

          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            promoted:"Promoted by",
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
   ]
   const retailers = [
    { storeName: 'Retailer A', offer: '10% off on all products', validTill: '31st December 2024', imageSrc: '/image/promo.png' },
    { storeName: 'Retailer B', offer: '20% off on electronics', validTill: '15th January 2025', imageSrc: '/image/promo.png'},
    { storeName: 'Retailer C', offer: 'Buy 1 Get 1 Free', validTill: '10th November 2024', imageSrc: '/image/promo.png' },
    // Add more retailers as needed
  ];
  const handleViewAllClick = () => {
    // Logic for when the "View All" button is clicked
  };
const TopSku = () => {
  return (
    <>
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4 font-roboto lg:m-10 sm:m-0">Top SKUs</h1>
    <TopSkuGrid products={Sku} />
  </div>
  {/* Secton 2 */}
  
<Recomendation/>
<Recomendation/>
<RetailerGrid/>
{/* <RetailerCarousel/> */}
<RetailerCarousel
      title="Recommended near me"
      retailers={retailers}
      buttonLabel="View All"
      onViewAllClick={handleViewAllClick}
    />
    <RetailerCarousel
     retailers={retailers}
 onViewAllClick={handleViewAllClick}
    />

</>

  )
}

export default TopSku