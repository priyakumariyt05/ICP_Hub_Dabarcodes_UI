import React from "react";
import ProductSection2 from "./ProductSection2";
import Category from "./Category";
import Recomendation from "./Recomendation";
import RetailerCarousel from "./RetailerCarousel";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import { useData } from "../ContextApi/DataContext";
import BestCombo from "./BestCombo";
import LinkedSku from "./Modals/LinkedSku";
const HomePage2 = () => {
  const { wishlist, linkedSku, topSku, upComingOffer, retailerList, combo } =
    useData();

  const handleViewAllClick = () => {
    // Logic for when the "View All" button is clicked
  };

  const firstHalf = combo.slice(0, 2);
  const secondHalf = combo.slice(2, 4);
  return (
    <>
      <Navbar2 />
      <div className="flex items-center justify-center mb-10 mt-4 md:mt-4">
        <h1 className="mt-10 font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.44rem] leading-[2.5rem] sm:leading-[2.75rem] md:leading-[2.925rem] text-center text-[#171717]">
          Top SKU's Of The Week
        </h1>
      </div>
      <Recomendation />

      <div className="mx-auto p-4 ">
        <div className="p-4 space-y-8">
          <ProductSection2 title="My Wishlist" products={wishlist} />
          <ProductSection2 title="My Linked SKU" products={linkedSku} />
          <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
        </div>
        <LinkedSku/>
      </div>

      <Category />
      {/* <Explore_Category/> */}
      <div className="mx-auto p-4 ">
        <div className="p-4 space-y-8">
          <ProductSection2 title="Top SKU" products={topSku} />
          <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
        </div>
      </div>

      {/* combo */}
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2">
          <BestCombo data={firstHalf} />
        </div>
        <div className="w-full md:w-1/2">
          <BestCombo data={secondHalf} />
        </div>
      </div>

      <RetailerCarousel
        title="Recommended near me"
        retailers={retailerList}
        buttonLabel="View All"
        onViewAllClick={handleViewAllClick}
      />
      <Footer />
    </>
  );
};

export default HomePage2;


// import React from "react";
// import ProductSection2 from "./ProductSection2";
// import Category from "./Category";
// import Recomendation from "./Recomendation";
// import RetailerCarousel from "./RetailerCarousel";
// import Footer from "../components/Footer";
// import Navbar2 from "../components/Navbar2";
// import { useData } from "../ContextApi/DataContext";
// import BestCombo from "./BestCombo";
// import LinkedSku from "./Modals/LinkedSku";

// const HomePage2 = () => {
//   const { wishlist, linkedSku, topSku, upComingOffer, retailerList, combo, loading, error } = useData();

//   const handleViewAllClick = () => {
//     console.log("View All clicked");
//   };

//   const firstHalf = combo.slice(0, 2);
//   const secondHalf = combo.slice(2, 4);

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex items-center justify-center mb-10 mt-4 md:mt-4">
//         <h1 className="mt-10 font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.44rem] leading-[2.5rem] sm:leading-[2.75rem] md:leading-[2.925rem] text-center text-[#171717]">
//           Top SKU's Of The Week
//         </h1>
//       </div>
//       <Recomendation />

//       <div className="mx-auto p-4 ">
//         <div className="p-4 space-y-8">
//           {/* Wishlist Section */}
//           <div>
//             {loading && <p className="text-center">Loading wishlist...</p>}
//             {error && (
//               <p className="text-center text-red-500">
//                 Error loading wishlist: {error}
//               </p>
//             )}
//             {!loading && !error && wishlist && wishlist.length > 0 && (
//               <ProductSection2 title="My Wishlist" products={wishlist} />
//             )}
//             {!loading && !error && wishlist && wishlist.length === 0 && (
//               <p className="text-center">No items in wishlist.</p>
//             )}
//           </div>

//           {/* Linked SKU Section */}
//           <ProductSection2 title="My Linked SKU" products={linkedSku} />

//           {/* Upcoming Offer Section */}
//           <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
//         </div>
//         <LinkedSku />
//       </div>

//       <Category />
//       <div className="mx-auto p-4 ">
//         <div className="p-4 space-y-8">
//           <ProductSection2 title="Top SKU" products={topSku} />
//           <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
//         </div>
//       </div>

//       {/* Combo Section */}
//       <div className="flex flex-col md:flex-row ">
//         <div className="w-full md:w-1/2">
//           <BestCombo data={firstHalf} />
//         </div>
//         <div className="w-full md:w-1/2">
//           <BestCombo data={secondHalf} />
//         </div>
//       </div>

//       <RetailerCarousel
//         title="Recommended near me"
//         retailers={retailerList}
//         buttonLabel="View All"
//         onViewAllClick={handleViewAllClick}
//       />
//       <Footer />
//     </>
//   );
// };

// export default HomePage2;
//  with api below
// import React, { useEffect, useState } from "react";
// import ProductSection2 from "./ProductSection2";
// import Navbar2 from "../components/Navbar2";
// import Footer from "../components/Footer";
// import Recomendation from "./Recomendation";
// import { useData } from "../ContextApi/DataContext";
// import BestCombo from "./BestCombo";
// import LinkedSku from "./Modals/LinkedSku";



// const HomePage2 = () => {
//   const { wishlist, linkedSku, topSku, upComingOffer, retailerList, combo } =
//   useData();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://demo4.kaifoundry.com/product/get");
//         const data = await response.json();
//         setProducts(data); // Store API data in state
//         setLoading(false); // Stop loading
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Stop loading even if there's an error
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex items-center justify-center mb-10 mt-4 md:mt-4">
//         <h1 className="mt-10 font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.44rem] leading-[2.5rem] sm:leading-[2.75rem] md:leading-[2.925rem] text-center text-[#171717]">
//           Top SKU's Of The Week
//         </h1>
//       </div>
//       <Recomendation />
//       {/* Display Product Section */}
//       <div className="mx-auto p-4">
//         <div className="p-4 space-y-8">
//           {loading ? (
//             <div className="flex justify-center items-center h-48">
//               <p className="text-lg">Loading...</p>
//             </div>
//           ) : (
//             <ProductSection2 title="Top Products" products={products} />
//           )}
//         </div>
//       </div>
//       <ProductSection2 title="My Linked SKU" products={linkedSku} />

//       <Footer />
//     </>
//   );
// };

// export default HomePage2;