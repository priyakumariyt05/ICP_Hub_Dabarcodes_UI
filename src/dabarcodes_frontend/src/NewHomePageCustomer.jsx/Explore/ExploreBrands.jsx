import ExploreItems from "./ExploreItems";
import { useData } from "../../ContextApi/DataContext";

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