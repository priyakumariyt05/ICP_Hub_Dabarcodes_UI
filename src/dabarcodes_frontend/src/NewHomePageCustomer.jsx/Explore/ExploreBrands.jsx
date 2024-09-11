import ExploreItems from "./ExploreItems";
import { useData } from "../../ContextApi/DataContext";
// const brands = [
//     {id: 1, name: "Nestle", logo: "/image/brand.png"},
//     {id: 2, name: "Pepsi", logo: "/image/brand.png"},
//     {id: 3, name: "Starbucks", logo: "/image/brand.png"},
//     {id: 4, name: "McDonalds", logo: "/image/brand.png"},
//     {id: 5, name: "Burger King", logo: "/image/brand.png"},
//     {id: 6, name: "Britannia", logo: "/image/brand.png"},
//     {id: 7, name: "McCain", logo: "/image/brand.png"},
//     {id: 8, name: "Kissan", logo: "/image/brand.png"},
//     {id: 9, name: "Mother Dairy", logo: "/image/brand.png"},
//     {id: 10, name: "Veeba", logo: "/image/brand.png"},
//     {id: 11, name: "Parle", logo: "/image/brand.png"},
//     {id: 12, name: "Paper Boat", logo: "/image/brand.png"},
//     {id: 13, name: "RockRider", logo: "/image/brand.png"},
//     {id: 14, name: "Saffola", logo: "/image/brand.png"},
//     {id: 15, name: "Dominos Pizza", logo: "/image/brand.png"},
//   // Add more brands...
// ];
// const [brands, setBrands] = useState([]);

//   // Fetch brands data from an API
//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await fetch('https://api.example.com/brands'); 
//         const data = await response.json();
//         setBrands(data); // Assuming the API returns an array of brand objects
//       } catch (error) {
//         console.error("Error fetching brands:", error);
//       }
//     };

//     fetchBrands();

const ExploreBrands = () => {
    const { brandData} =
    useData();
  return <ExploreItems title="Explore by Brand" items={brandData} />;
};

export default ExploreBrands;