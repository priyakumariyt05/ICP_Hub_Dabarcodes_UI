
import React from 'react'
import Navbar2 from '../components/Navbar2'
import CategoryCard from '../ReusableComponents/CategoryCard'
import Footer from '../components/Footer';
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";

const ExploreCategory = () => {
    const categories = [
        { name: 'Dairy Products', image: '/image/dairy.png', backgroundColor: '#F7F4EC' },
        { name: 'Frozen Food', image: '/image/dairy.png', backgroundColor: '#F1E7FE' },
        { name: 'Fresh Meat', image: '/image/dairy.png', backgroundColor: '#FED3D2' },
        { name: 'Shelf Stable Food', image: '/image/dairy.png', backgroundColor: '#F1E3D6' },
        { name: 'Fruits and Vegetables', image: '/image/dairy.png', backgroundColor: '#D5F7C5' },
        { name: 'Dairy Product', image: '/image/dairy.png', backgroundColor: '#B5E8FB' },
        { name: 'Shelf Stable Food', image: '/image/dairy.png', backgroundColor: '#F1E3D6' },
        { name: 'Fruits and Vegetables', image: '/image/dairy.png', backgroundColor: '#D5F7C5' },
        { name: 'Dairy Product', image: '/image/dairy.png', backgroundColor: '#B5E8FB' },
        { name: 'Shelf Stable Food', image: '/image/dairy.png', backgroundColor: '#F1E3D6' },
        { name: 'Fruits and Vegetables', image: '/image/dairy.png', backgroundColor: '#D5F7C5' },
        { name: 'Dairy Product', image: '/image/dairy.png', backgroundColor: '#B5E8FB' },
        { name: 'Shelf Stable Food', image: '/image/dairy.png', backgroundColor: '#F1E3D6' },
        { name: 'Fruits and Vegetables', image: '/image/dairy.png', backgroundColor: '#D5F7C5' },
        { name: 'Dairy Product', image: '/image/dairy.png', backgroundColor: '#B5E8FB' }
      ];
  return (
    <>
    <Navbar2/>
      <section className="subscription" style={{
         width:"90%",
         backgroundColor:'#E7F8FE',
         alignItems:'center',
         display:'flex',
         margin:'70px auto'
          }}>
            <div className="sub-image">
                <img src="/image/10.png" alt="" />
            </div>
            {/* <div className="sub-text">
                <h2>Join the subscription</h2>
                <p>Unlock exclusive access to gain unparalleled benefits designed to enhance your shopping experience:</p>
                <ul className="benefits-list">
                    <li> <img src="/image/Vector.png" alt="image" />
                     Exclusive Deals</li>
                     <li> <img src="/image/Vector (1).png" alt="image" />
                     Personalized Offers</li>
                     <li> <img src="/image/Vector (2).png" alt="image" />
                     Seamless Shopping</li>
                     </ul>
                <a href="#" className="subscribe-btn">Subscribe Now</a>
            </div> */}
            <main className="lg:pl-0 md:pl-52 sm:pl-36 pl-8 pb-4 ">
       
       <div className=" mb-8">
         <span className="text-2xl font-bold italic mb-4 block mt-10">
           Join the Subscription
         </span>
         <p className="text-md mb-6">
           Unlock exclusive access to gain unparalleled benefits designed to
           enhance <br /> your shopping experience:
         </p>
       </div>
 <div className="mb-8">
         <div className="xl:flex flex-wrap   gap-20 space-y-4">
           <div className="flex items-center space-x-4 ">
             <RiDiscountPercentFill size={40} color="#B72322" />
             <p className="text-md font-bold">Exclusive Deals</p>
           </div>
           <div className="flex items-center space-x-4 ">
             <FaHeart size={38} color="#B72322" />
             <p className="text-md font-bold">Personalized Offers</p>
           </div>
         </div>
         <div className="flex items-center space-x-4 mt-4">
           <IoBagHandle size={40} color="#B72322" />
           <p className="text-md font-bold">Seamless Shopping</p>
         </div>
       </div>

       {/* Subscribe Button */}
       <div className="md:pb-8 xl:pb-0">
         <Link
           to="/subscription-plans"
           className="bg-[#0D90C1] text-white py-2 px-6 rounded-md text-md font-medium"
         >
           Subscribe Now
         </Link>
       </div>
     </main>
        </section>


        <div className="p-8">
    
        <div className="flex items-center justify-center mt-4 mb-10">
        <h1 className="font-[Butler] text-[32px] sm:text-[36px] md:text-[39px] font-extrabold leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
  Explore Promotions by Category
</h1>

  {/* <h1 className="font-[Butler] text-[39px] font-extrabold leading-[46.8px] text-center text-[#171717]">Explore Promotions by Category</h1> */}
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-24">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ExploreCategory