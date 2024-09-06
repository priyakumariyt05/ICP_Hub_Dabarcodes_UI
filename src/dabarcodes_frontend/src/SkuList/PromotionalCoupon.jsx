import React from 'react';
import Navbar2 from '../components/Navbar2';
import CouponCard from './CouponCard';
import Footer from '../components/Footer';
const coupons = [
    { id: 1, title: '$25 OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. July 29', bgColor: 'bg-[#6087D4]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 2, title: '20% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. July 29', bgColor: 'bg-[#763AB6]', buttonColor: 'bg-blue-500',  imageUrl: '/image/vector2.png' },
    { id: 3, title: 'Bundle OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. July 20', bgColor: 'bg-[#EC5F93]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector3.png' },
    { id: 4, title: '$10 OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. August 10', bgColor: 'bg-[#763AB6]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 5, title: '15% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. August 15', bgColor: 'bg-[#EC5F93]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 6, title: '$20 OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. August 20', bgColor: 'bg-[#6087D4]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 7, title: '$30 OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. August 25', bgColor: 'bg-[#763AB6]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 8, title: '25% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. September 1', bgColor: 'bg-[#EC5F93]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 9, title: '$5 OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. September 10', bgColor: 'bg-[#763AB6]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 10, title: '5% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. September 15', bgColor: 'bg-[#EC5F93]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 11, title: '30% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. September 20', bgColor: 'bg-[#6087D4]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 12, title: '10% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. October 1', bgColor: 'bg-[#763AB6]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 13, title: '20% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. October 5', bgColor: 'bg-[#EC5F93]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 14, title: '$15 OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. October 10', bgColor: 'bg-[#6087D4]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
    { id: 15, title: '15% OFF', description: 'On Frozen Products and Fruits', expiry: 'Exp. October 15', bgColor: 'bg-[#763AB6]', buttonColor: 'bg-blue-500', imageUrl: '/image/vector2.png' },
  ];

  const PromotionalCoupon = () => (
    <>
    <Navbar2/>
    <div className="p-8">
        <div className="flex justify-between items-center mt-10 mb-10">
          {/* <h1 className="text-2xl font-semibold">Promotional Coupon</h1> */}
          <h1 className="text-2xl font-extrabold text-custom-dark leading-[30px] text-center font-butler">
  Promotional Coupon
</h1>

          <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
            Filter
          </button>
        </div>
         <div className="p-5 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id} {...coupon} />
        ))}
      </div>
    </div>
</div>
<Footer/>
    </>
   
  );
export default PromotionalCoupon;
