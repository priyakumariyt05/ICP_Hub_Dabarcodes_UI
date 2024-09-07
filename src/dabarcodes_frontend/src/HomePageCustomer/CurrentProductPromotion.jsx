import React from "react";
import CouponCard from "../SkuList/CouponCard";
const CurrentProductPromotion = () => {
  const coupons = [
    {
      id: 1,
      title: "$25 OFF",
      description: "On Frozen Products and Fruits",
      expiry: "Exp. July 29",
      bgColor: "bg-[#6087D4]",
      buttonColor: "bg-blue-500",
      imageUrl: "/image/vector2.png",
    },
    {
      id: 2,
      title: "20% OFF",
      description: "On Frozen Products and Fruits",
      expiry: "Exp. July 29",
      bgColor: "bg-[#763AB6]",
      buttonColor: "bg-blue-500",
      imageUrl: "/image/vector2.png",
    },
    {
      id: 3,
      title: "Bundle OFF",
      description: "On Frozen Products and Fruits",
      expiry: "Exp. July 20",
      bgColor: "bg-[#EC5F93]",
      buttonColor: "bg-blue-500",
      imageUrl: "/image/vector3.png",
    },
  ];
  const products = [
    {
      name: "Frozen Beverage",
      discount: "10% OFF",
      bgColor: "bg-blue-100",
      imageUrl: "/image/dairy.png",
    },
    {
      name: "Packed Corn",
      discount: "25% off at $18",
      bgColor: "bg-yellow-100",
      imageUrl: "/image/dairy.png",
    },
    {
      name: "Fresh Fruit",
      discount: "20% OFF",
      bgColor: "bg-green-100",
      imageUrl: "/image/dairy.png",
    },
    {
      name: "Frozen Meat",
      discount: "30% OFF",
      bgColor: "bg-red-100",
      imageUrl: "/image/dairy.png",
    },
    {
      name: "Frozen Drink",
      discount: "30% OFF",
      bgColor: "bg-blue-100",
      imageUrl: "/image/dairy.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center pl-4 md:pl-10 mb-4">
          <h1 className="text-xl md:text-2xl font-semibold p-4 font-serif">
            Current Products on Promotion
          </h1>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col md:flex-row min-h-screen gap-8">
          <aside className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-md md:h-1/2">
            <ul className="space-y-4 pt-10 pb-24">
              <li className="text-white medium cursor-pointer bg-[#763AB6] p-4">
                Percentage Off
              </li>
              <li className="cursor-pointer">Dollor Off</li>
              <hr className="my-4 border-t-2 border-gray-300" />
              <li className="cursor-pointer">Bundle Off</li>
              <hr className="my-4 border-t-2 border-gray-300" />
            </ul>
          </aside>
          <div className="flex flex-col flex-1 border border-gray-300 rounded p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-butler text-2xl font-extrabold leading-6 text-left text-[#171717]">
                  Products
                </h2>
                <a href="#" className="text-blue-500">
                  View all
                </a>
              </div>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 ${product.bgColor} rounded-lg`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-butler text-[20px] font-medium leading-[24px] text-[#000000] text-left">
                          {product.name}
                        </p>
                        <p className="font-butler font-extrabold leading-base text-black text-left">
                          {product.discount}
                        </p>
                      </div>
                    </div>
                    <button className="px-[51px] py-[6px] gap-[10px] bg-blue-500 text-white rounded mr-4 sm:mr-6 md:mr-10 lg:mr-12">
                      Linked
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-butler text-[20px] font-extrabold leading-[24px] text-left">
                  Promotions
                </h2>
                <a href="#" className="text-blue-500">
                  View all
                </a>
              </div>
              <div className="max-w-7xl mx-auto rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {coupons.slice(0, 2).map((coupon) => (
                    <CouponCard key={coupon.id} {...coupon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentProductPromotion;
