import Navbar2 from "../components/Navbar2";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
  
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42 (1).png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  }, {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  }, 

];

function ProductGrid() {
  return (
<>
      {/* <Navbar2 /> */}

<div className="p-4 sm:p-6 md:p-8 mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          {/* <h1 className="text-xl sm:text-2xl font-semibold">Products</h1> */}
          <h1 className="text-[25px] font-extrabold font-butler leading-[30px] text-[#171717] text-center">
  Products
</h1>

          <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
            Filter
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
 
  );
}

export default ProductGrid;